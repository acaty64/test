<template>
    <div>    
        <h3>Disponibilidad de Cursos</h3>
        <select multiple v-model='item'>
            <option v-for="dcurso in dcursos" :value='dcurso'>{{dcurso.index}} - {{ dcurso.curso_id }} {{ dcurso.ccurso }} {{ dcurso.wcurso }}</option>
        </select>
        <button @click="del_item" >Deseleccionar</button>
    </div>
</template>

<script>
    import DCursoStore from '../store/dcurso_edit.js'

    export default {
        mounted() {
            console.log('Dcursos.vue mounted.');
            DCursoStore.dispatch('fetch_dcursos');
        },
        data(){
            return {
                item: [],
                id: 0
            }
        },
        computed: {
            dcursos(){
                return DCursoStore.state.dcursos
            }
        },
        methods: {
            del_item(){
console.log('Dcursos2.vue [this.item]: ', this.item);
                //store.state.item = store.state.dcursos[this.id];
                DCursoStore.state.item = this.item;
                DCursoStore.dispatch('del_item');
            },
        }
    }
</script>

