<template>
  <div class="answerCardContainer">
    <!-- {{id}}
    {{questionId}}
    {{questionType}} -->
    <button
      v-if="this.questionType !== 'open'"
      id="isCorrectButton"
      class="item1"
      @click="invertIsCorrect"
    >
      <font-awesome-icon v-if="isCorrect" icon="fa-solid fa-circle-check" />
      <font-awesome-icon v-if="!isCorrect" icon="fa-regular fa-circle" />
    </button>
    <div class="item2">
      <input
        id="answerInput"
        class="questionInput"
        type="text"
        v-model="answerAnswer"
        @change="updateAnswer"
        :placeholder="this.answer"
      />
    </div>
    <button id="deleteButtton" class="item3" @click="deleteAnswer">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </div>
</template>

<script>
export default {
  name: "AnswerCard",
  emits: ["reloadList"],
  props: {
    id: Number,
    questionId: Number,
    number: Number,
    answer: String,
    isCorrect: Boolean,
  },
  data() {
    return {
      answerNumber: -1,
      answerAnswer: '',
      answerIsCorrect: false,
      // questionType: this.$store.getters.questionById(this.questionId).type,
    };
  },
  computed: {
    questionType() {
      return this.$store.getters.questionById(this.questionId).type
    },
  },
  methods: {
    invertIsCorrect() {
      this.answerIsCorrect = !this.answerIsCorrect;
      this.updateAnswer();
      this.$emit('reloadList');
    },
    updateAnswer() {
      this.$store.commit("updateAnswer", {
        id: this.id,
        questionId: this.questionId,
        number: this.number,
        answer: this.answerAnswer,
        isCorrect: this.answerIsCorrect,
      });
      this.$emit('reloadList');
    },
    deleteAnswer() {
      if (this.questionType !== "goedfout") {
        this.$store.commit("deleteAnswer", this.id);
        this.$emit('reloadList');
      }
    },
  },
  mounted() {
    this.answerNumber = this.number;
    this.answerAnswer = this.answer;
    this.answerIsCorrect = this.isCorrect;
    if (this.questionType == "open") {
      this.answerIsCorrect = true;
    }
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
  /* padding: 10px; */
  padding-top: 0px;
  /* height: 20px; */
  /* background-color: #B4DFE5; */

}
.answerCardContainer > div {
  /* background-color: rgb(255, 255, 255); */
  text-align: center;
  padding: 2px;
  font-size: 24px;
}
.item1 {
  grid-area: correct;
}
.item2 {
  grid-area: antwoord;
}
.item3 {
  grid-area: verwijder;
}
</style>
