<template>
  <div id="createQuiz" class="gridContainer">
    <div v-if="edit">Quiz Bewerken</div>
    <div class="grid-item">
      <QuizInfo :edit="edit" />
    </div>
    <div id="questionListContainer" class="grid-item">
      <QuestionList :quizId="this.quiz.id" :edit="edit" />
    </div>
    <div class="grid-item">
      <div id="knoppen">
        <button id="annuleerKnop" class="boxShadow" @click="this.$router.push({ path: '/dashboard' })">
          Annuleer
        </button>
        <button id="opslaanKnop" class="boxShadow" @click="submit()">
          <div v-if="edit">Wijzigingen</div>
          Opslaan
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import QuizInfo from "@/components/quiz/QuizInfo.vue";
import QuestionList from "@/components/question/QuestionList.vue";

import { createQuiz } from "@/assets/fakeData.js";

export default {
  name: "CreateQuiz",
  components: {
    QuizInfo,
    QuestionList,
  },
  props: {
    edit: Boolean,
  },
  data() {
    return {
      quiz: createQuiz,
    };
  },
  methods: {
    submit() {
      if (!this.edit) {
        this.$store.commit("saveQuizToDB", {
          quiz: this.quiz,
        });
      } else if(this.edit) {
        this.$store.commit("editQuizToDB", {
          quiz: this.quiz,
        });
      } else {
        console.log('quiz submit error')
      }
    },
  },
};
</script>

<style scoped>
.gridContainer {
  /* background-color: #8d8d8d; */
  display: grid;
  gap: 10px;
  padding-top: 15px;
  padding-left: 20%;
  padding-right: 20%;
}
.grid-item {
  /* background-color: #D2FDFF; */
  background-color: transparent;
  border-radius: 10px;
  text-align: center;
  /* deze padding weghalen */
  /* padding: 20px; */
  font-size: 30px;
  grid-column: 1 / 5;
}
#createQuiz {
  display: grid;
  row-gap: 20px;
  overflow: visible;
}

#questionListContainer {
  padding: 0;
}

#knoppen {
  position: relative;
  height: 114px;
  /* background-color: #FBE8A6; */
  background-color: transparent;
}
#knoppen > button {
  box-sizing: border-box;
  position: absolute;
  border-radius: 5px;
}
#opslaanKnop {
  width: 371px;
  height: 81px;
  right: 0px;
  top: 4px;
  /* background-color: #F4976C; */
  background-color: #ff9505;
  color: white;
}
#annuleerKnop {
  width: 126px;
  max-height: 40px;
  left: 2px;
  top: 4px;
  border: 1px solid grey;
  background-color: transparent;
  font-size: 25px;
}
</style>
