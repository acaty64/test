import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		cursos: [],
		dcursos: [],
		item: [],
		count_sel: 0,
	},
	getters:{
		elimina(state){
			return function (array, item){
				return array.filter(e=> e.curso_id!==item.curso_id);
			};
		},
		count_sel(state){
			return state.dcursos.length;
		},
		sort_cursos(state){ 
			return state.cursos.sort(function (a, b) {
				if (a.wcurso > b.wcurso) {
				    return 1;
				}
				if (a.wcurso < b.wcurso) {
				    return -1;
				}
				  // a must be equal to b
				return 0;
			});
		},
		sort_dcursos(state){ 
			return state.dcursos.sort(function (a, b) {
				if (a.wcurso > b.wcurso) {
				    return 1;
				}
				if (a.wcurso < b.wcurso) {
				    return -1;
				}
				  // a must be equal to b
				return 0;
			});
		}
	},
	mutations: {
		FETCH_CURSOS(state, cursos){
			state.cursos = cursos;
		},

		FETCH_DCURSOS(state, dcursos){
			state.dcursos = dcursos;			
		},

		ADD_ITEM(state) {
//console.log('ADD_ITEM.state.item: ', state.item);
			state.item.index = store.getters.count_sel;
			state.dcursos.push(state.item);
			state.cursos = store.getters.elimina(state.cursos, state.item);
			//state.dcursos = store.getters.sort_dcursos();
		},

		DEL_ITEM(state) {
//console.log('DEL_ITEM.state.item: ', state.item);
			state.item[0].index = state.item[0].curso_id;
			state.cursos.push(state.item[0]);
			state.dcursos = store.getters.elimina(state.dcursos, state.item[0]);
			//state.cursos = store.getters.sort_cursos();
		},

		count_sel(state){
			state.count_sel = store.getters.count_sel;
		},
	},

	actions: {
		fetch_cursos({ commit }){
			commit('FETCH_CURSOS', [
				{
					index: 0,
					curso_id: 1,
					ccurso: '000001',
					wcurso: 'curso 1'
				},
				{
					index: 1,
					curso_id: 2,
					ccurso: '000002',
					wcurso: 'curso 2'
				},
				{
					index: 2,
					curso_id: 3,
					ccurso: '000003',
					wcurso: 'curso 3'
				},
			]);			
		},

		fetch_dcursos({ commit }){			
			commit('FETCH_DCURSOS', [
				{
					index: 0,
					curso_id: 4,
					ccurso: '000004',
					wcurso: 'curso 4'
				},				
				{
					index: 1,
					curso_id: 5,
					ccurso: '000005',
					wcurso: 'curso 5'
				},
			]);
			commit('count_sel');
		},

		add_item({ commit }){
			commit('ADD_ITEM');
		},

		del_item({ commit }){
			commit('DEL_ITEM');
		},

	}
})

export default store