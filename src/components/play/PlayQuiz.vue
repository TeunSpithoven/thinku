<template>
  <div id="playQuiz">Play a Quiz!</div>
  <!-- title, roomcode and studd go here -->
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
