<template>
    <!-- Product Modal start -->
    <div class="modal modal-style" id="exampleModal" tabindex="-1" role="dialog">
        <div class="modal-overlay">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <a href="#" class="close" data-bs-dismiss="modal" aria-label="Close"><i class="icon_close"></i></a>
                    </div>
                    <div class="modal-body">
                        <div class="row gx-0">
                            <div class="col-lg-5 col-md-5 col-12">
                                <div class="product-details-img-wrap">
                                    <div class="swiper-container product-details-big-img-slider product-details-big-img-style">
                                        <div class="swiper-wrapper">
                                            <div class="swiper-slide" v-for="(item, index) in product.imgs" :key="index">
                                                <div class="product-details-big-img">
                                                    <img :src="item.large" alt="">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="product-details-next product-details-nav-style"> <i class="arrow_carrot-right"></i></div>
                                        <div class="product-details-prev product-details-nav-style"> <i class="arrow_carrot-left"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-7 col-md-7 col-12">
                                <div class="product-details-content quickview-content">
                                    <h2>{{product.title}}</h2>
                                    <div class="product-details-review-wrap">
                                        <div class="product-details-review">
                                            <div class="product-rating">
                                                <review-stars :stars="product.stars" />
                                            </div>
                                            <span>{{product.reviews.length}} reviews</span>
                                        </div>
                                    </div>
                                    <div class="product-details-price">
                                        <span class="old-price">{{product.price}}</span>
                                        <span class="new-price">{{product.priceSell}}</span>
                                    </div>
                                    <p>{{product.summary}}</p>
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Product Modal end -->
</template>
<script>
import ReviewStars from './ReviewStars.vue';
import Swiper, {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Pagination,
  Navigation,
  Thumbs,
} from "swiper";
Swiper.use([Autoplay, EffectCoverflow, EffectCube, Pagination, Navigation,Thumbs]);
import '../assets/themes/bag/js/plugins/images-loaded.js'

export default {
  components: { ReviewStars },
    name: "PreviewProduct",
    // data() {
    //     return {
    //         product: DataStructures.data.product
    //     }
    // },
    props: {
        // id: {
        //     type: String,
        //     require: true
        // },
        product: {
            type: Object,
            require: false
        }
    },
    mounted() {
        // if (this.info === undefined) {
        //     getProductDetail(this.id)
        //     .then(response=> {
        //         this.product = response.data;
        //     })
        //     .catch(function (error) {
        //         console.log(error);
        //     }); 

        // } else {
        //     this.product = this.info;
        //     console.log("PreviewProduct.mounted.108");
        //     console.log(this.product);
        // }

    },
    methods: {
        onProductChanged() {
            $(".swiper-wrapper").imagesLoaded(function() {
            // this.$nextTick(() => {
                var productDetailsBig = new Swiper('.product-details-big-img-slider', {
                    autoplay: false,
                    delay: 5000,
                    slidesPerView: 1,
                    loop: false,
                    navigation: {
                        nextEl: '.product-details-next',
                        prevEl: '.product-details-prev',
                    },
                }); 
            });
        }
    },
    watch: {
        product: 'onProductChanged'
    },    
}
</script>