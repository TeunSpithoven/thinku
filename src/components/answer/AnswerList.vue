<template>
  <ul v-if="renderAnswers" class="answerGroup">
    {{  answerList }}
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
    <li
      v-if="this.questionType !== 'goedfout'"
      class="cell addAnswer newAddAnswerButton"
      @click="createAnswer"
    >
      <div class="newAddAnswerButton">
        <font-awesome-icon icon="fa-regular fa-plus-square" />
        Antwoord
      </div>
    </li>
  </ul>

  <!-- <div v-if="this.questionType !== 'goedfout'" class="antwoordToevoegenContainer">
    <button id="addAnswerButton" class="gridItem" @click="createAnswer">
      Antwoord Toevoegen
    </button>
  </div> -->
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
        // console.log("set answers");
        // console.log(this.answerList);
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
.addAnswer {
  font-size: 20px;
}
.newAddAnswerButton {
  width: 100%;
  transition: 0.7s;
}
.newAddAnswerButton :hover {
  background-color: #dedede;
  cursor: pointer;
}
.antwoordToevoegenContainer {
  position: relative;
  /* height: 80px; */
  padding-top: 5px;
  width: 100%;
}

#addAnswerButton {
  position: relative;
  box-sizing: border-box;
  /* border: 1px solid #000000; */
  margin-left: 30%;
  margin-right: 30%;
  border-radius: 10px;
  font-size: 25px;
  /* background-color: #F4976C; */
  background-color: #dedede;
}
.answerGroup {
  display: contents;
}
ul > li:nth-of-type(odd) {
  background-color: transparent;
  /* background-color: #eff3f4; */
}
ul > li:nth-of-type(even) {
  background-color: transparent;
  /* background-color: #cac9c9; */
}
ul > li {
  /* lijn tussen antwoorden */

  /* border-bottom: 3px solid #e2711d; */
  border-bottom: 2px solid #dedede;
  /* border-bottom: 1px solid rgb(0, 0, 0); */
}
ul > li:last-child {
  border-bottom: none;
}
/* .r_group:nth-of-type(2n) > .cell {
  background-color: rgb(0, 245, 33);
} */
.cell {
  background-color: transparent;
}
</style>
