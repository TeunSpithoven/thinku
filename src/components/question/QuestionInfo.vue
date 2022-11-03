<template>
  <div id="info">
    <div id="number">
      {{ this.number }}
    </div>
    <div id="title">
      {{ this.question }}
    </div>
    <div id="editButton">Bewerk</div>
    <div id="deleteButton">Verwijderen</div>
    <div id="type">
      <button @click="toggleTypeDropdown">{{ this.type }}</button>
    </div>
    <div id="typeDropdown">
      <button v-for="t in this.unselectedTypes" :key="t">{{ t }}</button>
    </div>
    <div id="time">{{ this.time }}</div>
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
    toggleTypeDropdown() {
      this.typeDropdown = !this.typeDropdown;
    },
  },
};
</script>

<style scoped>
#info {
  position: absolute;
  height: 111px;
  left: 12px;
  right: 11px;
  top: 11px;
}
#number {
  position: absolute;
  width: 64px;
  height: 51px;
  left: 0px;
  top: 0px;

  border: 1px solid #000000;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;

  color: #000000;
}

#title {
  position: absolute;
  height: 51px;
  left: 72px;
  right: 110px;
  top: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;

  color: #000000;

  border: 1px solid #000000;
}

#editButton {
  position: absolute;
  width: 49px;
  height: 51px;
  right: 54px;
  top: 0px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
  border: 1px solid #000000;
}
#deleteButton {
  position: absolute;
  width: 50px;
  height: 51px;
  right: 0px;
  top: 0px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 18px;

  color: #000000;
  border: 1px solid #000000;
}
#type {
  position: absolute;
  width: 305px;
  height: 51px;
  left: calc(50% - 305px / 2 - 278.5px);
  top: 60px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;

  color: #000000;

  border: 1px solid #000000;
}
#time {
  box-sizing: border-box;

  position: absolute;
  width: 392px;
  height: 51px;
  right: 225px;
  top: 60px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 44px;

  color: #000000;

  border: 1px solid #000000;
}
</style>
