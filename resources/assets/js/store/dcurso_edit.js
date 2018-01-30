import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store = new Vuex.Store({
	state: {
		cursos: [],
		dcursos: [],
		item: []
	},
	mutations: {
		FETCH_CURSOS(state, cursos){
			state.cursos = cursos;
			console.log('cursos',cursos);
		},

		FETCH_DCURSOS(state, dcursos){
			state.dcursos = dcursos;
			console.log('dcursos',dcursos);			
		},

		addItem(state, item) {
			state.dcursos.push(item);
		},

		delItem(state, item) {
			state.dcursos.push(item);
		},
	},

	actions: {
		fetch_cursos({ commit }){
			commit('FETCH_CURSOS', [
				{
					id: 1,
					ccurso: '000001',
					wcurso: 'curso 1'
				},
				{
					id: 2,
					ccurso: '000002',
					wcurso: 'curso 2'
				},
				{
					id: 3,
					ccurso: '000003',
					wcurso: 'curso 3'
				},
			]);			
		},
		fetch_dcursos({ commit }){			
			commit('FETCH_DCURSOS', [
				{
					id: 4,
					ccurso: '000004',
					wcurso: 'curso 4'
				},
			]);
		}
	}
})

export default store