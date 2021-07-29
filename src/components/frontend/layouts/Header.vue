<template>
    <nav class="navbar navbar-expand-lg navbar-dark navbar-fixed-top" style="background-color:#2874f0;">
        <div class="container">
            <router-link to="/" class="navbar-brand" href="https://codepen.io/Mamik153/full/MXOyjY/">General Store</router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">

                    </li>
                </ul>
                <ul class="navbar-nav">
                    <li class="nav-item active">
                        <router-link to="registration" class="nav-link">Registration</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link to="/login" class="nav-link">Login</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
