<template>
    <div>
        <Header></Header>
        <div class="container" style="position:relative;top:2em;">
            <div class="row">
                <div class="col-md-12">
                    <h2>GENERAL <b> STORE </b></h2>
                    <div class="row">
                        <div class="preview col-md-6">
                            <div class="preview-pic tab-content">
                                <div class="tab-pane active" id="pic-1">
                                    <img :src="getImage(detailsData.image_url)" />
                                </div>
                            </div>
                        </div>
                        <div class="details col-md-6">
                            <h3 class="product-title">{{detailsData.title}}</h3>
                            <div class="rating">
                                <div class="stars">
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                    <span class="fa fa-star checked"></span>
                                </div>
                            </div>
                            <p class="product-description">{{detailsData.description}}</p>
                            <h4 class="price">current price: <span>${{detailsData.price}}</span></h4>
                            <div class="action">
                                <button class="add-to-cart btn btn-default" type="button">add to cart</button>
                                <button class="like btn btn-default" type="button"><span class="fa fa-heart"></span></button>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5">
                        <div class="col-12">
                            <h4>Latest Product</h4>
                        </div>
                        <hr>
                    </div>
                    <div class="row mt-5">
                        <div class="col-3 item" v-for="(product, index) in detailsData.latest" :key="index">
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
</template>

<script>
    import Header from "./layouts/Header";
    export default {
        name: "ProductDetails",
        components: {Header},
        data(){
            return {
                detailsData : {},
            }
        },
        watch : {
            "$route.params" : function (oldVal, newVal) {
                this.getProductDetails();
            }
        },
        methods : {
            getProductDetails : function () {
                const _this = this;
                var url = _this.urlGenerate(`api/products/${_this.$route.params.product_id}`);
                _this.axios.get(url).then(response => {
                    _this.detailsData = response.data.result;
                }).catch(function (error) {
                    _this.$toastr('error', 'Whoops..!! something went wrong', 'Error');
                });
            }
        },
        mounted() {
            this.getProductDetails();
        }
    }
</script>

<style scoped>
    img {
        max-width: 100%; }

    .preview {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column; }
    @media screen and (max-width: 996px) {
        .preview {
            margin-bottom: 20px; } }

    .preview-pic {
        -webkit-box-flex: 1;
        -webkit-flex-grow: 1;
        -ms-flex-positive: 1;
        flex-grow: 1; }
    .preview-thumbnail.nav-tabs li {
        width: 18%;
        margin-right: 2.5%; }
    .preview-thumbnail.nav-tabs li img {
        max-width: 100%;
        display: block; }
    .preview-thumbnail.nav-tabs li a {
        padding: 0;
        margin: 0; }
    .preview-thumbnail.nav-tabs li:last-of-type {
        margin-right: 0; }

    .tab-content {
        overflow: hidden; }
    .tab-content img {
        width: 100%;
        -webkit-animation-name: opacity;
        animation-name: opacity;
        -webkit-animation-duration: .3s;
        animation-duration: .3s; }

    .details {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column; }

    .product-title, .price, .sizes, .colors {
        text-transform: UPPERCASE;
        font-weight: bold; }

    .checked, .price span {
        color: #ff9f1a; }

    .product-title, .rating, .product-description, .price, .vote, .sizes {
        margin-bottom: 15px; }

    .product-title {
        margin-top: 0; }

    .add-to-cart, .like {
        background: #ff9f1a;
        padding: 1.2em 1.5em;
        border: none;
        text-transform: UPPERCASE;
        font-weight: bold;
        color: #fff;
        -webkit-transition: background .3s ease;
        transition: background .3s ease; }
    .add-to-cart:hover, .like:hover {
        background: #b36800;
        color: #fff; }

    @-webkit-keyframes opacity {
        0% {
            opacity: 0;
            -webkit-transform: scale(3);
            transform: scale(3); }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1); } }

    @keyframes opacity {
        0% {
            opacity: 0;
            -webkit-transform: scale(3);
            transform: scale(3); }
        100% {
            opacity: 1;
            -webkit-transform: scale(1);
            transform: scale(1); } }
</style>
