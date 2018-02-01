<template>
    <div>            
        <div class="panel-heading">DCurso_Edit Component</div>

        <div class="panel-body">
            <p>Cursos seleccionados: {{ count_sel }}</p>          
            <dcursos />
            <cursos />
        </div>
    </div>

</template>

<script>
    import store from '../store/dcurso_edit.js'
    import Cursos from './Cursos.vue'
    import Dcursos from './Dcursos.vue'

    export default {
        components: { 
            Cursos,
            Dcursos
        },
        computed: {
            count_sel(){
                return store.getters.count_sel
            }
        },
        mounted() {
            console.log('DCurso_Edit Component mounted.')
        },
    }
</script>
