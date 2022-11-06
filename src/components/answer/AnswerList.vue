<template>
  <ul>
    <li v-for="answer in this.answers" :key="answer.number">
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

</style>
