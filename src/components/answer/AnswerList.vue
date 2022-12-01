<template>
  <ul v-if="renderAnswers" class="answerGroup">
    <li class="cell" v-for="answer in answerList" :key="answer.id">
      <AnswerCard
        :id="answer.id"
        :questionId="answer.questionId"
        :number="answer.number"
        :answer="answer.answer"
        :isCorrect="answer.isCorrect"
        @reloadList="reloadList"
      />
    </li>
  </ul>

  <div v-if="this.type !== 'goedfout'" class="antwoordToevoegenContainer">
    <button id="addAnswerButton" class="gridItem" @click="createAnswer">
      Antwoord Toevoegen
    </button>
  </div>

</template>

<script>
import AnswerCard from "@/components/answer/AnswerCard.vue";

export default {
  name: "AnswerList",
  emits: ["updateAnswer"],
  components: {
    AnswerCard,
  },
  props: {
    questionId: Number,
    questionNumber: Number,
    questionType: String,
    answers: Array,
  },
  data() {
    return {
      toggleDrag: true,
      renderAnswers: true,
    };
  },
  computed: {
    allAnswers() {
      return this.$store.getters.getAllAnswers;
    },
    answerList: {
      get() {
        // console.log('gettis answes for this question')
        return this.$store.getters.getAllAnswersByQuestionId(this.questionId);
      },
      set(value) {
        console.log("set answers");
        console.log(this.answerList);
        this.$store.commit("updateAnswers", value);
      },
    },
  },
  methods: {
    createAnswer() {
      // console.log(this.answers.length)
      const correct = this.type == "open";
      this.$store.commit("createAnswer", {
        questionId: this.questionId,
        questionNumber: this.questionNumber,
        number: this.answerList.length + 1,
        answer: "nieuw antwoord",
        isCorrect: correct,
      });
    },
    reloadList() {
      this.renderAnswers = false;

      this.$nextTick(() => {
        this.renderAnswers = true;
      });
    },
  },
  watch: {
    questionType(n, o) {
      if (n == "goedfout" && o !== "goedfout") {
        this.answerList = [
          {
            number: 1,
            answer: "goed",
            isCorrect: true,
          },
          {
            number: 2,
            answer: "fout",
            isCorrect: false,
          },
        ];
      }
    },
  },
  mounted() {
    if (this.questionType == "goedfout") {
      this.answerList = [
        {
          number: 1,
          answer: "goed",
          isCorrect: true,
        },
        {
          number: 2,
          answer: "fout",
          isCorrect: false,
        },
      ];
    } else {
      this.answerList = this.answers;
    }
  },
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
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
.answerGroup {
  display: contents;
}
ul > li:nth-of-type(odd) {
  background-color: #e9e9f9;
}
ul > li:nth-of-type(even) {
  background-color: #ffffff;
}
ul > li {
  border-bottom: 1px solid rgb(221, 221, 221);
}
ul > li:last-child {
  border-bottom: none;
}
.r_group:nth-of-type(2n) > .cell {
  background-color: rgb(221, 75, 75);
}
.cell {
  background-color: transparent;
}
</style>
