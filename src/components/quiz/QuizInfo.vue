<template>
  <div id="quizInfo">
      {{ this.$store.state.title }}
      {{ this.$store.state.description }}
    <div id="titel">
      <div class="label">Titel</div>
      <div type="text" class="inputContainer">
        <input class="inputs" type="text" v-model="title" @keyup="updateQuizInfoState()">
      </div>
    </div>

    <div id="beschrijving">
      <div class="label">Beschrijving</div>
      <div type="text" class="inputContainer">
        <textarea class="inputs" type="text" v-model="description" @keyup="updateQuizInfoState()"></textarea>
      </div>
    </div>

    <!-- zoek naar een giphy gif -->
    <input type="text" id="gifInput" />
    <div id="gifContainer"></div>
  </div>
</template>

<script>
export default {
  name: "QuizInfo",
  data() {
    return {
        title: '',
        description: '',
    }
  },
  methods: {
    updateQuizInfoState() {
        this.$store.commit('updateQuizInfo', {
            title: this.title,
            description: this.description,
        });
    },
  },
  mounted() {
    // console.log(this.$store.state.createQuizInfo)
    this.title = this.$store.state.title;
    this.description = this.$store.state.description;
  }
};
</script>

<style scoped>
#quizInfo {
    box-sizing: border-box;

    position: relative;
    height: 293px;
    /* left: 178px;
    right: 177px; */
    /* top: 86px; */

    border: 1px solid #000000;
    border-radius: 10px;
}
.inputs {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
#titel {
  position: absolute;
  height: 81px;
  left: 45px;
  right: 550px;
  top: 33px;
}
#beschrijving {
  position: absolute;
  height: 132px;
  left: 45px;
  right: 550px;
  top: 122px;
}
.label {
  position: absolute;
  width: 100%;
  /* width: 416px; */
  height: 30px;
  left: 0px;
  right: 0px;
  top: 0px;

  /* font-family: "Inter"; */
  /* font-style */
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
  text-align: left;

  color: #000000;
}

.inputContainer {
  box-sizing: border-box;
  position: absolute;

  left: 0px;
  right: 0px;
  top: 36px;
  bottom: 0px;

  border: 1px solid #000000;
  border-radius: 5px;
}
#gifInput {
  box-sizing: border-box;

  position: absolute;
  width: 275px;
  height: 30px;
  /* left: 596px; */
  right: 133px;
  top: 50px;

  border: 1px solid #000000;
}
#gifContainer {
  box-sizing: border-box;

  position: absolute;
  width: 356px;
  height: 178px;
  /* left: 596px; */
  right: 133px;
  top: 86px;

  border: 1px solid #000000;
}
textarea {
  resize: none;
}
</style>
