<template>
    <div>    
        <h3>Disponibilidad de Cursos (vue-select)</h3>
        <v-select multiple v-model="dcursos" :options="cursos"></v-select>
    </div>
</template>

<script>
    import store from '../store/dcurso_edit2.js'

    export default {
        mounted() {
            console.log('Dcursos.vue mounted.');
            store.dispatch('fetch_dcursos');
            store.dispatch('fetch_cursos');
        },
        data(){
            return {
                item: [],
                id: 0
            }
        },
        computed: {
            cursos(){
                return store.state.cursos
            },
            dcursos(){
                return store.state.dcursos
            }
        },
        methods: {

        }
    }
</script>

