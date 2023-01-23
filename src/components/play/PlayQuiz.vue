<template>
  <div id="playQuiz">Play a Quiz!</div>
  {{ roomName }}
  <div>{{ socketMessage }}</div>
  <!-- title, roomcode and stuff goes here -->
</template>

<script>
export default {
  name: "PlayQuiz",
  components: {},
  data() {
    return {
      socketMessage: '',
    };
  },
  computed: {
    quiz() {
      return this.$store.getters.getPlayQuiz;
    },
    roomName() {
      return this.$store.getters.getRoomName;
    },
  },
  sockets: {
    connect() {
      this.$socket.emit('join_room', {
        roomName: this.$store.getters.getRoomName,
        user: {
          socketId: this.$socket.id,
          user: this.$store.getters.getStudent,
        },

      })
      this.$store.commit('setIsConnected', true);
    },
    disconnect() {
      this.$store.commit('setIsConnected', false);
    },
    chat(data) {
      this.socketMessage = data;
    },
  },
  methods: {},
  mounted() {
    this.$socket.connect()
  },
};
</script>

<style scoped></style>
