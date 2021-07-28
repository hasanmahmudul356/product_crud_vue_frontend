<template>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark" style="width: 100%; border-bottom: 1px solid #ddd">
        <!-- Brand -->
        <div class="col-3">
            <h5><strong class="text-white">TEST ADMIN | {{$store.getters.user.name}}</strong></h5>
        </div>
        <div class="col-9 text-right">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" @click="$store.commit('logout')" href="#" id="navbardrop" data-toggle="dropdown">
                        LogOut
                    </a>
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
