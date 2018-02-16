// Este archivo se denomina originalmente index.js
import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

let counterstore = new Vuex.Store({
	state: {
		count: 0
	},
	mutations: {
		increment(state) {
			state.count++
		},
		decrement(state) {
			state.count--
		},
	},
})

export default counterstore