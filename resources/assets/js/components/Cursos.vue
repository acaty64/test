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
    import store from '../store/dcurso_edit.js'

    export default {
        mounted() {
            console.log('Cursos.vue mounted.');
            store.dispatch('fetch_cursos');
        },
        data(){
            return {
                item: []
            }
        },
        computed: {
            cursos(){
                return store.state.cursos
            }
        },
        methods: {
            add_item(){
/*                this.item.index = store.state.count_sel; 
console.log('Cursos.vue add_item.item: ',this.item);
*/
                store.state.item = this.item;
                store.dispatch('add_item');
            }
        }
    }
</script>
