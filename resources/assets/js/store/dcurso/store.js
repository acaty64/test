import Vue from 'vue';
import Vuex from 'vuex';

import getters from './getters';
/*
import mutations from './mutations';
import actions from './actions';
*/

Vue.use(Vuex);

export const dcursoStore = new Vuex.Store({
	state: {
        items:[],
        facultad_id:1,
        sede_id:1,
        docente_id:4,
        grupos:[],
        grupo_id:0,
        registrations: [],
	},

    mutations:{
        getData(state){
            return function() {
    console.log('getData');
                    var URLdomain = window.location.host;
                    var protocol = window.location.protocol;
                    var url = protocol+'//'+URLdomain+'/api/dcurso/load/'
                    var request ={
                      'facultad_id': this.$store.state.facultad_id,
                      'sede_id': this.$store.state.sede_id,
                      'docente_id': this.$store.state.docente_id,
                    };
        
                    axios.post(url, request).then(response=>{
                    this.$store.state.grupos = response.data.data.grupos;
                    this.$store.state.items = response.data.data.registration;
                //  this.sortWcurso(this.$store.items);
                    this.$store.state.registrations = response.data.data.registrations;
                    });
            }
        },
    },

    getters: {
        grupos(state){
            return state.grupos;
        }        
    },


/*
    mutations,
    actions,
*/
});

