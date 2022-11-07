<template>
  <div id="questionListContainer" class="gridContainer">
    <div class="grid-item">
      <!-- static list -->
      <ul v-if="!toggleDrag" id="questionList" class="gridContainer">
        <li
          class="grid-item"
          v-for="q in this.$store.getters.sortedQuestions"
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
      <draggable v-model="questionList" :transition=100 v-if="toggleDrag && renderList" class="gridContainer">
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
      <button class="vraagToevoegen" @click="addQuestion()">
        Vraag Toevoegen
      </button>
      <button class="vraagToevoegen" @click="toggleDrag = !toggleDrag">
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
  data() {
    return {
      toggleDrag: false,
      renderList: true,

      newQuestion: {
        question: "Nieuwe Vraag",
        type: "meerkeuze",
        time: 10,
        number: 1,
        answers: [
          {
            number: -1,
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
  methods: {
    addQuestion() {
      this.newQuestion.number = this.$store.state.cQ.questions.length + 1;

      this.$store.commit("addQuestion", {
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
      console.log('reload');
      this.renderList = false;

      this.$nextTick(() => {
        this.renderList = true;
      });
    },
  },
  computed: {
    questionList: {
      get() {
        return this.$store.getters.sortedQuestions;
      },
      set(value) {
        this.$store.commit("updateQuestionList", value);
      },
    },
  },
};
</script>

<style scoped>
#questionList {
  overflow: auto;
  box-sizing: border-box;

  position: relative;
  /* min-height: 375px; */
  /* left: 178px;
  right: 10%;
  top: 405px; */

  border: 1px solid #000000;
  border-radius: 10px;
}
#questionListContainer {
  padding: 10px;
}
.gridContainer {
  background-color: #8d8d8d;
  display: grid;
  gap: 10px;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px;
  font-size: 30px;
  grid-column: 1 / 5;
}
.vraagToevoegenContainer {
  position: relative;
  /* height: 80px; */
  width: 100%;
}

.vraagToevoegen {
  position: relative;
  box-sizing: border-box;

  border: 1px solid #000000;
  border-radius: 10px;
}
</style>
