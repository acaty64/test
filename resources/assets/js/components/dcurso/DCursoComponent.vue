<template>
  <div>
    <app-grupo></app-grupo>
  </div>
</template>

<script>
  import axios from 'axios'
  import Grupo from './DCursoGrupo.vue';

  export default {
/*
      mounted() {
          console.log('Dcurso-component mounted.');
          this.$store.getters.getData;
//          this.getData();
      },
*/

    created() {
        console.log('Store Dcurso-component created.');
        this.$store.commit({
                    type: 'getData'
                  });
//          this.getData();
    },
      components: {
          appGrupo: Grupo,
      },

      computed: {

      },
      methods: {

      },
      
  }
</script>