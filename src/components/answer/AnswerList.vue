<template>
  <ul>
    <li v-for="answer in this.answers" :key="answer.answer">
      <AnswerCard
        :id="answer.id"
        :answer="answer.answer"
        :isCorrect="answer.isCorrect"
        :index="answer.index"
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
    answers: Array,
  },
};
</script>

<style scoped>

</style>
