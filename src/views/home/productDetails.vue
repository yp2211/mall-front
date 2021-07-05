<template>
    <div class="product-details-area section-padding-1 pt-115 pb-115">
        <div class="container">
            <div class="row">
                <div class="col-lg-9">
                    <div class="row">
                        <div class="col-lg-5">
                            <div class="product-details-img-wrap product-details-img-mrg">
                                <div class="swiper-container product-details-big-img-slider-2 product-details-big-img-style">
                                   <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="(img, index) in product.imgs" v-bind:key="index">
                                            <div class="easyzoom-style">
                                                <div class="easyzoom easyzoom--overlay">
                                                    <a :href="img.large">
                                                        <img :src="img.small" alt="">
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-details-next product-details-nav-style"> <i class="arrow_carrot-right"></i></div>
                                    <div class="product-details-prev product-details-nav-style"> <i class="arrow_carrot-left"></i></div>
                                </div>
                                <div class="swiper-container product-details-small-img-slider product-details-small-img-slider-style">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide" v-for="(img, index) in product.imgs" v-bind:key="index">
                                            <div class="product-details-small-img">
                                                <img :src="img.thumb" alt="Product Thumnail">
                                            </div>                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7">
                            <div class="product-details-content">
                                <div class="pd-content-next-prev">
                                    <div class="pd-content-next pd-content-icon">
                                        <a href="#"><i class="ion-ios-arrow-back"></i></a>
                                    </div>
                                    <div class="pd-content-prev pd-content-icon">
                                        <a href="#"><i class="ion-ios-arrow-forward"></i></a>
                                    </div>
                                </div>
                                <h2>{{ product.title }}</h2>
                                <div class="product-details-review-wrap">
                                    <div class="product-details-review">
                                        <div class="product-rating">
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star gray"></i>
                                        </div>
                                        <span>{{product.reviews.length}} reviews</span>
                                    </div>
                                    <div class="write-review">
                                        <a href="#">Write your review</a>
                                    </div>
                                </div>
                                <div class="product-details-price">
                                    <span class="old-price">${{product.price}}</span>
                                    <span class="new-price">${{product.priceSell}}</span>
                                </div>
                                <p v-html="product.summary"></p>
                                <div class="product-stock">
                                    <p>Availability: 
                                        <span v-if="product.stock>0">{{product.stock}} in stock</span>
                                        <span v-else>out of stock</span>
                                    </p>
                                </div>
                                <div class="product-details-quality-cart product-details-content-border">
                                    <div class="product-quality">
                                        <input class="cart-plus-minus-box input-text qty text" name="qtybutton" value="1">
                                    </div>
                                    <div class="product-details-cart">
                                        <a href="#"><i class="ion-plus"></i> Add to cart</a>
                                    </div>
                                    <div class="product-details-wishlist">
                                        <a href="#"><i class="ion-ios-heart"></i></a>
                                    </div>
                                </div>
                                <div class="product-details-meta">
                                    <ul>
                                        <li><span class="title">SKU:</span> {{product.skuId}}</li>
                                        <li><span class="title">Category:</span> <a href="#">{{product.category}}</a></li>
                                        <li><span class="title">Tags:</span>
                                            <ul class="tag">
                                                <li v-for="(item, index) in product.tags" v-bind:key="index"><a :href="`/shop?tag=`+item">{{item}}</a>,</li>
                                            </ul>
                                        </li>
                                        <li><span class="title">Share:</span>
                                            <ul class="social">
                                                <li><a href="#"><i class="ion-social-twitter"></i></a></li>
                                                <li><a href="#"><i class="ion-social-facebook"></i></a></li>
                                                <li><a href="#"><i class="ion-social-googleplus"></i></a></li>
                                                <li><a href="#"><i class="ion-social-pinterest"></i></a></li>
                                                <li><a href="#"><i class="ion-social-linkedin"></i></a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="description-review-area pt-115">
                        <div class="description-review-topbar nav">
                            <a class="active" data-bs-toggle="tab" href="#des-details1"> Description </a>
                            <a data-bs-toggle="tab" href="#des-details2"> Additional information </a>
                            <a data-bs-toggle="tab" href="#des-details3"> Reviews ({{product.reviews.length}}) </a>
                        </div>
                        <div class="tab-content">
                            <div id="des-details1" class="tab-pane active">
                                <div class="product-description-content" v-html="product.description"></div>
                            </div>
                            <div id="des-details2" class="tab-pane">
                                <div class="additional-information-content" v-html="product.additionalInfomation?product.additionalInfomation.join('\n'):''"></div>
                            </div>
                            <div id="des-details3" class="tab-pane">
                                <div class="ratting-form-wrapper">
                                    <h4>{{product.reviews.length}} reviews for {{product.title}}</h4>
                                    <div class="review-wrapper">
                                        <div v-for="(item, index) in product.reviews" v-bind:key="index" class="single-review">
                                            <div class="review-img">
                                                <img :src="item.img" alt="">
                                            </div>
                                            <div class="review-content-wrap">
                                                <div class="client-name-rating">
                                                    <div class="client-name">
                                                        <p>{{item.name}} <span>- {{item.date}}</span></p>
                                                    </div>
                                                    <div class="client-rating">
                                                        <i class="ion-android-star" :class="{'gray' :item.stars <= 0}"></i>
                                                        <i class="ion-android-star" :class="{'gray' :item.stars <= 1}"></i>
                                                        <i class="ion-android-star" :class="{'gray' :item.stars <= 2}"></i>
                                                        <i class="ion-android-star" :class="{'gray' :item.stars <= 3}"></i>
                                                        <i class="ion-android-star" :class="{'gray' :item.stars <= 4}"></i>
                                                    </div>
                                                </div>
                                                <p v-html="item.content"></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ratting-form">
                                        <h4> Add a review </h4>
                                        <h5>Your rating</h5>
                                        <div class="client-rating">
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star"></i>
                                            <i class="ion-android-star gray"></i>
                                        </div>
                                        <form action="#">
                                            <div class="row">
                                                <div class="col-12">
                                                    <div class="rating-form-style mb-30">
                                                        <label>Your review *</label>
                                                        <textarea></textarea>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="rating-form-style mb-30">
                                                        <label>Name *</label>
                                                        <input type="text">
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <div class="rating-form-style mb-30">
                                                        <label>Email *</label>
                                                        <input type="email">
                                                    </div>
                                                </div>
                                                <div class="col-12">
                                                    <div class="form-submit">
                                                        <input type="submit" value="Submit">
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="sidebar-wrapper sidebar-wrapper-margin-none">
                        <div class="sidebar-widget mb-50">
                            <div class="sidebar-widget-img">
                                <img src="../../assets/themes/bag/images/product-details/pro-details-sidebar-img.png" alt="">
                            </div>
                        </div>
                        <div class="sidebar-widget mb-45">
                            <div class="sidebar-widget-info-wrap">
                                <div class="sidebar-widget-info-icon">
                                    <i class="icon_pin_alt"></i>
                                </div>
                                <div class="sidebar-widget-info-content">
                                    <p>We commit will send this product in 2 days.</p>
                                </div>
                            </div>
                            <div class="sidebar-widget-info-wrap">
                                <div class="sidebar-widget-info-icon">
                                    <i class="icon_phone"></i>
                                </div>
                                <div class="sidebar-widget-info-content">
                                    <p>Call us now for more info about our products</p>
                                </div>
                            </div>
                            <div class="sidebar-widget-info-wrap">
                                <div class="sidebar-widget-info-icon">
                                    <i class="arrow_back"></i>
                                </div>
                                <div class="sidebar-widget-info-content">
                                    <p>Return purchased items and get all your money back.</p>
                                </div>
                            </div>
                            <div class="sidebar-widget-info-wrap">
                                <div class="sidebar-widget-info-icon">
                                    <i class="icon_star_alt"></i>
                                </div>
                                <div class="sidebar-widget-info-content">
                                    <p>Buy this product and earn 10 special loyalty points!</p>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-widget">
                            <div class="sidebar-widget-title mb-25">
                                <h3>Recent Products </h3>
                            </div>
                            <div class="sidebar-product-wrap">
                                <div class="single-sidebar-product">
                                    <div class="sidebar-product-img">
                                        <a href="product-details.html"><img src="../../assets/themes/bag/images/product/shop-sidebar-1.jpg" alt=""></a>
                                    </div>
                                    <div class="sidebar-product-content">
                                        <h4><a href="product-details.html">Longline T-Shirt In Lined Fabric</a></h4>
                                        <span> $31.00 – $34.00</span>
                                    </div>
                                </div>
                                <div class="single-sidebar-product">
                                    <div class="sidebar-product-img">
                                        <a href="product-details.html"><img src="../../assets/themes/bag/images/product/shop-sidebar-2.jpg" alt=""></a>
                                    </div>
                                    <div class="sidebar-product-content">
                                        <h4><a href="product-details.html"> T-shirt International</a></h4>
                                        <span> $35.00 – $37.00</span>
                                    </div>
                                </div>
                                <div class="single-sidebar-product">
                                    <div class="sidebar-product-img">
                                        <a href="product-details.html"><img src="../../assets/themes/bag/images/product/shop-sidebar-3.jpg" alt=""></a>
                                    </div>
                                    <div class="sidebar-product-content">
                                        <h4><a href="product-details.html">Satchel In Grey Dawson Backpack</a></h4>
                                        <span> $40.00 – $42.00</span>
                                    </div>
                                </div>
                                <div class="single-sidebar-product">
                                    <div class="sidebar-product-img">
                                        <a href="product-details.html"><img src="../../assets/themes/bag/images/product/shop-sidebar-4.jpg" alt=""></a>
                                    </div>
                                    <div class="sidebar-product-content">
                                        <h4><a href="product-details.html">Nike Heritage Herschel backpack</a></h4>
                                        <span> $43.00 – $45.00</span>
                                    </div>
                                </div>
                                <div class="single-sidebar-product">
                                    <div class="sidebar-product-img">
                                        <a href="product-details.html"><img src="../../assets/themes/bag/images/product/shop-sidebar-5.jpg" alt=""></a>
                                    </div>
                                    <div class="sidebar-product-content">
                                        <h4><a href="product-details.html">Set Supreme Cap</a></h4>
                                        <span> $52.00 – $55.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-area pb-115">
        <div class="container">
            <div class="section-title-12 text-center mb-55">
                <h2>Related products</h2>
            </div>
            <div class="relative-product-active swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <div class="product-wrap">
                            <div class="product-img mb-20">
                                <a href="/product-details">
                                    <img class="default-img" src="../../assets/themes/bag/images/product/product-2.jpg" alt="">
                                    <img class="hover-img" src="../../assets/themes/bag/images/product/product-2-1.jpg" alt="">
                                </a>
                                <div class="product-action-wrap">
                                    <div class="product-action-left">
                                        <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                    </div>
                                    <div class="product-action-right tooltip-style">
                                        <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-ios-eye-outline"></i></button>
                                        <button aria-label="Add To Wishlist"><i class="ion-ios-heart-outline"></i></button>
                                        <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <div class="product-rating">
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star gray"></i>
                                </div>
                                <h3><a href="product-details.html">Satchel In Washed Navy Canvas</a></h3>
                                <div class="product-price">
                                    <span class="old-price">$24.00</span>
                                    <span class="new-price">$12.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-wrap">
                            <div class="product-img mb-20">
                                <a href="product-details.html">
                                    <img class="default-img" src="../../assets/themes/bag/images/product/product-3.jpg" alt="">
                                    <img class="hover-img" src="../../assets/themes/bag/images/product/product-3-1.jpg" alt="">
                                </a>
                                <div class="product-action-wrap">
                                    <div class="product-action-left">
                                        <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                    </div>
                                    <div class="product-action-right tooltip-style">
                                        <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-ios-eye-outline"></i></button>
                                        <button aria-label="Add To Wishlist"><i class="ion-ios-heart-outline"></i></button>
                                        <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <div class="product-rating">
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star gray"></i>
                                </div>
                                <h3><a href="product-details.html">The North Face T-Shirt</a></h3>
                                <div class="product-price">
                                    <span>$30.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-wrap">
                            <div class="product-img mb-20">
                                <a href="product-details.html">
                                    <img class="default-img" src="../../assets/themes/bag/images/product/product-4.jpg" alt="">
                                    <img class="hover-img" src="../../assets/themes/bag/images/product/product-4-1.jpg" alt="">
                                </a>
                                <div class="product-action-wrap">
                                    <div class="product-action-left">
                                        <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                    </div>
                                    <div class="product-action-right tooltip-style">
                                        <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-ios-eye-outline"></i></button>
                                        <button aria-label="Add To Wishlist"><i class="ion-ios-heart-outline"></i></button>
                                        <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <div class="product-rating">
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star gray"></i>
                                </div>
                                <h3><a href="product-details.html">Longline T-Shirt In Lined Fabric</a></h3>
                                <div class="product-price">
                                    <span>$31.00 - $34.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-wrap">
                            <div class="product-img mb-20">
                                <a href="product-details.html">
                                    <img class="default-img" src="../../assets/themes/bag/images/product/product-6.jpg" alt="">
                                    <img class="hover-img" src="../../assets/themes/bag/images/product/product-6-1.jpg" alt="">
                                </a>
                                <div class="product-action-wrap">
                                    <div class="product-action-left">
                                        <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                    </div>
                                    <div class="product-action-right tooltip-style">
                                        <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-ios-eye-outline"></i></button>
                                        <button aria-label="Add To Wishlist"><i class="ion-ios-heart-outline"></i></button>
                                        <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <div class="product-rating">
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star gray"></i>
                                </div>
                                <h3><a href="product-details.html">Patagonia Wavefarer Bucket Hat</a></h3>
                                <div class="product-price">
                                    <span>$39.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-wrap">
                            <div class="product-img mb-20">
                                <a href="product-details.html">
                                    <img class="default-img" src="../../assets/themes/bag/images/product/product-5.jpg" alt="">
                                    <img class="hover-img" src="../../assets/themes/bag/images/product/product-5-1.jpg" alt="">
                                </a>
                                <div class="product-action-wrap">
                                    <div class="product-action-left">
                                        <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                    </div>
                                    <div class="product-action-right tooltip-style">
                                        <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-ios-eye-outline"></i></button>
                                        <button aria-label="Add To Wishlist"><i class="ion-ios-heart-outline"></i></button>
                                        <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <div class="product-rating">
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star gray"></i>
                                </div>
                                <h3><a href="product-details.html">Leather The Quartz Watch</a></h3>
                                <div class="product-price">
                                    <span>$34.00 - $64.00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide">
                        <div class="product-wrap">
                            <div class="product-img mb-20">
                                <a href="product-details.html">
                                    <img class="default-img" src="../../assets/themes/bag/images/product/product-6.jpg" alt="">
                                    <img class="hover-img" src="../../assets/themes/bag/images/product/product-6-1.jpg" alt="">
                                </a>
                                <div class="product-action-wrap">
                                    <div class="product-action-left">
                                        <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                    </div>
                                    <div class="product-action-right tooltip-style">
                                        <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="ion-ios-eye-outline"></i></button>
                                        <button aria-label="Add To Wishlist"><i class="ion-ios-heart-outline"></i></button>
                                        <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                    </div>
                                </div>
                            </div>
                            <div class="product-content text-center">
                                <div class="product-rating">
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star"></i>
                                    <i class="ion-android-star gray"></i>
                                </div>
                                <h3><a href="/product-details">Patagonia Wavefarer Bucket Hat</a></h3>
                                <div class="product-price">
                                    <span>$39.00</span>
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
console.log("productDetails.498");
import {getProductDetail,getRelatedProducts} from "../../api/product";
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
  Thumbs,
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation,Thumbs]);

export default {
    name: "productDetails",
    data() {
        return {
            id: "0",
            product: {
                "id": "0",
                "title": "",
                "summary": "",
                "skuId": "",
                "category": "",
                "tags": [],
                "price": "0.00",
                "priceSell": "0.00",
                "stock": 0,
                "reviews": [],
                "description": "",
                "imgs": []
            },
            relativeProducts: [{
                "id": "0",
                "title": "",
                "summary": "",
                "skuId": "",
                "category": "",
                "tags": [],
                "price": "0.00",
                "priceSell": "0.00",
                "stock": 0,
                "reviews": [],
                "description": "",
                "imgs": [],
                "imgsPreview": {
                    "default": {
                        "large": "",
                        "small": "",
                        "thumb": ""
                    },
                    "hover": {
                        "large": "",
                        "small": "",
                        "thumb": ""
                    }
                }
            }]
        }
    },
    beforeCreate() {
        getProductDetail(this.id)
        .then(response => {
            this.product = response.data;
        })
        .catch(function (error) {
            console.log(error);
        }); 


        getRelatedProducts(this.id)
        .then(response => {
            this.relativeProducts = response.data;
        })
        .catch(function (error) {
            console.log(error);
        }); 
    },
    mounted() {
        console.log("mounted");
    },
    methods: {
        onProductChanged() {
            console.log("onProductChanged");
            
            this.$nextTick(() => {              
                var productDetailsSmall = new Swiper('.product-details-small-img-slider', {
                    loop: false,
                    spaceBetween: 15,
                    slidesPerView: 4,
                    breakpoints: {
                        0: {
                            slidesPerView: 3,
                        },
                        576: {
                            slidesPerView: 4,
                        },
                    }
                });

                var productDetailsBigTwo = new Swiper('.product-details-big-img-slider-2', {
                    autoplay: false,
                    delay: 5000,
                    slidesPerView: 1,
                    loop: false,
                    navigation: {
                        nextEl: '.product-details-next',
                        prevEl: '.product-details-prev',
                    },
                    thumbs: {
                        swiper: productDetailsSmall
                    }
                });

                var $easyzoom = $('.easyzoom').easyZoom();
            });
        },
        onRelativeProductChanged() {
            this.$nextTick(() => {
                // Related products
                var relativeProductActive = new Swiper(".relative-product-active", {
                    slidesPerView: 3,
                    spaceBetween: 30,
                    loop: true,
                    breakpoints: {
                        320: {
                            slidesPerView: 1
                        },
                        479: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        576: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        768: {
                            slidesPerView: 2
                        },
                        992: {
                            slidesPerView: 3
                        },
                    },
                });
            });
        },
        hashTags: function(value, newValue) {
            // Replace hash tags with links
            return value.replace(/#(\S*)/g, newValue)
        }
    },
    watch: {
        product: 'onProductChanged', // 1
        relativeProducts: "onRelativeProductChanged",
    },
}
</script>