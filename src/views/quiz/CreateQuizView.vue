<template>
    <div>
        Maak een quiz!
        <br/>
        <button v-on:click="increment()">increment</button>
        {{ this.$store.state.count }}
    </div>
</template>

<script>  
export default {
    name: 'CreateQuizView',
    components: {

    },
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    },
}
</script>
  