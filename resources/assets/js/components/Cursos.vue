<template>
    <div>
        <h3>Cursos</h3>
        <ul>
            <li v-for="item in cursos"> {{ item.id }}</li>
        </ul>
    </div>
</template>

<script>
    import store from '../store/dcurso_edit.js'

    export default {
        mounted() {
            console.log('Cursos.vue mounted.');
            store.dispatch('fetch_cursos');
        },
        computed: {
            cursos(){
                return store.state.cursos
            }
        },
        methods: {

        }
    }
</script>
