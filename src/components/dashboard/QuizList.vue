<template>
  <ul id="quizList">
    <li v-for="quiz in quizzes" :key="quiz.id">
      <div id="gridItem">
        <QuizCard :quiz="quiz" />
      </div>
    </li>
  </ul>
</template>

<script>
import QuizCard from "@/components/dashboard/QuizCard.vue";

export default {
  name: "QuizList",
  components: {
    QuizCard,
  },
  computed: {
    quizzes () {
      return this.$store.state.Quiz.quizzes;
    }
  },
};
</script>

<style scoped>
#quizList {
  width: 100%;

  display: grid;
  grid-template-columns: auto auto auto;
  gap: 10px;
  padding: 10px;

  border: 1px solid #000000;
  border-radius: 10px;
}
#gridItem {
  text-align: center;
  font-size: 30px;

  border: 1px solid black;
  border-radius: 10px;
}
</style>
