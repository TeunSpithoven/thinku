<template>
  <nav>
    <router-link to="/dashboard">Dashboard</router-link> |
    <router-link to="/createQuiz">Create Quiz</router-link>
  </nav>
  <router-view />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: rgb(0, 0, 0);
  min-height: 100vh;
  /* background-color: #FBE8A6; */
  background-color: #cc5803;
}

nav {
  padding: 30px;
  /* background-color: #e2711d; */
  background-color: #ff9505;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
