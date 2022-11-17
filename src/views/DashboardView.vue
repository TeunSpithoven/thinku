<template>
  <div id="dashboardContainer">
    <div id="buttonsContainer"><DashboardButtons /></div>
    <div id="quizListContainer"><QuizList /></div>
  </div>
</template>

<script>
import DashboardButtons from "@/components/dashboard/DashboardButtons.vue";
import QuizList from "@/components/dashboard/QuizList.vue";

export default {
  name: "DashboardView",
  components: {
    DashboardButtons,
    QuizList,
  },
  created() {
    this.$store.commit('getAllQuizzes');
  },
};
</script>

<style scoped>
#dashboardContainer {
  position: absolute;
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 1.7fr;
  gap: 10px 10px;
  grid-template-areas:
    "buttons"
    "quizList";
}
#buttonsContainer {
  grid-area: buttons;
}
#quizListContainer {
  grid-area: quizList;
}
</style>
