<template>
  <div id="questionContainer">
    <div class="vraagToevoegenContainer">
        <button class="vraagToevoegen">Vraag Toevoegen</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuestionList",
  data() {
    return {
        questions: [
            {
                question: 'Eerste vraag',
                type: 'meerkeuze',
                answers: [
                    {
                        answer: 'antwoord een',
                        isCorrect: true,
                    },
                    {
                        answer: 'antwoord twee',
                        isCorrect: false,
                    },
                ],
            }, 
        ],
    }
  }
};
</script>

<style scoped>
#questionContainer {
  box-sizing: border-box;

  position: absolute;
  height: 89px;
  left: 178px;
  right: 177px;
  top: 405px;

  border: 1px solid #000000;
  border-radius: 10px;
}

.vraagToevoegenContainer {
  box-sizing: border-box;

  position: absolute;
  height: 51px;
  left: 285px;
  right: 286px;
  bottom: 20px;

  border: 1px solid #000000;
  border-radius: 10px;
}

.vraagToevoegen {
    position: absolute;
    width: 100%;
    left: 0px;
    right: 0px;
    top: 4.62%;
    bottom: 4.62%;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
    align-items: center;
    text-align: center;

    color: #000000;
}

</style>
