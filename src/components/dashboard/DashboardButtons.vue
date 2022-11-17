<template>
  <div id="dashboardButtons">
    <div id="searchField"><input type="text" placeholder="Search"></div>
    <div id="createQuiz"><button>Create</button></div>
    <div id="publicQuizzes"><button>Public</button></div>
    <div id="empty"></div>
  </div>
</template>

<script>
export default {
  name: "DashboardButtons",
};
</script>

<style scoped>
#dashboardButtons {
  width: 100%;
  height: 100%;
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
  border: 1px solid #000000;
  border-radius: 10px;
}
#dashboardButtons > div > input {
  width: 100%;
  height: 100%;
  border: 1px solid #000000;
  border-radius: 10px;
}
#searchField {
  grid-area: searchField;
  padding-top: 10px;
  padding-bottom: 10px;
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
