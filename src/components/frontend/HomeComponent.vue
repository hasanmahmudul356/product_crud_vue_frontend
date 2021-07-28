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
                                            <img :src="getImage(product.image_url)" class="img-responsive img-fluid" alt="">
                                        </div>
                                        <div class="thumb-content">
                                            <h4>{{product.title}}</h4>
                                            <p class="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
                                            <a href="#" class="btn btn-primary">Add to Cart</a>
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
