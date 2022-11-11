<template>
  <div class="answerCardContainer">
    <button class="item1" @click="invertIsCorrect">
      <font-awesome-icon v-if="isCorrect" icon="fa-solid fa-circle-check" />
      <font-awesome-icon v-if="!isCorrect" icon="fa-regular fa-circle" />
    </button>
    <div class="item2"><input
        class="questionInput"
        v-model="answerAnswer"
        @change="updateAnswer"
        :placeholder="this.answer"
      /></div>
    <button class="item3" @click="deleteAnswer">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </div>
</template>

<script>
export default {
  name: "AnswerCard",
  props: {
    questionNumber: Number,
    number: Number,
    answer: String,
    isCorrect: Boolean,
  },
  data() {
    return {
      answerNumber: -1,
      answerAnswer: '',
      answerIsCorrect: false,
    }
  },
  methods: {
    invertIsCorrect() {
      this.answerIsCorrect = !this.answerIsCorrect;
      this.updateAnswer();
    },
    updateAnswer() {
      this.$store.commit('updateAnswer', {
        questionNumber: this.questionNumber,
        number: this.answerNumber,
        answer: this.answerAnswer,
        isCorrect: this.answerIsCorrect,
      })
    },
    deleteAnswer() {
      this.$store.commit('deleteAnswer', {
        questionNumber: this.questionNumber,
        number: this.answerNumber,
      })
      // this.$store.commit('sortAnswers', {
      //   questionNumber: this.questionNumber,
      // })
    },
  },
  mounted() {
    this.answerNumber = this.number;
    this.answerAnswer = this.answer;
    this.answerIsCorrect = this.isCorrect;
  },
};
</script>

<style scoped>
.questionInput {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
/* TODO: deze grid omzetten naar zo een zonder grid-template-areas */
.answerCardContainer {
  display: grid;
  grid-template-areas: "correct antwoord antwoord antwoord antwoord antwoord antwoord antwoord antwoord antwoord verwijder";
  gap: 10px;
  /* background-color: #8d8d8d; */
  padding: 10px;
  padding-top: 0px;
  /* height: 20px; */
}
.answerCardContainer > div {
  /* background-color: rgb(255, 255, 255); */
  background-color: transparent;
  text-align: center;
  padding: 2px;
  font-size: 24px;
}
.answerCardContainer:nth-of-type(2n) > div {
  background-color:rgb(221, 75, 75);
}
.item1 {
  width: 100px;
  grid-area: correct;
}
.item2 {
  grid-area: antwoord;
}
.item3 {
  grid-area: verwijder;
}
</style>
