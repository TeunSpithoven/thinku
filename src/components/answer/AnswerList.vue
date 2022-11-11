<template>
  <ul class="answerGroup">
    <li v-for="answer in this.answers" :key="answer.number" class="cell">
      <AnswerCard
        :questionNumber="this.questionNumber"
        :number="answer.number"
        :answer="answer.answer"
        :isCorrect="answer.isCorrect"
      />
    </li>
  </ul>
</template>

<script>
import AnswerCard from "@/components/answer/AnswerCard.vue";

export default {
  name: "AnswerList",
  components: {
    AnswerCard,
  },
  props: {
    questionNumber: Number,
    answers: Array,
  },
};
</script>

<style scoped>
.answerGroup {
  display:contents;
}
.r_group:nth-of-type(2n) > .cell {
  background-color:rgb(221, 75, 75);
}
.cell {
  background-color: transparent;

}
</style>
