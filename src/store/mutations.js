import Cookies from "vue-cookies";

export const mutations = {
    logout() {
        Cookies.remove('auth_token');
        Cookies.remove('session_user');
        window.location = '/login'
    },
    modalTitle(state, title) {
        state.modalTitle = title;
    },
    formObject(state, object) {
        state.formObject = object;
    },
    formType(state, type) {
        state.formType = type;
    },
    dataList(state, data) {
        state.dataList = data;
    },
    updateId(state, id) {
        state.updateId = id;
    },
    Config(state, data) {
        state.Config = data;
    },
    resetFilter(state, data) {
        state.filter = data;
    },
    httpRequest(state, data) {
        state.httpRequest = data;
    },
    requiredData(state, data) {
        state.requiredData = data;
    },
}
