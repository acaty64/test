<template>
    <div>
        <h3>Cursos</h3>
        <select v-model="item">
            <option v-for="item in cursos" :value='item'> {{ item.index }} - {{ item.wcurso }} (cód: {{ item.ccurso }} )</option>
        </select>
        <button @click='add_item'>Adicionar curso</button>
    </div>
</template>

<script>
    import DCursoStore from '../store/dcurso_edit.js'

    export default {
        mounted() {
            console.log('Cursos.vue mounted.');
            DCursoStore.dispatch('fetch_cursos');
        },
        data(){
            return {
                item: []
            }
        },
        computed: {
            cursos(){
                return DCursoStore.state.cursos
            }
        },
        methods: {
            add_item(){
/*                this.item.index = store.state.count_sel; 
console.log('Cursos.vue add_item.item: ',this.item);
*/
                DCursoStore.state.item = this.item;
                DCursoStore.dispatch('add_item');
            }
        }
    }
</script>
