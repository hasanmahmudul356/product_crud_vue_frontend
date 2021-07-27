<template>
    <div class="row bg-dark">
        <div class="col-12 text-left mt-3">
            <ul class="list-group">
                <li class="list-group-item">
                    <router-link :to="{ name: 'category'}">Categories</router-link>
                </li>
                <li class="list-group-item">
                    <router-link :to="{ name: 'product'}">Products</router-link>
                </li>
                <li class="list-group-item">Third item</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "leftMenu"
    }
</script>

<style scoped>

</style>
