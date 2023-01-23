<template>
  <div v-if="roomName === ''">No quiz selected</div>
  <div v-if="roomName !== ''">
    <div id="quizTitle">{{ playQuiz.title }}</div>
    <div id="roomName">
      Join by going to WEBSITE/join and enter: {{ roomName }}
    </div>
  </div>
</template>

<script>
export default {
  name: "HostQuiz",
  computed: {
    playQuiz() {
      return this.$store.getters.getPlayQuiz;
    },
    roomName() {
      return this.$store.getters.getRoomName;
    },
  },
};
</script>

<style scoped>
#quizTitle {
  font-size: 40px;
}
</style>
