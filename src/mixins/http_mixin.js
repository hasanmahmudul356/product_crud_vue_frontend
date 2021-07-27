export default {
    data() {
        return {
            formData: {},
            SelectFilter: {},
        }
    },
    methods: {
        getDataList: function (page = 1) {
            const _this = this;
            var data_params = Object.assign(this.filter, {per_page: 20, page: page});
            this.$store.commit('httpRequest', true);
            _this.axios({method: "get", url: _this.urlGenerate(), params: data_params})
                .then(function (response) {
                var retData = response.data;
                _this.$store.commit('httpRequest', false);
                if (parseInt(retData.status) === 2000) {
                    _this.$store.commit('dataList', retData.result)
                } else {
                    _this.$store.state.DataList = [];
                    _this.$toastr(retData.type, retData.message, 'Warning');
                }
            }).catch(function (error) {
                var retData = error.response.data;
                _this.$toastr('error', retData.message, 'Error');
            });
        },

        submitForm: function (formData, model = true) {
            const _this = this;
            var URL,method;
            if (_this.formType === 2) {
                 URL = `${_this.urlGenerate()}/${_this.updateId}`;
                 method = 'put';
            } else {
                 URL = _this.urlGenerate();
                 method = 'post';
            }
            this.$validator.validate().then(valid => {
                if (valid) {
                    _this.$store.state.httpRequest = true;
                    console.log(formData);
                    _this.axios({method: method, url: URL, data: formData}).then(function (response) {
                        var retData = response.data;
                        _this.$store.state.httpRequest = false;
                        if (parseInt(retData.status) === 2000) {
                            _this.$store.state.currentFromModel = 1;
                            _this.$toastr('success', retData.message, 'Success');
                            _this.closeModal(model);
                            _this.getDataList();
                            _this.resetForm(formData);
                        }
                        if (parseInt(retData.status) === 3000) {
                            _this.$toastr('warning', retData.message, 'Warning');
                            _this.assignValidationError(retData.result);
                        }
                        if (parseInt(retData.status) === 5000) {
                            _this.$toastr('error', retData.message, 'Error');
                        }
                    }).catch(function (error) {
                        _this.$toastr('error', 'Something Wrong', 'Error');
                        _this.$router.push({path:'/dashboard'})
                    });
                }
            });
        },
        editData: function (data, updateId, model = 'formModal') {
            const _this = this;
            _this.$store.commit('formObject', data);
            _this.$store.commit('updateId', updateId);
            _this.$store.commit('formType', 2);
            _this.openModal(model);
        },
        deleteInformation: function (index, ID, url = false, callDataList = true) {
            const _this = this;
            this.$swal({
                title: 'Are you sure..??',
                text: 'Data will be delete Permanently??',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: '<i class="fa fa-check"></i>',
                cancelButtonText: '<i class="fa fa-close"></i>',
                showCloseButton: true,
            }).then((result) => {
                if (result.value) {
                    var URL = !url ? `${_this.urlGenerate()}/${ID}` : url;
                    _this.axios.delete(URL)
                        .then(function (response) {
                            var retData = response.data;
                            _this.$store.commit('httpRequest', false);
                            if (parseInt(retData.status) === 2000) {
                                _this.$toastr('success', retData.message, 'Success');
                                _this.getDataList();
                            } else {
                                _this.$toastr('warning', retData.message, 'Warning');
                            }
                        }).catch(function (error) {
                        var retData = error.response.data;
                        _this.$toastr('error', retData.message, 'Error');
                    });
                }
            });
        },
    },
}
