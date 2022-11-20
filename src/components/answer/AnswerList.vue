<template>
  <ul class="answerGroup">
    <li v-for="answer in this.answerList" :key="answer.number" class="cell">
      <AnswerCard
        :questionNumber="this.questionNumber"
        :questionType="this.questionType"
        :number="answer.answer.number"
        :answer="answer.answer.answer"
        :isCorrect="answer.answer.isCorrect"
      />
    </li>
  </ul>
</template>

<script>
import AnswerCard from "@/components/answer/AnswerCard.vue";

export default {
  name: "AnswerList",
  components: {
    AnswerCard,
  },
  props: {
    questionId: Number,
    questionType: String,
    answers: Array,
  },
  // data() {
  //   return {
  //     answerList: [],
  //   };
  // },
  computed: {
    answerList: {
      get() {
        console.log(this.questionId);
        const answers = this.$store.getters.getAllAnswersByQuestionId(this.questionId).answers;
        return answers;
      },
      set(value) {
        this.$store.commit("updateAnswers", {
          questionId: this.questionId,
          answerList: value
        });
      },
    },
  },
  methods: {
  
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
.answerGroup {
  display: contents;
}
ul > li:nth-of-type(odd) {
  background-color: #e9e9f9 ;
}
ul > li:nth-of-type(even) {
  background-color: #ffffff ;
}
ul > li {
  border-bottom: 1px solid rgb(221,221,221);
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
