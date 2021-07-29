import Cookies from "vue-cookies";
import {ApiUrl} from "../config";

export default {
    data() {
        return {
            baseUrl: '',
        }
    },
    watch: {
        'errors': {
            handler: function (value) {
                var is_invalid = $('.is-invalid');
                $(is_invalid).removeAttr("title", '');
                $(is_invalid).removeClass('is-invalid');
                if (value.items.length > 0) {
                    value.items.forEach(function (val) {
                        var message = val.msg;
                        var target = $("[name='" + val.field + "']");
                        $(target).addClass('is-invalid');
                        $(target).attr("title", message.replace(val.field, ""));
                    });
                }
            },
            deep: true
        },
    },
    computed: {
        formType: function () {
            return this.$store.getters.formType;
        },
        formObject: function () {
            return this.$store.getters.formObject;
        },
        dataList: function () {
            return this.$store.getters.dataList;
        },
        updateId: function () {
            return this.$store.getters.updateId
        },
        httpRequest: function () {
            return this.$store.getters.httpRequest
        },
        requiredData: function () {
            return this.$store.getters.requiredData;
        },

    },
    methods: {
        getConfig: function (name) {
            var information = this.$store.state.Config;
            if (information[name] !== undefined) {
                return information[name];
            } else {
                return name;
            }
        },
        assignLoginSession: function (retUserData, callback = false) {
            Cookies.remove('auth_token');
            Cookies.remove('session_user');

            Cookies.set('auth_token', retUserData.access_token);
            Cookies.set('session_user', JSON.stringify(retUserData.user));
            this.$store.state.currentUser = retUserData.user;

            if (typeof callback == 'function'){
                callback(true);
            }
        },
        openModal: function (modalName = 'formModal', title = false) {
            if (title) {
                this.$store.commit('modalTitle', title);
            }
            $('#' + modalName).modal({
                backdrop: 'static',
                keyboard: true,
                show: true
            });
            this.$validator.reset();
        },
        closeModal: function (modalName = 'createModal', resetForm = true, resetFormType = true) {
            const _this = this;
            this.$validator.reset();
            $('#' + modalName).modal('hide');
            this.$store.commit('formType', 1);
            if (resetForm) {
                this.$store.commit('formObject', {});
            }
            if (resetFormType) {
                _this.$store.state.formType = 1;
            }
        },
        getUrl: function () {
            if (this.$route.meta.dataUrl !== undefined) {
                return this.$route.meta.dataUrl;
            }
            return '';
        },
        urlGenerate: function (customUrl = false) {
            var url = '';
            if (customUrl) {
                url = `${ApiUrl}/${customUrl}`;
            } else {
                url = `${ApiUrl}/${this.getUrl()}`;
            }
            return url;
        },
        assignValidationError: function (errors) {
            const _this = this;
            $.each(errors, function (index, errorValue) {
                _this.$validator.errors.add({
                    id: index,
                    field: index,
                    name: index,
                    msg: errorValue[0],
                });
            })
        },
        resetForm: function (formData) {
            if (typeof formData == 'object') {
                Object.keys(formData).forEach(function (key) {
                    formData[key] = '';
                });
                return formData;
            }
        },
        pageTitle: function () {
            return this.$route.meta.pageTitle;
        },
        resetFilter: function (parameter = []) {
            this.$store.commit('resetFilter', parameter);
            this.getDataList();
        },
        clickImageInput : function (ID) {
            $('#'+ID).click();
        },
        getImage : function (imagePath) {
            if (imagePath !== undefined && imagePath !== ''){
                return imagePath;
            } else{
                return require('../assets/images.png');
            }
        }
    },
    mounted() {

    }
}
