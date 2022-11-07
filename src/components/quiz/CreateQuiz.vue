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

import {createQuiz} from '@/assets/fakeData.js';

export default {
  name: "CreateQuiz",
  components: {
    QuizInfo,
    QuestionList,
  },
  data() {
    return {
      createQuiz: createQuiz,
      // createQuiz: {
      //   userId: 1,
      //   title: "mijn quiz",
      //   description: "een super coole quiz",
      //   giphyUrl: "",
      //   questions: [
      //   {
      //       question: "Derde vraag",
      //       type: "meerkeuze",
      //       time: 20,
      //       number: 3,
      //       answers: [
      //         {
      //           number: 1,
      //           answer: "antwoord een",
      //           isCorrect: true,
      //         },
      //         {
      //           number: 2,
      //           answer: "antwoord twee",
      //           isCorrect: false,
      //         },
      //       ],
      //     },
      //     {
      //       question: "Eerste vraag",
      //       type: "meerkeuze",
      //       time: 20,
      //       number: 2,
      //       answers: [
      //         {
      //           number: 1,
      //           answer: "antwoord een",
      //           isCorrect: true,
      //         },
      //         {
      //           number: 2,
      //           answer: "antwoord twee",
      //           isCorrect: false,
      //         },
      //       ],
      //     },
      //     {
      //       question: "Tweede vraag",
      //       type: "meerkeuze",
      //       time: 20,
      //       number: 1,
      //       answers: [
      //         {
      //           number: 1,
      //           answer: "antwoord een",
      //           isCorrect: true,
      //         },
      //         {
      //           number: 2,
      //           answer: "antwoord twee",
      //           isCorrect: true,
      //         },
      //       ],
      //     },
      //   ],
      // },
    };
  },
  methods: {
    submit() {
      this.$store.commit('saveQuizToDB', {
        quiz: this.createQuiz,
      })
    },
  },
  created() {
    this.$store.commit("updateCreateQuizInfo", {
      userId: this.createQuiz.userId,
      title: this.createQuiz.title,
      description: this.createQuiz.description,
      giphyUrl: this.createQuiz.giphyUrl,
    });
    this.$store.commit("updateCreateQuizQuestions", {
      questions: this.createQuiz.questions,
    });
  },
};
</script>

<style scoped>
.gridContainer {
  background-color: #8d8d8d;
  display: grid;
  gap: 10px;
  /* padding: 10px; */
  padding-left: 10%;
  padding-right: 10%;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  /* deze padding weghalen */
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
