<template>
    <div>
        <Header></Header>
        <div class="container" style="position:relative;top:2em;">
            <div class="row">
                <div class="col-md-12">
                    <h2>GENERAL <b> STORE </b></h2>
                    <div class="row">
                        <div class="col-2">
                            <left-category/>
                        </div>
                        <div class="col-10">
                            <div class="row">
                                <div class="col-3 item" v-for="(product, index) in dataList.data" :key="index">
                                    <div class="thumb-wrapper">
                                        <div class="img-box">
                                            <router-link :to="{name:'product_details', params: {product_id: product.id}}">
                                                <img :src="getImage(product.image_url)" class="img-responsive img-fluid" alt="">
                                            </router-link>
                                        </div>
                                        <div class="thumb-content">
                                            <router-link :to="{name:'product_details', params: {product_id: product.id}}">
                                                <h4>{{product.title}}</h4>
                                            </router-link>
                                            <p class="item-price"> <span>${{product.price}}</span></p>
                                            <router-link :to="{name:'product_details', params: {product_id: product.id}}" class="btn btn-primary">Add to Cart</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Header from "./layouts/Header";
    import LeftCategory from "./layouts/LeftCategory";
    export default {
        name: "HomeComponent",
        components: {LeftCategory, Header},
        mounted() {
            this.getGeneralData(['category']);
            this.getDataList();
        }
    }
</script>

<style scoped>

</style>
