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

		count_sel(state){
			state.count_sel = state.dcursos.length;
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
			commit('count_sel');
		},
		addItem({ commit }){
			addItem(state, commit)
		}
	}
})

export default store