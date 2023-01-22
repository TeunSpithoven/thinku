<template>
  <div id="joinRoom">
    Join a Room
    <input type="text" id="roomName" placeholder="Room" />
    <button @click="join">Join</button>
  </div>
</template>

<script>
export default {
  name: "JoinRoom",
  components: {},
  data() {
    return {
      user: {
        userId: 1,
        userName: "testTeun",
      },
      roomName: "",
    };
  },
  methods: {
    join() {
      this.$router.push({ path: "/play" });
    },
  },
};
</script>

<style scoped></style>
