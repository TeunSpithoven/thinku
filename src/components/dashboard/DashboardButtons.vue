<template>
  <div id="dashboardButtons">
    <div id="searchField"><input type="text" placeholder="Search"></div>
    <div id="createQuiz"><button @click="createQuiz">Create</button></div>
    <div id="publicQuizzes"><button>Public</button></div>
    <div id="empty"></div>
  </div>
</template>

<script>
export default {
  name: "DashboardButtons",
  methods: {
    createQuiz() {
      this.$router.push({ path: '/createQuiz' });
    },
  }
};
</script>

<style scoped>
#dashboardButtons {
  padding-top:10px;
  width: 100%;
  height: 100%;
  min-height: 50px;
  line-height: 100%;
  display: grid;
  grid-template-columns: 0.8fr 0.5fr 0.5fr 2.2fr;
  grid-template-rows: 1fr;
  gap: 10px 10px;
  grid-template-areas: "searchField createQuiz publicQuizzes empty";
}
#dashboardButtons > div > button {
  width: 100%;
  height: 100%;
  max-height: 100px;
  /* border: 1px solid #000000; */
  border: 3px solid #e2711d;
  background-color: #ff9505;
  border-radius: 10px;
}
#dashboardButtons > div > input {
  width: 100%;
  height: 100%;
  max-height: 80px;
  /* border: 1px solid #000000; */
  border: 3px solid #e2711d;
  background-color: #ff9505;
  border-radius: 10px;
}
#searchField {
  grid-area: searchField;
  padding-top: 5px;
  padding-bottom: 5px;
}
#createQuiz {
  grid-area: createQuiz;
}
#publicQuizzes {
  grid-area: publicQuizzes;
}
#empty {
  grid-area: empty;
}
</style>
