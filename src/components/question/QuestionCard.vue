<template>
  <div id="questionCard" class="gridContainer">
    <div id="quesionInfoContainter" class="gridItem">
      <QuestionInfo
        :id="this.id"
        :question="this.question"
        :number="this.number"
        :type="this.type"
        :time="this.time"
      />
    </div>
    <div id="answers" class="gridItem">
      <AnswerList :answers="this.answers" />
    </div>
    <div class="antwoordToevoegenContainer">
      <div id="addAnswerButton" class="gridItem">Antwoord Toevoegen</div>
    </div>
  </div>
</template>

<script>
import QuestionInfo from "./QuestionInfo.vue";
import AnswerList from "@/components/answer/AnswerList.vue";

export default {
  name: "QuestionCard",
  components: {
    QuestionInfo,
    AnswerList,
  },
  props: {
    id: Number,
    question: String,
    answers: Array,
    number: Number,
    type: String,
    time: Number,
  },
  
};
</script>

<style scoped>
#questionCard {
  box-sizing: border-box;

  position: relative;
  padding: 10px;
  /* height: 300px; */
  /* float:left;
  left: 16px;
  right: 20px;
  top: 14px; */

  /* background: #ffffff; */
}

.gridContainer {
  background-color: #8d8d8d;
  display: grid;
  gap: 10px;
  padding: 10px;
  padding-left: 10%;
  padding-right: 10%;
}
.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  /* deze padding weghalen */
  padding: 10px;
  font-size: 30px;
  grid-column: 1 / 5;
}
.antwoordToevoegenContainer {
  position: relative;
  /* height: 80px; */
  width: 100%;
}

#addAnswerButton {
  position: relative;
  box-sizing: border-box;
  border: 1px solid #000000;
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 10px;

  font-size: 25px;
}
</style>
