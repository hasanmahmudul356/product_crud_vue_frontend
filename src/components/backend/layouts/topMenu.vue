<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark" style="width: 100%; border-bottom: 1px solid #ddd">
        <!-- Brand -->
        <div class="col-3">
            <h5><strong class="text-white">TEST ADMIN</strong></h5>
        </div>
        <div class="col-9 text-right">
            <ul class="navbar-nav">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                        {{$store.getters.user.name}}
                    </a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" @click="$store.commit('logout')" href="#">Logout</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        name: "topMenu"
    }
</script>

<style scoped>

</style>
