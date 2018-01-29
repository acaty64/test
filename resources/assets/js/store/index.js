import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(vuex)

let store = new Vuex.Store({
	state: {
		count: 0
	}
})

export default store