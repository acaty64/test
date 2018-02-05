<template>
    <button @click="decrement" class="btn btn-danger">Disminuir</button>
</template>

<script>
    import CountStore from '../store/counter.js'

    export default {
        mounted() {
            console.log('Decrement.vue mounted.')
        },
        methods: {
            decrement() {
                CountStore.commit('decrement')
            },
        }
    }
</script>
