<template>
    <div id="registration">
        <h3>Seleccione el curso</h3>
        <hr>
        <div class="row" v-for="item in items">
            <p>{{ item.wcurso }}</p>
            <button @click="registerItem(item)">Seleccionar</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['items'],
        methods: {
            registerItem(item) {
                this.$emit('itemRegistered', item);
                item.registered != false;
            }
        }
    }
</script>

<style scoped>
    #registration {
        box-shadow: 1px 1px 2px 1px #ccc;
        margin: 20px;
        padding: 20px;
        display: inline-block;
        width: 300px;
        vertical-align: top;
    }

    .row h4 {
        display: inline-block;
        width: 70%;
        text-align: left;
        margin: 0 0 10px 0;
    }

    button {
        background-color: lightgreen;
        border: none;
        box-shadow: 1px 1px 1px black;
        font-size: inherit;
        text-align: right;
        cursor: pointer;
    }

    button:hover {
        background-color: green;
    }
</style>
