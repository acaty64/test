import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const state = {
	'count' : 0
};

const getters = {
	countPlusOne : state=> {
		return state.count + 1;
	}
};

const mutations = {
	INCREMENT (state) {
		state.count++
	}
};

const actions = {
	increment (context) {
		context.commit('INCREMENT');
	}
};

export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})