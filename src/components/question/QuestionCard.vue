<template>
  <div id="questionCard">
    <QuestionInfo :question="this.question" :number="this.number" :type="this.type" :time="this.time"/>
    <div id="answers">
      <ul>
        <li v-for="answer in this.answers" :key="answer.answer">
          <!-- hier het antwoord component -->
        </li>
      </ul>
    </div>
    <div id="addAnswerButton"></div>
  </div>
</template>

<script>
import QuestionInfo from './QuestionInfo.vue';

export default {
  name: "QuestionCard",
  components: {
    QuestionInfo,
  },
  props: {
    question: String,
    answers: Array,
    number: Number,
    type: String,
    time: Number,
  },
  
};
</script>

<style scoped>
#questionCard {
  box-sizing: border-box;

  position: absolute;
  height: 300px;
  float:left;
  left: 16px;
  right: 20px;
  top: 14px;

  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
}
</style>
