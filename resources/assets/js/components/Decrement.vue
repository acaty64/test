<template>
    <button @click="decrement" class="btn btn-danger">Disminuir</button>
</template>

<script>
    export default {
        mounted() {
            console.log('Decrement.vue mounted.')
        },
        methods: {
            decrement() {
                this.$emit('decrement')
            },
        }
    }
</script>
