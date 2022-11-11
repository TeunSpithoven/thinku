<template>
  <div id="quizInfo">
    <div class="gridContainer">
      <div class="info">
        <div id="titel">
          <div class="label">Titel</div>
          <div type="text" class="inputContainer">
            <input
              id="titleInput"
              class="inputs"
              type="text"
              v-model="this.title"
              @change="updateQuizTitle()"
            />
          </div>
        </div>

        <div id="beschrijving">
          <div class="label">Beschrijving</div>
          <div type="text" class="inputContainer">
            <textarea
              id="descriptionInput"
              class="inputs"
              type="text"
              v-model="this.description"
              @change="updateQuizDescription()"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="image">
        <imageUpload class="imageInput" />
        <!-- zoek naar een giphy gif -->
        <!-- <input type="text" id="gifInput" />
    <div id="gifContainer"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
import imageUpload from "@/components/inputs/ImageInput.vue";

export default {
  name: "QuizInfo",
  components: {
    imageUpload,
  },
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {
    updateQuizTitle() {
      this.$store.commit("updateQuizTitle", {
        title: this.title,
      });
      this.title = this.$store.state.cQ.title;
    },
    updateQuizDescription() {
      this.$store.commit("updateQuizDescription", {
        description: this.description,
      });
      this.description = this.$store.state.cQ.description;
    },
    // updateQuizInfoState() {
    //   this.$store.commit("updateQuizInfo", {
    //     title: this.title,
    //     description: this.description,
    //   });
    //   this.title = this.$store.state.cQ.title;
    //   this.description = this.$store.state.cQ.description;
    // },
  },
  mounted() {
    this.title = this.$store.state.cQ.title;
    this.description = this.$store.state.cQ.description;
  },
};
</script>

<style scoped>
#quizInfo {
  box-sizing: border-box;

  position: relative;
  padding: 10px;
  /* height: 293px; */
  /* left: 178px;
    right: 177px; */
  /* top: 86px; */
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid #000000;
  border-radius: 10px;
}
.gridContainer {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  grid-template-rows: 1fr;
  gap: 0px 10px;
  grid-template-areas: "info image";
}
.image {
  grid-area: image;
}
.info {
  grid-area: info;
}
.inputs {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
#titel {
  position: relative;
  height: 81px;
  /* left: 45px;
  right: 550px;
  top: 33px; */
}
#beschrijving {
  position: relative;
  height: 132px;
  /* left: 45px;
  right: 550px;
  top: 122px; */
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
.imageInput {
  box-sizing: border-box;

  /* position: absolute;
  width: 100%;
  left: 596px;
  right: 45px;
  top: 70px; */
  height: 100%;
  
  border: 1px solid #000000;
}
textarea {
  resize: none;
}
</style>
