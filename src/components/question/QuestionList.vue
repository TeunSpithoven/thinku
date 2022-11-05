<template>
  <div id="questionListContainer" class="gridContainer">
    <div class="grid-item">
      <ul id="questionList" class="gridContainer">
        <li class="grid-item" v-for="q in questions" :key="q.question">
          <QuestionCard
            :id="q.id"
            :question="q.question"
            :type="q.type"
            :time="q.time"
            :answers="q.answers"
            :number="q.number"
          ></QuestionCard>
        </li>
      </ul>
    </div>
    <div class="vraagToevoegenContainer grid-item">
      <button class="vraagToevoegen">Vraag Toevoegen</button>
    </div>
  </div>
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
      questions: this.$store.state.cQ.questions,
    };
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
#questionListContainer {
  padding: 10px;
}
.gridContainer {
  background-color: #8d8d8d;
  display: grid;
  gap: 10px;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 10px;
  font-size: 30px;
  grid-column: 1 / 5;
}
.vraagToevoegenContainer {
  position: relative;
  /* height: 80px; */
  width: 100%;
}

.vraagToevoegen {
  position: relative;
  box-sizing: border-box;

  border: 1px solid #000000;
  border-radius: 10px;
}
</style>
