<template>
  <div id="joinRoom">
    Room code
    <br/>
    <input type="text" id="roomName" v-model="roomName" placeholder="HDSUIC" />
    <br/>
    <button @click="join">Join</button>
  </div>
</template>

<script>
export default {
  name: "JoinRoom",
  components: {},
  computed: {
    student: {
      get() {
        return this.$store.getters.getStudent;
      },
      set(value) {
        this.$store.commit("setStudent", value);
      },
    },
    roomName: {
      get() {
        return this.$store.getters.getRoomName;
      },
      set(value) {
        this.$store.commit("setRoomName", value);
      },
    },
  },
  methods: {
    join() {
      this.$router.push({ path: "/play" });
    },
  },
};
</script>

<style scoped></style>
