import axios from 'axios';
import Cookies from "vue-cookies";

export function initialize(store, router) {
    router.beforeEach((to, from, next) => {
        window.document.title = to.meta.pageTitle !== undefined ? to.meta.pageTitle : '';
        const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
        store.state.dataList = [];

        goNext(to, from, next, requiresAuth, store.state.currentUser);
    });

    function goNext(to, from, next, requiresAuth, currentUser) {
        if (requiresAuth && !currentUser) {
            next('/');
        } else if ((to.path == '/login' && currentUser)
            || (to.path == '/registration' && currentUser)) {
            next({name:'dashboard'});
        } else {
            next();
        }
    }

    axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if (parseInt(error.response.status) === 401){
            // store.commit('logout');
        }
        return Promise.reject(error);
    });

    if (Cookies.isKey('auth_token') &&
        Cookies.isKey('auth_token') !== undefined &&
        Cookies.get('auth_token') !== '') {
        setAuthorization(Cookies.get('auth_token'));
    }
}

export function setAuthorization(token) {
    axios.defaults.headers.common["Authorization"] = `bearer ${token}`
}

export function getLocalUser() {
    if (Cookies.isKey('session_user')) {
        return Cookies.get('session_user');
    }
    return null;
}
