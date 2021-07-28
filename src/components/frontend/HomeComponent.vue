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
                                            <img src="https://images.kogan.com/image/fetch/s--4uUL-TgJ--/b_white,c_pad,f_auto,h_400,q_auto:good,w_600/https://assets.kogan.com/files/product/HKI/20170324_New_iPad/KHIPADAIR332WGRY_1.jpg" class="img-responsive img-fluid" alt="">
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
