<template>
    <button @click="decrement" class="btn btn-danger">Disminuir</button>
</template>

<script>
    //import store from '../store/counter.js'

    export default {
        mounted() {
            console.log('Decrement.vue mounted.')
        },
        methods: {
            decrement() {
                this.$store.commit('decrement')
            },
        }
    }
</script>
