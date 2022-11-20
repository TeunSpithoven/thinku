<template>
  <div id="quizInfo">
    <div class="gridContainer">
      <div class="info">
        <div id="titel">
          <div class="label">Titel</div>
          <div type="text" class="inputContainer">
            <input
              id="titleInput"
              class="inputs"
              type="text"
              v-model="this.title"
              @change="updateQuizTitle()"
            />
          </div>
        </div>

        <div id="beschrijving">
          <div class="label">Beschrijving</div>
          <div type="text" class="inputContainer">
            <textarea
              id="descriptionInput"
              class="inputs"
              type="text"
              v-model="this.description"
              @change="updateQuizDescription()"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="image">
        <label for="quizImage">Selecteer een afbeelding</label>
        <imageUpload id="quizImage" class="imageInput" />
      </div>
    </div>
  </div>
</template>

<script>
import imageUpload from "@/components/inputs/ImageInput.vue";

export default {
  name: "QuizInfo",
  components: {
    imageUpload,
  },
  props: {
    edit: Boolean,
  },
  computed: {
    title: {
      get() {
        // return this.$store.state.cQ.title;
        return this.$store.state.Quiz.title;
      },
      set(value) {
        this.$store.commit('updateQuizTitle', {title: value})
      }
    },
    description: {
      get() {
        // return this.$store.state.cQ.description;
        return this.$store.state.Quiz.description;
      },
      set(value) {
        this.$store.commit('updateQuizDescription', {description: value})
      }
    },
  },
  methods: {
    updateQuizTitle() {
      this.$store.commit("updateQuizTitle", {
        title: this.title,
      });
      // this.title = this.$store.state.cQ.title;
      this.title = this.$store.state.Quiz.title;
    },
    updateQuizDescription() {
      this.$store.commit("updateQuizDescription", {
        description: this.description,
      });
      // this.description = this.$store.state.cQ.description;
      this.description = this.$store.state.Quiz.description;
    },
  },
};
</script>

<style scoped>
#quizInfo {
  box-sizing: border-box;

  position: relative;
  padding: 10px;

  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #000000;
  border-radius: 10px;
}
.gridContainer {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  grid-template-areas: "info image";
}
.image {
  grid-area: image;
}
.info {
  grid-area: info;
}
.inputs {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
#titel {
  position: relative;
  height: 81px;
}
#beschrijving {
  position: relative;
  height: 132px;
}
.label {
  position: absolute;
  width: 100%;
  height: 30px;
  left: 0px;
  right: 0px;
  top: 0px;

  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: left;

  color: #000000;
}

.inputContainer {
  box-sizing: border-box;
  position: absolute;

  left: 0px;
  right: 0px;
  top: 36px;
  bottom: 0px;

  border: 1px solid #000000;
  border-radius: 5px;
}
.imageInput {
  box-sizing: border-box;

  border-radius: 8px;
  max-width: 100%;
  height: auto;
  
  border: 1px solid #000000;
}
textarea {
  resize: none;
}
</style>
