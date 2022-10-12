<template>
    <div>
        <div>
            <p>connection status: "{{isConnected}}"</p>
            <button @click="connect()">connect</button>
        </div>
        <div>
            <ul id="messages">
                <li v-for="message in this.messages" v-bind:key="message">
                    {{ message }}
                </li>
            </ul>
        </div>
        <div>
            <input id="message" v-model="message" type="text"/>
            <button v-on:click="submitMessage()">Submit</button>
        </div>
    </div>
</template>

<script>
import io from 'socket.io-client'

export default {
  name: "ChatSocket",
  data() {
    return {
      socket: {},
      context: {},
      message: '',
      isConnected: false,
      messages:[],
    }
  },
  created() {
    //connecting to our host  
    this.socket = io("http://localhost:82");
  },
  methods: {
    submitMessage() {
        //stuur de message in de websocket
        this.socket.emit('message', { data: this.message})
        this.message = '';
    },
  },
};
</script>
