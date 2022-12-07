<template>
  <div id="questionListContainer" class="gridContainer">
    <div class="grid-item">
      <!-- static list -->
      <ul v-if="!toggleDrag" id="questionList" class="questionGridContainer">
        <li class="grid-item" v-for="q in questionList" :key="q.id">
          <QuestionCard
            :id="q.id"
            :question="q.question"
            :type="q.type"
            :time="q.time"
            :answers="q.answers"
            :number="q.number"
          ></QuestionCard>
        </li>
      </ul>
      <!-- draggable list -->
      <draggable
        v-model="questionList"
        :transition="100"
        v-if="toggleDrag && renderQuestions"
        class="gridContainer"
      >
        <template v-slot:item="{ item }">
          <QuestionCard
            :id="item.id"
            :question="item.question"
            :type="item.type"
            :time="item.time"
            :answers="item.answers"
            :number="item.number"
            @reload-list="reloadList()"
          ></QuestionCard>
        </template>
      </draggable>
    </div>
    <div class="vraagToevoegenContainer grid-item">
      <button class="vraagToevoegen" @click="createQuestion()">
        Vraag Toevoegen
      </button>
      <button
        v-if="questionList.length > 1"
        class="vraagToevoegen"
        @click="toggleDrag = !toggleDrag"
      >
        <div v-if="!toggleDrag">Vragen ordenen</div>
        <div v-if="toggleDrag">Opslaan</div>
      </button>
    </div>
  </div>
</template>

<script>
import QuestionCard from "@/components/question/QuestionCard.vue";

import Draggable from "vue3-draggable";

export default {
  name: "QuestionList",
  components: {
    QuestionCard,
    Draggable,
  },
  props: {
    quizId: Number,
    edit: Boolean,
  },
  data() {
    return {
      // toggleDrag: false,
      renderQuestions: this.$store.state.Question.renderQuestions,

      newQuestion: {
        question: "Nieuwe Vraag",
        type: "meerkeuze",
        time: 10,
        number: 1,
        answers: [
          {
            number: 1,
            answer: "antwoord een",
            isCorrect: false,
          },
          {
            number: 2,
            answer: "antwoord twee",
            isCorrect: true,
          },
        ],
      },
    };
  },
  computed: {
    questionList: {
      get() {
        return this.$store.getters.sortedQuestions;
      },
      set(value) {
        this.$store.commit("updateAllQuestions", value);
      },
    },
    toggleDrag: {
      get() {
        return this.$store.state.Question.dragQuestions;
      },
      set(value) {
        this.$store.commit("updateDragQuestions", value);
      },
    },
  },
  methods: {
    createQuestion() {
      this.newQuestion.number = this.$store.state.Question.questions.length + 1;
      this.$store.dispatch("createQuestion", this.newQuestion);
      this.reloadList();
    },
    reloadList() {
      this.$store.commit("unrenderQuestions");

      this.$nextTick(() => {
        this.$store.commit("renderQuestions");
      });
    },
  },
};
</script>

<style scoped>
#questionListContainer {
  overflow: auto;
  box-sizing: border-box;
  overflow: visible;

  position: relative;

  border-radius: 10px;
  background-color: transparent;
}
.gridContainer {
  display: grid;
  gap: 10px;
  overflow: visible;
  /* padding: 10px; */
}
.questionGridContainer {
  display: grid;
  gap: 10px;
  /* padding: 10px; */
  padding-bottom: 0px;
}
.grid-item {
  /* background-color: rgb(141, 65, 65); */
  text-align: center;
  /* padding: 10px; */
  font-size: 30px;
  overflow: visible;
  grid-column: 1 / 5;
}
.vraagToevoegenContainer {
  position: relative;
  /* height: 80px; */
  width: 100%;
  margin-bottom: 10px;
}

.vraagToevoegen {
  position: relative;
  box-sizing: border-box;
  margin-right: 10px;
  padding: 0px 5px;

  /* border: 1px solid #000000; */
  border-radius: 10px;
  /* background-color: #F4976C; */
 background-color:  #dedede;

}
</style>
