<template>
    <button @click="decrement" class="btn btn-danger">Disminuir</button>
</template>

<script>
    import store from '../store/index.js'

    export default {
        mounted() {
            console.log('Decrement.vue mounted.')
        },
        methods: {
            decrement() {
                store.commit('decrement')
            },
        }
    }
</script>
