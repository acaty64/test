<template>
    <button @click="increment" class="btn btn-primary">Incrementar</button>
</template>

<script>
    //import store from '../store/counter.js'

    export default {
        mounted() {
            console.log('Increment.vue mounted.')
        },
        methods: {
            increment() {
                this.$store.commit('increment')
            },
        }
    }
</script>
