<template>
    <div class="container login-container">
        <div class="row">
            <div class="col-md-6 login-form-1 offset-2">
                <h3>Registration</h3>
                <form @submit.prevent="register()">
                    <div class="form-group">
                        <label>Name</label>
                        <input v-validate="'required'" v-model="formData.name" name="name" type="text" class="form-control"/>
                    </div>
                    <div class="form-group">
                        <label>Email</label>
                        <input v-validate="'required|email'" v-model="formData.email" name="email" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Phone</label>
                        <input v-validate="'required'" v-model="formData.phone" name="phone" type="text" class="form-control" />
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input v-validate="'required'" v-model="formData.password" type="password" name="password" class="form-control" />
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btnSubmit" value="Login" />
                    </div>
                    <div class="form-group">
                        <router-link to="login">Sign In</router-link> | <router-link to="/">Homepage</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "RegistrationComponent",
        data(){
            return{
                formData : {
                    email : '',
                    password : '',
                },
            }
        },
        methods : {
            register : function () {
                const _this = this;
                _this.submitForm(_this.formData, false, function (retData) {
                    _this.$router.push({name : 'login'});
                })
            }
        }
    }
</script>

<style scoped>

</style>
