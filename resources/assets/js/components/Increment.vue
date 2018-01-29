<template>
    <button @click="increment" class="btn btn-primary">Incrementar</button>
</template>

<script>
    export default {
        mounted() {
            console.log('Increment.vue mounted.')
        },
        methods: {
            increment() {
                this.$emit('increment')
            },
        }
    }
</script>
