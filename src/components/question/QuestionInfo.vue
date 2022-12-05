<template>
  <!-- <button id="moveButton" @mouseenter="toggleDrag(true)" @mouseleave="toggleDrag(false)">
    <font-awesome-icon icon="fa-solid fa-up-down" />
  </button> -->
  <div id="labels" class="labelGrid">
    <label for="type" class="label item1">Type</label>
    <label for="title" class="label item2">Vraag</label>
    <label for="time" class="label item3">Tijd (s)</label>
    <label for="delete" class="label item4"></label>
  </div>
  <!-- type: {{this.type}} -->
  <Form id="info" class="gridContainer" @submit="nothing">
    <div id="type" class="gridItem item1">
      <QuestionTypeDropDown @update-type="updateType" :type="this.type" />
    </div>

    <div id="title" class="gridItem item2">
      <Field
        name="question"
        :rules="validateQuestion"
        id="titleInput"
        class="questionInput"
        type="text"
        v-model="questionData"
        @change="updateQuestion()"
        :placeholder="this.question"
      />
    </div>
    <ErrorMessage name="question" v-slot="{ message }">
      <div class="errorMessage">{{ message }}</div>
    </ErrorMessage>

    <Field
      name="time"
      :rules="validateTime"
      id="time"
      class="gridItem item3"
      type="number"
      min="2"
      max="9999"
      v-model="this.questionTime"
      @change="updateQuestion()"
    />

    <button id="delete" class="gridItem item4" @click="deleteQuestion()">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </Form>
</template>

<script>
import QuestionTypeDropDown from "./QuestionTypeDropDown.vue";
import { Form, Field, ErrorMessage } from "vee-validate";

export default {
  name: "QuestionInfo",
  emits: ["reloadList"],
  components: {
    QuestionTypeDropDown,
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    id: Number,
    question: String,
    number: Number,
    type: String,
    time: Number,
  },
  data() {
    return {
      questionData: "",
      questionType: "",
      questionTime: -1,
    };
  },
  methods: {
    validateQuestion(value) {
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
    validateTime(value) {
      value = parseInt(value);
      // if the field is empty
      if (!value || value == "") {
        return "This field is required";
      }

      // if the field shorter than 2 characters
      if (value < 2) {
        return "Tijd moet langer zijn dan 1 seconde";
      }

      // if the field is longer than 200 characters
      if (value.length > 1000) {
        return "Tijd mag niet langer zijn dan 1000 seconden";
      }

      // All is good
      return true;
    },
    deleteQuestion() {
      this.$store.commit("deleteQuestion", this.id);
      this.$emit("reloadList");
    },
    updateQuestion() {
      if (
        this.validateTime(this.questionTime) &&
        this.validateQuestion(this.questionData)
      ) {
        this.$store.commit("updateQuestion", {
          id: this.id,
          number: this.number,
          question: this.questionData,
          type: this.questionType,
          time: parseInt(this.questionTime),
        });
      }
    },
    updateType(n) {
      // console.log(n.type)
      this.questionType = n.type;
      this.updateQuestion();
    },
    toggleDrag(value) {
      if (value == true) {
        this.$store.commit("enableQuestionDrag");
      } else if (value == false) {
        this.$store.commit("disableQuestionDrag");
      }
    },
    nothing() {},
  },
  mounted() {
    this.questionData = this.question;
    this.questionType = this.type;
    this.questionTime = this.time;
  },
};
</script>

<style scoped>
#info {
  position: relative;
  padding: 10px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}
#moveButton {
  position: absolute;
  line-height: 10px;
  top: 0px;
  right: 0px;
  width: 50px;
  padding-right: 10px;
}
#moveButton :hover {
  cursor: grab;
}
.questionInput {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.gridContainer {
  display: grid;
  gap: 5px;
  padding: 5px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}
.labelGrid {
  display: grid;
  gap: 5px;
  padding: 5px;
}
.label {
  text-align: left;
  font-weight: 400;
  font-size: 24px;
  line-height: 15px;
  /* color: white; */
}
.gridItem {
  padding: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 25px;

  /* color: #000000; */
  /* border: 1px solid #000000; */
  /* background-color: #eff3f4; */
  background-color: transparent;
  border: 3px solid #e2711d;
}
.item1 {
  /* type  */
  grid-column: 1 / span 1;
  grid-row: 1;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
  padding-bottom: 0px;
}
.item2 {
  /* question */
  grid-column: 2 / span 7;
  grid-row: 1;
  padding: 0px;
}
.item3 {
  /* time  */
  grid-column: 9 / span 1;
  grid-row: 1;
  max-width: 100px;
}
.item4 {
  /* delete  */
  grid-column: 10 / span 1;
  grid-row: 1;
}
</style>
