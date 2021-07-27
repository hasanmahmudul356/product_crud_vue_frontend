export const getters = {
    modalTitle(state) {
        return state.modalTitle;
    },
    formObject(state) {
        return state.formObject;
    },
    formType(state) {
        return state.formType;
    },
    dataList(state) {
        return state.dataList;
    },
    updateId(state) {
        return state.updateId;
    },
    filter(state) {
        return state.filter;
    },
    httpRequest(state) {
        return state.httpRequest;
    },
    user(state) {
        return state.currentUser !== null && state.currentUser !== undefined ? state.currentUser : {};
    },
};
