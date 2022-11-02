<template>
    <div>
        <CreateQuiz/>
        Maak een quiz!
        <br/>
        <button v-on:click="increment()">increment</button>
        {{ this.$store.state.count }}
    </div>
</template>

<script>
import CreateQuiz from '@/components/quiz/CreateQuiz.vue'
export default {
    name: 'CreateQuizView',
    components: {
        CreateQuiz,
    },
    methods: {
        increment() {
            this.$store.commit('increment');
        }
    },
}
</script>
  