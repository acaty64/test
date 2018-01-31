<template>
    <div>
        <h3>Cursos</h3>
        <select v-model="item">
            <option v-for="item in cursos" :value='item'> {{ item.wcurso }} (cód: {{ item.ccurso }} )</option>
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
                add_id: 0,
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
console.log('item: ',this.item);
                store.dispatch(this.item)
            }
        }
    }
</script>
