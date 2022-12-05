<template>
  <div id="quizInfo">
    <div class="gridContainer">
      <Form class="info" @submit="nothing">
        <div id="titel">
          <div class="label">Titel</div>
          <div type="text" class="inputContainer">
            <Field
              name="title"
              :rules="validateTitle"
              id="titleInput"
              class="inputs"
              type="text"
              v-model="this.title"
            />
          </div>
        </div>
        <ErrorMessage name="title" v-slot="{ message }">
          <div class="errorMessage">{{ message }}</div>
        </ErrorMessage>

        <div id="beschrijving">
          <div class="label">Beschrijving</div>
          <div type="text" class="inputContainer">
            <Field
              name="description"
              as="textarea"
              :rules="validateDescription"
              id="descriptionInput"
              class="inputs"
              v-model="this.description"
            ></Field>
          </div>
        </div>
        <ErrorMessage name="description" v-slot="{ message }">
          <div class="errorMessage">{{ message }}</div>
        </ErrorMessage>
      </Form>
      <div class="image">
        <label for="quizImage">Afbeelding</label>
        <imageUpload id="quizImage" class="imageInput" />
      </div>
    </div>
  </div>
</template>

<script>
import { Form, Field, ErrorMessage } from "vee-validate";
import imageUpload from "@/components/inputs/ImageInput.vue";

export default {
  name: "QuizInfo",
  components: {
    imageUpload,
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    edit: Boolean,
  },
  computed: {
    title: {
      get() {
        return this.$store.state.Quiz.title;
      },
      set(value) {
        if (this.validateTitle(value) == true) {
          this.$store.commit("updateQuizTitle", value);
        }
      },
    },
    description: {
      get() {
        return this.$store.state.Quiz.description;
      },
      set(value) {
        if (this.validateDescription(value) == true) {
          this.$store.commit("updateQuizDescription", value);
        }
      },
    },
  },
  methods: {
    validateTitle(value) {
      // if the field is empty
      if (!value) {
        return "This field is required";
      }

      // if the field shorter than 2 characters
      if (value.length < 2) {
        return "This field must have at least two characters";
      }

      // if the field is longer than 200 characters
      if (value.length > 200) {
        return "This field must be shorter than 200 characters";
      }

      // All is good
      return true;
    },
    validateDescription(value) {
      // if the field is longer than 200 characters
      if (value.length > 2000) {
        return "This field must be shorter than 2000 characters";
      }

      // All is good
      return true;
    },
    nothing() {},
  },
};
</script>

<style scoped>
#quizInfo {
  box-sizing: border-box;

  position: relative;
  padding: 10px;

  /* border: 1px solid #000000; */
  border-radius: 10px;
  /* background-color: #B4DFE5; */
  background-color: #ffc971;
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
  border: 3px solid #e2711d;
  /* background-color: #eff3f4; */
  background-color: transparent;
}
#titel {
  position: relative;
  height: 83px;
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

  /* color: #000000; */
}
.errorMessage {
  color: red;
  font-size: 20px;
}
#ErrorMessage {
  background-color: black;
}
.inputContainer {
  box-sizing: border-box;
  position: absolute;

  left: 0px;
  right: 0px;
  top: 36px;
  bottom: 0px;

  /* border: 1px solid #000000; */
  border-radius: 5px;
}
.imageInput {
  box-sizing: border-box;

  border-radius: 8px;
  max-width: 100%;
  height: auto;

  /* border: 1px solid #000000; */
  border: 3px solid #e2711d;
}
textarea {
  resize: none;
}
</style>
