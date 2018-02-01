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
	},
	mutations: {
		FETCH_CURSOS(state, cursos){
			state.cursos = cursos;
		},

		FETCH_DCURSOS(state, dcursos){
			state.dcursos = dcursos;			
		},

		ADD_ITEM(state, item) {
			state.dcursos.push(store.item);
			state.cursos = store.getters.elimina(state.cursos, store.item);
		},

		DEL_ITEM(state, item) {
			state.dcursos = store.getters.elimina(state.dcursos, store.item);
			state.cursos.push(store.item);
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