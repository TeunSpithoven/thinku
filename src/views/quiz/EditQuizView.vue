<template>
  <div>
    <CreateQuiz :edit="true" />
  </div>
</template>

<script>
import CreateQuiz from "@/components/quiz/CreateQuiz.vue";
export default {
  name: "EditQuizView",
  components: {
    CreateQuiz,
  },
  mounted() {
    console.log("EditQuizView mounted");
  },
};
</script>
