
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('counter-app', require('./components/CounterApp.vue'));
Vue.component('dcurso-edit', require('./components/DCurso_EditComponent.vue'));

import CountStore from './store/counter.js'
import DCursoStore from './store/dcurso_edit.js'

const app = new Vue({
    el: '#app',
    CountStore,
    DCursoStore
});
