<template>
    <div>    
        <h3>Disponibilidad de Cursos</h3>
        <ul>
            <li v-for="item in dcursos"> {{ item.id }}</li>
        </ul>
    </div>
</template>

<script>
    import store from '../store/dcurso_edit.js'

    export default {
        mounted() {
            console.log('Dcursos.vue mounted.');
            store.dispatch('fetch_dcursos');
        },
        computed: {
            dcursos(){
                return store.state.dcursos
            }
        },
        methods: {

        }
    }
</script>

