<template>
  <div id="labels" class="labelGrid">
    <label for="type" class="label item1">Type</label>
    <label for="title" class="label item2">Vraag</label>
    <label for="time" class="label item3">Tijd</label>
    <label for="delete" class="label item4"></label>
  </div>
  <div id="info" class="gridContainer">
    <div id="type" class="gridItem item1">
      <QuestionTypeDropDown @update-type="updateType" :type="this.type" />
    </div>

    <div id="title" class="gridItem item2">
      <input
        id="titleInput"
        class="questionInput"
        type="text"
        v-model="questionData"
        @change="updateQuestion()"
        :placeholder="this.question"
      />
    </div>

    <input
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
  </div>
</template>

<script>
import QuestionTypeDropDown from "./QuestionTypeDropDown.vue";

export default {
  name: "QuestionInfo",
  emits: ["reloadList"],
  components: {
    QuestionTypeDropDown,
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
    deleteQuestion() {
      this.$store.commit("deleteQuestion", {
        number: this.number,
      });
      this.$emit("reloadList");
    },
    updateQuestion() {
      this.$store.commit("updateQuestion", {
        id: this.id,
        number: this.number,
        question: this.questionData,
        type: this.questionType,
        time: this.questionTime,
      });
    },
    updateType(t) {
      this.questionType = t.type;
      this.updateQuestion();
    },
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
  padding-top: 0px;
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
}
.gridItem {
  padding: 10px;

  font-weight: 400;
  font-size: 24px;
  line-height: 25px;

  color: #000000;
  border: 1px solid #000000;
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
}
.item4 {
  /* delete  */
  grid-column: 10 / span 1;
  grid-row: 1;
}
</style>
