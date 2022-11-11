<template>
  <div id="info" class="gridContainer">
    <div id="type" class="gridItem item1">
      <QuestionTypeDropDown @update-type="updateType" :type="this.type" />
    </div>

    <div id="title" class="gridItem item2">
      <input
        class="questionInput"
        v-model="questionData"
        @change="updateQuestion()"
        :placeholder="this.question"
      />
    </div>

    <input
      id="timeInput"
      class="gridItem item3"
      type="number"
      min="2"
      max="9999"
      v-model="this.questionTime"
      @change="updateQuestion()"
    />

    <button id="deleteButton" class="gridItem item4" @click="deleteQuestion()">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
  </div>
</template>

<script>
import QuestionTypeDropDown from "./QuestionTypeDropDown.vue";

export default {
  name: "QuestionInfo",
  components: {
    QuestionTypeDropDown,
  },
  props: {
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
      this.$emit('reloadList');
    },
    updateQuestion() {
      this.$store.commit("updateQuestion", {
        number: this.number,
        question: this.questionData,
        type: this.questionType,
        time: this.questionTime,
      });
      // this.questionData = this.questionData;
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
  /* background-color: #8d8d8d; */
  /* height: 111px;
  left: 12px;
  right: 11px;
  top: 11px; */
  padding: 10px;
}
.questionInput {
  width: 100%;
  height: 100%;
  background-color: transparent;
}
.gridContainer {
  display: grid;
  gap: 5px;
  /* background-color: #c0c0c0; */
  padding: 5px;
}
.gridItem {
  /* background-color: rgba(255, 255, 255); */
  /* text-align: center; */
  padding: 10px;
  /* font-size: 30px; */

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
  /* right: 25%; */
  /* width: 150%; */
}
.item3 {
  /* time  */
  grid-column: 9 / span 1;
  grid-row: 1;
  /* margin-left: 50%;
  padding-left: 0px; */
  /* width: 50%; */
}
.item4 {
  /* delete  */
  grid-column: 10 / span 1;
  grid-row: 1;
}
</style>
