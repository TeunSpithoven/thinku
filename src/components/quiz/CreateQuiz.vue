<template>
  <div id="createQuiz" class="gridContainer">
    <div v-if="edit">Quiz Bewerken</div>
    <div class="grid-item">
      <QuizInfo :edit="edit" />
    </div>
    <div id="questionListContainer" class="grid-item">
      <QuestionList :edit="edit" />
    </div>
    <div class="grid-item">
      <div id="knoppen">
        <button id="annuleerKnop" @click="this.$router.push({ path: '/dashboard' })">
          Annuleer
        </button>
        <button id="opslaanKnop" @click="submit()">
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
      createQuiz: createQuiz,
    };
  },
  methods: {
    submit() {
      if (!this.edit) {
        this.$store.commit("saveQuizToDB", {
          quiz: this.createQuiz,
        });
      } else if(this.edit) {
        this.$store.commit("editQuizToDB", {
          quiz: this.createQuiz,
        });
      } else {
        console.log('createQuiz submit error')
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
  /* padding: 10px; */
  padding-left: 15%;
  padding-right: 15%;
}
.grid-item {
  background-color: rgb(255, 255, 255);
  text-align: center;
  /* deze padding weghalen */
  /* padding: 20px; */
  font-size: 30px;
  grid-column: 1 / 5;
}
#createQuiz {
  display: grid;
  row-gap: 20px;
}

#questionListContainer {
  padding: 0;
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
