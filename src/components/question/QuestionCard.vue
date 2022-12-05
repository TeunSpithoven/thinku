<template>
  <div id="questionCard" class="gridContainer">
    <div id="quesionInfoContainter" class="gridItem">
      <QuestionInfo
        :id="this.id"
        :question="this.question"
        :number="this.number"
        :type="this.type"
        :time="this.time"
        @reload-list="reloadList()"
      />
    </div>
    <div id="answers" class="gridItem">
      <AnswerList
        :questionId="this.id"
        :answers="this.answers"
        :questionNumber="this.number"
        :questionType="this.type"
      />
    </div>
  </div>
</template>

<script>
import QuestionInfo from "./QuestionInfo.vue";
import AnswerList from "@/components/answer/AnswerList.vue";

export default {
  name: "QuestionCard",
  emits: ["reloadList", "updateAnswer"],
  components: {
    QuestionInfo,
    AnswerList,
  },
  props: {
    id: Number,
    question: String,
    answers: Array,
    number: Number,
    type: String,
    time: Number,
  },
  methods: {
    createAnswer() {
      // console.log(this.answers.length)
      const correct = this.type == "open";
      this.$store.commit("createAnswer", {
        questionId: this.id,
        questionNumber: this.number,
        number: this.answers.length + 1,
        answer: "nieuw antwoord",
        isCorrect: correct,
      });
    },
    reloadList() {
      this.$emit("reloadList");
    },
  },
};
</script>

<style scoped>
#questionCard {
  box-sizing: border-box;

  position: relative;
  padding: 10px;
  /* background-color: #B4DFE5; */
  /* background-color: white; */
  background-color: #ffc971;
}

.gridContainer {
  /* background-color: #8d8d8d; */
  display: grid;
  gap: 10px;
  padding: 10px;
  padding-left: 10%;
  padding-right: 10%;
  /* border: 1px solid #000000; */
  border-radius: 10px;
}
.grid-item {
  background-color: #B4DFE5;
  text-align: center;
  /* deze padding weghalen */
  padding: 10px;
  font-size: 30px;
  grid-column: 1 / 5;
}
</style>
