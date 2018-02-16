import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

//Separate Module States
//import <yourModuleName> from './modules/your-module-name/store'
import counter from './modules/counter/store.js'

export default new Vuex.Store({
    modules: {
        //yourTemplateName: yourTemplateName
        counter,
    }
})