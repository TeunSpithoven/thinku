<template>
  <ul v-if="renderAnswers" class="answerGroup">
    <li v-for="answer in answerList" :key="answer.id" class="cell">
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
</template>

<script>
import AnswerCard from "@/components/answer/AnswerCard.vue";

export default {
  name: "AnswerList",
  emits: ['updateAnswer'],
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
      renderAnswers: true,
    }
  },
  computed: {
    answerList: {
      get() {
        // console.log('gettis answes for this question')
        return this.$store.getters.getAllAnswersByQuestionId(this.questionId);
      },
      set(value) {
        this.$store.commit("updateAnswers", value);
      },
    },
  },
  methods: {
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
  background-color: rgb(75, 102, 221);
}
.cell {
  background-color: transparent;
}
</style>
