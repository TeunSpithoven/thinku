<template>
  <button class="initialTypeButton" @click="toggleTypeDropdown()">
    {{ this.type }}
  </button>
  <div v-if="this.typeDropdown" id="typeDropdown">
    <ul class="buttonList">
      <li class="typeButton" v-for="t in this.types" :key="t">
        <button v-if="t !== this.type" @click="updateType(t)">{{ t }}</button>
      </li>
    </ul>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  name: "QuestionTypeDropdown",
  props: {
    type: String,
  },
  data() {
    return {
      hover: false,
      typeDropdown: false,
      types: ["meerkeuze", "open", "woordwolk", "goedfout"],
    };
  },
  emits: {
    updateType(payload) {
      return payload.type.length > 0;
    },
  },
  methods: {
    toggleTypeDropdown() {
      this.typeDropdown = !this.typeDropdown;
    },
    updateType(type) {
      this.$emit("updateType", {type: type});
      this.toggleTypeDropdown();
    },
  },
};
</script>

<style scoped>
.typeDropdownContainer {
  height: 100%;
}
button {
  height: 100%;
  width: 100%;
}
.initialTypeButton {
  /* padding-top: 10px; */
  height: 100%;
  width: 100%;
}
.typeButton {
  /* padding-top: 10px; */
  padding-bottom: 0px;
  /* border: 1px solid #000000; */
  /* font-size: 24px;
    line-height: 25px; */
}
#typeDropdown {
  position: relative;
  width: 100%;
}
.buttonList {
  position: absolute;
  width: inherit;
  background-color: #eff3f4;
}
.buttonList > li {
  max-height: 100px;
  line-height: 35px;
  border-bottom: 1px solid rgb(0, 0, 0);
}
.buttonList > li:last-child {
  border-bottom: none;
}
</style>
