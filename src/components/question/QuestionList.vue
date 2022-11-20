<template>
  <div id="questionListContainer" class="gridContainer">
    <div class="grid-item">
      <!-- static list -->
      <ul v-if="!toggleDrag" id="questionList" class="questionGridContainer">
        <li
          class="grid-item"
          v-for="q in questionList"
          :key="q.number"
        >
          <QuestionCard
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
      <button v-if="questionList.length > 1" class="vraagToevoegen" @click="toggleDrag = !toggleDrag">
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
    edit: Boolean,
  },
  data() {
    return {
      toggleDrag: false,
      renderQuestions: true,

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
  },
  methods: {
    createQuestion() {
      this.newQuestion.number = this.$store.state.cQ.questions.length + 1;

      this.$store.commit("createQuestion", {
        question: this.newQuestion,
      });

      (this.newQuestion = {
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
      }),
        (this.newQuestion.number = -1);
      this.reloadList();
    },
    reloadList() {
      this.renderQuestions = false;

      this.$nextTick(() => {
        this.renderQuestions = true;
      });
    },
  },
};
</script>

<style scoped>
#questionListContainer {
  overflow: auto;
  box-sizing: border-box;

  position: relative;

  border: 1px solid #000000;
  border-radius: 10px;
}
.gridContainer {
  background-color: rgba(255, 255, 255, 0.8);
  display: grid;
  gap: 10px;
  padding: 10px;
}
.questionGridContainer {
  background-color: rgba(255, 255, 255, 0.8);
  display: grid;
  gap: 10px;
  padding: 10px;
  padding-bottom: 0px;
}
.grid-item {
  /* background-color: rgb(141, 65, 65); */
  text-align: center;
  /* padding: 10px; */
  font-size: 30px;
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

  border: 1px solid #000000;
  border-radius: 10px;
}
</style>
