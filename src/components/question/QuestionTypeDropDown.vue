<template>
  <button @click="toggleTypeDropdown()">
    {{ this.type }}
  </button>
  <div v-if="this.typeDropdown" id="typeDropdown">
    <ul class="buttonList">
      <li class="typeButton" v-for="t in this.types" :key="t">
        <button @click="updateType(t)">{{ t }}</button>
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
      unselectedTypes: ["meerkeuze", "open", "woordwolk", "goedfout"],
    };
  },
  emits: {
    updateType(payload) {
      return payload.type.length > 0;
    },
  },
  methods: {
    toggleTypeDropdown() {
      console.log(this.types);
      this.unselectedTypes = this.types;

      var index = this.unselectedTypes
        .map((x) => {
          return x;
        })
        .indexOf(this.type);
      if (index != -1) {
        this.unselectedTypes.splice(index, 1);
      }
      index = -1;
      this.typeDropdown = !this.typeDropdown;
    },
    updateType(type) {
      this.$emit("updateType", {
        type: type,
      });
      this.toggleTypeDropdown();
    },
  },
    mounted() {
        console.log('dropdown mounted');
    //   var index = this.types
    //     .map((x) => {
    //       return x;
    //     })
    //     .indexOf(this.type);

    //   this.unselectedTypes.splice(index, 1);
    },
  // computed: {
  //   unselectedTypes() {
  //         return this.types !== this.type ? 'Yes' : 'No';
  //   },
  // },
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
