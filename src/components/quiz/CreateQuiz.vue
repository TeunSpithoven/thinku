<template>
  <div id="createQuiz" class="gridContainer">
    <!-- <div class="gridContainer"> -->
      <div class="grid-item">
        <QuizInfo />
      </div>
      <div class="grid-item">
        <QuestionList />
      </div>
      <div class="grid-item">
        <div id="knoppen">
          <button id="annuleerKnop" @click="this.$router.push({ path: '/' })">
            Annuleer
          </button>
          <button id="opslaanKnop" @click="submit()">Opslaan</button>
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import QuizInfo from "@/components/quiz/QuizInfo.vue";
import QuestionList from "@/components/question/QuestionList.vue";

export default {
  name: "CreateQuiz",
  components: {
    QuizInfo,
    QuestionList,
  },
  data() {
    return {
      questions: [
        {
          question: "Eerste vraag",
          type: "meerkeuze",
          number: 1,
          answers: [
            {
              answer: "antwoord een",
              isCorrect: true,
            },
            {
              answer: "antwoord twee",
              isCorrect: false,
            },
          ],
        },
      ],
    };
  },
  methods: {
    submit() {
      alert("Opslaan");
    },
  },
  mounted() {
    this.$store.state.questions = this.questions;
  },
};
</script>

<style scoped>
.gridContainer {
  background-color: #2196f3;
  display: grid;
  gap: 10px;
  padding: 10px;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 20px;
  font-size: 30px;
  grid-column: 1 / 5;
}
#createQuiz {
  display: grid;
  row-gap: 20px;
}

#knoppen {
  /* deze moet naar onder worden geduuwd door questionlist */
  position: relative;
  height: 114px;
  /* left: 178px;
  right: 177px; */
  /* top: 750px; */
}
#annuleerKnop {
  box-sizing: border-box;

  position: absolute;
  width: 126px;
  height: 50px;
  left: 2px;
  top: 4px;

  border: 1px solid #000000;
  border-radius: 10px;
}
#opslaanKnop {
  box-sizing: border-box;

  position: absolute;
  width: 371px;
  height: 81px;
  right: 0px;
  top: 4px;

  border: 1px solid #000000;
  border-radius: 10px;
}
</style>
