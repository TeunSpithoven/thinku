<template>
  <ul class="answerGroup">
    <li v-for="answer in this.answerList" :key="answer.number" class="cell">
      <AnswerCard
        :questionNumber="this.questionNumber"
        :questionType="this.questionType"
        :number="answer.number"
        :answer="answer.answer"
        :isCorrect="answer.isCorrect"
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
    questionNumber: Number,
    questionType: String,
    answers: Array,
  },
  data() {
    return {
      answerList: [],
    };
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
    }
    this.answerList = this.answers;
  },
};
</script>

<style scoped>
.answerGroup {
  display: contents;
}
.r_group:nth-of-type(2n) > .cell {
  background-color: rgb(221, 75, 75);
}
.cell {
  background-color: transparent;
}
</style>
