<template>
    <div class="container-fluid">
        <div class="row shadow">
            <top-menu/>
        </div>
        <div class="row">
            <div class="col-3">
                <left-menu/>
            </div>
            <div class="col-9 bg-white">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import LeftMenu from "./leftMenu";
    import TopMenu from "./topMenu";
    export default {
        name: "Master",
        components: {TopMenu, LeftMenu}
    }
</script>

<style scoped>

</style>
