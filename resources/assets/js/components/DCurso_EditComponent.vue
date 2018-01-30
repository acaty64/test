<template>
    <div>            
        <div class="panel-heading">DCurso_Edit Component</div>

        <div class="panel-body">
            {{ count }}
            <cursos />
            <dcursos />
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
            count(){
                return store.state.count
            }
        },
        mounted() {
            console.log('DCurso_Edit Component mounted.')
        },
    }
</script>
