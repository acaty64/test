<template>
    <div>    
        <h3>Disponibilidad de Cursos</h3>
        <ul v-model='item'>
            <li v-for="item in dcursos" :value='id'>{{item.index}} - {{ item.curso_id }} {{ item.ccurso }} {{ item.wcurso }}<span @click="del_item">X</span></li>
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
        data(){
            return {
                item: [],
                id: 0
            }
        },
        computed: {
            dcursos(){
                return store.state.dcursos
            }
        },
        methods: {
            del_item(){
                store.item = store.state.dcursos[this.id];
                store.dispatch('del_item');
            },
        }
    }
</script>

