<template>
  <div id="quizCard" class="boxShadow">
    <div id="title">{{ title }}</div>
    <div id="image">
      <img v-if="image != null" :src="image" class="uploading-image" />
      <div v-if="image == null || image == ''">No image</div>
    </div>
    <div id="buttons">
      <button id="editButton" @click="editQuiz">Bewerken</button>
      <button id="playButton">Spelen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuizCard",
  props: {
    quiz: {
      id: Number,
      title: String,
      description: String,
      image: String,
    },
  },
  data() {
    return {
      id: this.quiz.id,
      title: this.quiz.title,
      description: this.quiz.description,
      image: this.quiz.image,
    };
  },
  methods: {
    editQuiz() {
      this.$store.dispatch('getQuizFromDb', {
        id: this.quiz.id,
      });
      this.$router.push({ path: '/editQuiz' });
    },
  },
};
</script>

<style scoped>
#quizCard {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr 0.5fr;
  background-color: white;
  border-radius: 10px;
  gap: 0px 89px;
  grid-template-areas:
    "title"
    "image"
    "buttons";
}
#title {
  grid-area: title;
  font-size: 24px;
}
#image {
  grid-area: image;
  border-top: 1px solid #000000;
  border-bottom: 1px solid #000000;
}
.uploading-image {
  border-radius: 8px;
  max-width: 100%;
  max-height: 500px;
}
#buttons {
  padding-top: 0px;
  grid-area: buttons;
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: "editButton playButton";
}
#editButton {
  grid-area: editButton;
  margin: 5px;
  margin-right: 0px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 24px;
}
#playButton {
  grid-area: playButton;
  margin: 5px;
  border: 1px solid #000000;
  border-radius: 10px;
  font-size: 24px;
}
</style>
