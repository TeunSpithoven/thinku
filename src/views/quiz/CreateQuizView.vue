<template>
  <div>
    <CreateQuiz :edit="false" />
  </div>
</template>

<script>
import CreateQuiz from "@/components/quiz/CreateQuiz.vue";

export default {
  name: "CreateQuizView",
  components: {
    CreateQuiz,
  },
  mounted() {
    console.log("CreateQuizView mounted");
  },
};
</script>
