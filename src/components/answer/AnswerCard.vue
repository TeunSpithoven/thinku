<template>
  <div class="answerCardContainer">
    <div class="item1">
        <!-- <div v-if="isCorrect">Correct</div>
        <div v-if="!isCorrect">X</div> -->
        <font-awesome-icon v-if="isCorrect" icon="fa-solid fa-circle-check" />
        <font-awesome-icon v-if="!isCorrect" icon="fa-regular fa-circle" />
    </div>
    <div class="item2">{{ answer }}</div>
    <div class="item3">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </div>
  </div>
</template>

<script>
export default {
    name: 'AnswerCard',
    props: {
    id: Number,
    answer: String,
    isCorrect: Boolean,
    index: Number,
  },
}
</script>

<style scoped>
/* TODO: deze grid omzetten naar zo een zonder grid-template-areas */
.answerCardContainer {
  display: grid;
  grid-template-areas: "correct antwoord antwoord antwoord antwoord antwoord antwoord antwoord antwoord antwoord verwijder";
  gap: 10px;
  background-color: #8d8d8d;
  padding: 10px;
  padding-top: 0px;
  /* height: 20px; */
}
.answerCardContainer > div {
  background-color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 2px;
  font-size: 24px;
}
.item1 {
  width: 100px;
  grid-area: correct;
}
.item2 {
  grid-area: antwoord;
}
.item3 {
  grid-area: verwijder;
}
</style>