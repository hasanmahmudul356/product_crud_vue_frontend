import Vue from 'vue';
import jQuery from 'jquery';
window.jQuery = jQuery;
window.$ = jQuery;
import 'bootstrap'

import App from './App';
import routes from './routes';
import  './assets/css/custom.css'

Vue.config.productionTip = false;

import VueRouter from 'vue-router';

Vue.use(VueRouter);
const router = new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: "active",
});

import Mixin from './mixins/base_mixin';
import HttpMixin from './mixins/http_mixin';

Vue.mixin(Mixin);
Vue.mixin(HttpMixin);

import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);

import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios, axios);

// import VModal from 'vue-js-modal/dist/ssr.nocss'
// import 'vue-js-modal/dist/styles.css'
// Vue.use(VModal,{});

import Vuex from 'vuex';
Vue.use(Vuex);
import StoreData from './store/index';
const store = new Vuex.Store(StoreData);

import VueToastr from '@deveodk/vue-toastr'
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-right',
    defaultType: 'info',
    defaultTimeout: 3000
});
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.use(VueSweetalert2);

import {initialize} from './helpers/general';

initialize(store, router);

new Vue({
    el: '#app',
    router, axios, store,
    components: {App},
    template: '<App/>'
});
