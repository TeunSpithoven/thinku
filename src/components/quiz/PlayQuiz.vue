<template>
  <div id="playQuiz">
    Play a Quiz
    <br />
    {{ quiz }}
  </div>
</template>

<script>
export default {
  name: "PlayQuiz",
  components: {},
  data() {
    return {};
  },
  computed: {
    quiz() {
      return this.$store.getters.getPlayQuiz;
    },
  },
  methods: {},
};
</script>

<style scoped></style>
