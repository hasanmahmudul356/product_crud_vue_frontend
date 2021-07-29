import { getLocalUser } from "../helpers/general";
const user = getLocalUser();
export const state = {
    currentUser: user,
    httpRequest: false,
    dataList: [],
    authUser: false,
    filter: {},
    Config: [],
    isConfigLoaded: false,
    requiredData: [],
    formType: 1,
    updateId: '',
    formObject : {},
};
