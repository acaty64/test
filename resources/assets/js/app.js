
/************ En el video main.js */

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
Vue.component('App', require('./components/register/App.vue'));
Vue.component('dcurso-component', require('./components/dcurso/DCursoComponent.vue'));

/*
const app = new Vue({
    el: '#app'
});
*/

import Vue from 'vue'
//import App from './components/App.vue'
import { store } from './store/register/store.js' ;
//import { dcursoStore } from './store/dcurso/store.js' ;

new Vue({
  el: '#app',
  store,
//  dcursoStore,
//  render: h => h(App)
})