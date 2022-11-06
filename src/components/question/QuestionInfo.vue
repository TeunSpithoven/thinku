<template>
  <div id="info" class="gridContainer">
    <div id="type" class="gridItem item1">
      <button @click="toggleTypeDropdown">{{ this.type }}</button>
    </div>
    <div id="typeDropdown">
      <button v-for="t in this.unselectedTypes" :key="t">{{ t }}</button>
    </div>
    <div id="title" class="gridItem item2">
      <input
        class="questionInput"
        v-model="questionData"
        @change="updateQuestion()"
        :placeholder="this.question"
      />
    </div>
    <div id="time" class="gridItem item3">{{ this.time }}</div>
    <button id="deleteButton" class="gridItem item4" @click="deleteQuestion()">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
    
  </div>
</template>

<script>
export default {
  name: "QuestionInfo",
  props: {
    question: String,
    number: Number,
    type: String,
    time: Number,
  },
  data() {
    return {
      questionData: '',
      typeDropdown: false,
      types: ["meerkeuze", "open", "woordwolk", "goedfout"],
    };
  },
  computed: {
    unselectedTypes() {
      return this.types !== this.type;
    },
  },
  methods: {
    deleteQuestion() {
      this.$store.commit("deleteQuestion", {
        number: this.number,
      });
    },
    toggleTypeDropdown() {
      this.typeDropdown = !this.typeDropdown;
    },
    updateQuestion() {
      console.log("updateQuestion" + this.number + " " + this.questionData)
      this.$store.commit('updateQuestion', {
        number: this.number,
        question: this.questionData,
      })
      // this.questionData = this.questionData;
    }
  },
  mounted() {
    this.questionData = this.question;
  },
};
</script>

<style scoped>
#info {
  position: relative;
  background-color: #8d8d8d;
  /* height: 111px;
  left: 12px;
  right: 11px;
  top: 11px; */
  padding: 10px;
}
.questionInput {
  width: 100%;
  height: 100%;
}
.gridContainer {
  display: grid;
  gap: 5px;
  background-color: #b9b8b8;
  padding: 5px;
}
.gridItem {
  background-color: rgba(255, 255, 255, 0.8);
  /* text-align: center; */
  padding: 10px;
  font-size: 30px;

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
  padding-top: 10px;
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
