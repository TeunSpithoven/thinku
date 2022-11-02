<template>
    <div>
      <QuizInfo/>
      <Questions/>
      <div id="knoppen">
        <button 
          id="annuleerKnop" 
          @click="this.$router.push({ path: '/' })"
        > Annuleer </button>
        <button id="opslaanKnop" @click="submit()">Opslaan</button>
      </div>
    </div>
</template>

<script>
import QuizInfo from '@/components/quiz/QuizInfo.vue'
import Questions from '@/components/quiz/QuestionList.vue'
export default {
  name: 'CreateQuiz',
  components: {
    QuizInfo,
    Questions,
  },
  methods: {
    submit() {
      alert("Opslaan");
    },
  },
}
</script>

<style scoped>
#knoppen {
  position: absolute;
  height: 114px;
  left: 178px;
  right: 177px;
  top: 509px;
}
#annuleerKnop {
  box-sizing: border-box;

  position: absolute;
  width: 126px;
  height: 50px;
  left: 2px;
  top: 4px;

  border: 1px solid #000000;
  border-radius: 10px;
}
#opslaanKnop {
  box-sizing: border-box;

  position: absolute;
  width: 371px;
  height: 81px;
  right: 0px;
  top: 4px;

  border: 1px solid #000000;
  border-radius: 10px;
}
</style>