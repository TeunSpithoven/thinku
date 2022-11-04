<template>
  <ul id="questionList">
    <li v-for="q in questions" :key="q.question">
      <QuestionCard
        :question="q.question"
        :type="q.type"
        :answers="q.answers"
        :number="q.number"
      ></QuestionCard>
    </li>

    <div class="vraagToevoegenContainer">
      <button class="vraagToevoegen">Vraag Toevoegen</button>
    </div>
  </ul>
</template>

<script>
import QuestionCard from "@/components/question/QuestionCard.vue";

export default {
  name: "QuestionList",
  components: {
    QuestionCard,
  },
  data() {
    return {
        questions: this.$store.state.questions,
    }
  },
};
</script>

<style scoped>
#questionList {
  overflow: auto;
  box-sizing: border-box;

  position: relative;
  min-height: 375px;
  /* left: 178px;
  right: 10%;
  top: 405px; */

  border: 1px solid #000000;
  border-radius: 10px;
}
.vraagToevoegenContainer {
  box-sizing: border-box;

  position: absolute;
  height: 51px;
  left: 285px;
  right: 286px;
  bottom: 20px;

  border: 1px solid #000000;
  border-radius: 10px;
}

.vraagToevoegen {
  position: absolute;
  width: 100%;
  left: 0px;
  right: 0px;
  top: 4.62%;
  bottom: 4.62%;

  /* font-family: "Inter"; */
  /* font-style */
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  align-items: center;
  text-align: center;

  color: #000000;
}
</style>
