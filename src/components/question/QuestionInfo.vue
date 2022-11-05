<template>
  <div id="info" class="gridContainer">
    <div id="number" class="gridItem item1">
      {{ this.number }}
    </div>
    <div id="title" class="gridItem item2">
      <!-- <div v-if="this.$store.state.editQuestion !== this.id">
        {{ question }}
      </div> -->
      <input
        class="questionInput"
        v-model="questionData"
        @change="updateQuestion()"
        :placeholder="this.question"
      />
    </div>
    <button
      id="editButton"
      class="gridItem item3"
      @click="this.$store.state.editQuestion = this.number"
    >
      <font-awesome-icon icon="fa-solid fa-pen-to-square" />
    </button>
    <button id="deleteButton" class="gridItem item4" @click="deleteQuestion()">
      <font-awesome-icon icon="fa-solid fa-trash-can" />
    </button>
    <div id="type" class="gridItem item5">
      <button @click="toggleTypeDropdown">{{ this.type }}</button>
    </div>
    <div id="typeDropdown">
      <button v-for="t in this.unselectedTypes" :key="t">{{ t }}</button>
    </div>
    <div id="time" class="gridItem item6">{{ this.time }}</div>
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
  gap: 10px;
  background-color: #b9b8b8;
  padding: 10px;
}
.gridItem {
  background-color: rgba(255, 255, 255, 0.8);
  /* text-align: center; */
  padding: 10px;
  font-size: 30px;

  font-weight: 400;
  /* font-size: 20px; */
  line-height: 10px;

  color: #000000;
  border: 1px solid #000000;
}
.item1 {
  grid-column: 1 / span 1;
  grid-row: 1;
  text-align: center;
}
.item2 {
  grid-column: 2 / span 6;
  grid-row: 1;
  padding: 0px;
}
.item3 {
  grid-column: 8 / span 1;
  grid-row: 1;
}
.item4 {
  grid-column: 9 / span 1;
  grid-row: 1;
}
.item5 {
  grid-column: 2 / span 2;
  grid-row: 2;
}
.item6 {
  grid-column: 4 / span 1;
  grid-row: 2;
}
</style>
