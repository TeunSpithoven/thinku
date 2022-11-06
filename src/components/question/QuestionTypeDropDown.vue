<template>
  <button @click="toggleTypeDropdown()">
    {{ this.type }}
  </button>
  <div v-if="this.typeDropdown" id="typeDropdown">
    <ul class="buttonList">
      <li class="typeButton" v-for="t in this.types" :key="t">
        <button v-if="t !== this.type" @click="updateType(t)">{{ t }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "QuestionTypeDropdown",
  props: {
    type: String,
  },
  data() {
    return {
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
      this.$emit("updateType", {
        type: type,
      });
      this.toggleTypeDropdown();
    },
  },
};
</script>

<style scoped>
.typeButton {
  border: 1px solid #000000;
  /* font-size: 24px;
    line-height: 25px; */
}
.buttonList {
  position: absolute;
  width: auto;
  background-color: grey;
}
</style>
