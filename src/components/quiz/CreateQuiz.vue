<template>
  <div>
    <QuizInfo />
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
    <div id="knoppen">
      <button id="annuleerKnop" @click="this.$router.push({ path: '/' })">
        Annuleer
      </button>
      <button id="opslaanKnop" @click="submit()">Opslaan</button>
    </div>
  </div>
</template>

<script>
import QuizInfo from "@/components/quiz/QuizInfo.vue";
import QuestionCard from "@/components/question/QuestionCard.vue";
export default {
  name: "CreateQuiz",
  components: {
    QuizInfo,
    QuestionCard,
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
};
</script>

<style scoped>
#questionList {
  overflow: auto;
  box-sizing: border-box;

  position: absolute;
  min-height: 375px;
  left: 178px;
  right: 177px;
  top: 405px;

  border: 1px solid #000000;
  border-radius: 10px;
}
#knoppen {
  position: absolute;
  height: 114px;
  left: 178px;
  right: 177px;
  top: 509px;
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

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  align-items: center;
  text-align: center;

  color: #000000;
}
</style>
