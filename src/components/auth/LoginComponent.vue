<template>
    <div class="container login-container">
        <div class="row">
            <div class="col-md-6 login-form-1 offset-2">
                <h3>Login</h3>
                <form @submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input v-validate="'required|email'" v-model="formData.email" type="text" class="form-control" name="email" />
                        <strong class="text-danger">{{loginMessage}}</strong>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input v-validate="'required'" v-model="formData.password" type="password" class="form-control" name="password"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Login" />
                    </div>
                    <div class="form-group">
                        <router-link to="registration">Sign up</router-link> | <router-link to="/">Homepage</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "LoginComponent",
        data(){
            return{
                formData : {
                    email : '',
                    password : '',
                },
                loginMessage : '',
            }
        },
        methods : {
            login : function () {
                const _this = this;
                _this.loginMessage = '';
                this.$validator.validate().then(valid => {
                    if (valid) {
                        this.$validator.errors.clear();
                        _this.axios.post(this.urlGenerate(), this.formData).then(function (response) {
                            if (parseInt(response.data.status) === 2000) {
                                _this.assignLoginSession(response.data.result, function (assigned) {
                                    if (assigned){
                                        _this.$toastr('success', 'Successfully Logged in', 'Success');
                                        window.location = '/admin/dashboard'
                                    }
                                });
                            }
                            if (parseInt(response.data.status) === 4001) {
                                _this.loginMessage = response.data.message;
                            }
                        }).catch(function (error) {
                            var retData = error.response.data;
                            _this.$toastr('error', retData.message, 'Error');
                            _this.$router.push({path:'/dashboard'})
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>
