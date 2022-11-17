<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/createQuiz" @click="resetCreateQuiz"
      >Create Quiz</router-link
    >
    |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

<script>
import { createQuiz } from "@/assets/fakeData.js";

export default {
  methods: {
    resetCreateQuiz() {
      console.log('resetCreateQuiz');
      this.$store.commit("updateCreateQuizInfo", {
        userId: 2,
        title: "",
        description: "",
        image: "",
      });
      this.$store.commit("updateCreateQuizQuestions", {
        questions: createQuiz.questions,
      });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
