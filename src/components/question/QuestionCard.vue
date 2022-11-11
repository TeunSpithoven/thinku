<template>
  <div id="questionCard" class="gridContainer">
    <div id="quesionInfoContainter" class="gridItem">
      <QuestionInfo
        :question="this.question"
        :number="this.number"
        :type="this.type"
        :time="this.time"
        @reload-list="reloadList()"
      />
    </div>
    <div id="answers" class="gridItem">
      <AnswerList :answers="this.answers" :questionNumber="this.number" />
    </div>
    <div class="antwoordToevoegenContainer">
      <button id="addAnswerButton" class="gridItem" @click="createAnswer">Antwoord Toevoegen</button>
    </div>
  </div>
</template>

<script>
import QuestionInfo from "./QuestionInfo.vue";
import AnswerList from "@/components/answer/AnswerList.vue";

export default {
  name: "QuestionCard",
  components: {
    QuestionInfo,
    AnswerList,
  },
  props: {
    question: String,
    answers: Array,
    number: Number,
    type: String,
    time: Number,
  },
  methods: {
    createAnswer() {
      console.log(this.answers.length)
      this.$store.commit('createAnswer', {
        questionNumber: this.number,
        number: this.answers.length + 1,
        answer: 'nieuw antwoord',
        isCorrect: false,
      });
    },
    reloadList() {
      this.$emit('reloadList');
    },
  },
};
</script>

<style scoped>
#questionCard {
  box-sizing: border-box;

  position: relative;
  padding: 10px;
  /* height: 300px; */
  /* float:left;
  left: 16px;
  right: 20px;
  top: 14px; */

  /* background: #ffffff; */
}

.gridContainer {
  /* background-color: #8d8d8d; */
  display: grid;
  gap: 10px;
  padding: 10px;
  padding-left: 10%;
  padding-right: 10%;
  border: 1px solid #000000;
  border-radius: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  /* deze padding weghalen */
  padding: 10px;
  font-size: 30px;
  grid-column: 1 / 5;
}
.antwoordToevoegenContainer {
  position: relative;
  /* height: 80px; */
  width: 100%;
}

#addAnswerButton {
  position: relative;
  box-sizing: border-box;
  border: 1px solid #000000;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 10px;

  font-size: 25px;
}
</style>
