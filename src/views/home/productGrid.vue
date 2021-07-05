<template>
    <div class="shop-area section-padding-7 bg-gray-8 pt-115 pb-70">
        <div class="container-fluid">
            <div class="isotope-menu-2 isotope-menu-style-1 isotope-menu-active mb-50">
                <button class="active" data-filter="*">ALL</button>
                <button data-filter=".cat1">T-Shirt's Collection </button>
                <button data-filter=".cat2">Bags</button>
                <button data-filter=".cat3">Hats </button>
                <button data-filter=".cat4">Shaving </button>
            </div>
            <div class="row grid-2">
                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 grid-item-2" :class="`cat${index%4 + 1}`" v-for="(item, index) in products" :key="index">
                    <div class="product-wrap product-wrap-modify mb-50">
                        <div class="product-img mb-20">
                            <a :href="`/product-details/${item.id}`">
                                <img class="default-img" :src="item.imgsPreview.default.large" alt="">
                                <img class="hover-img" :src="item.imgsPreview.hover.large" alt="">
                            </a>
                        </div>
                        <div class="product-content">
                            <h3><a :href="`/product-details/${item.id}`">{{item.title}}</a></h3>
                            <div class="product-price-2 product-price-2-left">
                                <span>{{item.priceSell}}</span>
                            </div>
                            <div class="product-action-6-wrap">
                                <div class="product-action-6-left">
                                    <button aria-label="Add To Cart"><i class="ion-ios-plus-empty"></i> Add to cart </button>
                                </div>
                                <div class="product-action-6-right tooltip-style">
                                    <button aria-label="Quick View" data-bs-toggle="modal" data-bs-target="#exampleModal" v-on:click="setPreviewIndex(index)"><i class="ion-arrow-expand"></i></button>
                                    <button aria-label="Add To Wishlist"><i class="ion-ios-heart"></i></button>
                                    <button aria-label="Compare"><i class="ion-stats-bars"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>       
            </div>
        </div>
    </div>
    <preview-product :product="previewProduct" />
</template>

<script>
import DataStructures from '../../components/DataStructures'
import {getProducts} from '../../api/product'
import PreviewProduct from '../../components/PreviewProduct.vue'
import '../../assets/themes/bag/js/plugins/images-loaded.js'
import '../../assets/themes/bag/js/plugins/isotope.js'

export default {
    name: "productGrid",
    data() {
        return {
            products: [DataStructures.data.product],
            previewProduct: DataStructures.data.product
        }
    },
    components: {
        PreviewProduct
    },
    mounted() {
        getProducts()
        .then(response => {
            this.products = response.data;
        })
        .catch(function(error) {
            console.log(error);
        });
    },
    methods: {
        onProductsChanged() {
            // this.$nextTick(() => {
                // filter items on button click
            $('.grid-2').imagesLoaded(function() {
                $('.isotope-menu-2').on( 'click', 'button', function() {
                    var filterValue = $(this).attr('data-filter');
                    $gridTwo.isotope({ filter: filterValue });
                });	
                // init Isotope
                var $gridTwo = $('.grid-2').isotope({
                    itemSelector: '.grid-item-2',
                    percentPosition: true,
                    layoutMode: 'fitRows',
                    masonry: {
                        // use outer width of grid-sizer for columnWidth
                        columnWidth: '.grid-item-2',
                    }
                });
            });
        },
        setPreviewIndex(index) {
            this.previewProduct = this.products[index];
        }
    },
    watch: {
        products: 'onProductsChanged'
    },    
}
</script>