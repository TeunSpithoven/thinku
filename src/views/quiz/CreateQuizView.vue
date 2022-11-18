<template>
  <div>
    <CreateQuiz :edit="false" />
  </div>
</template>

<script>
import CreateQuiz from "@/components/quiz/CreateQuiz.vue";

import { createQuiz } from "@/assets/fakeData.js";

export default {
  name: "CreateQuizView",
  components: {
    CreateQuiz,
  },
  beforeMount() {
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
};
</script>
