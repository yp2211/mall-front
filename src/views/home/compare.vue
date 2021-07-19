<template>
    <div class="breadcrumb-area section-padding-1 breadcrumb-ptb-1">
        <div class="container-fluid">
            <div class="breadcrumb-content text-center">
                <h2>Compare</h2>
            </div>
        </div>
    </div>
    <div class="compare-page-wrapper pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <!-- Compare Page Content Start -->
                    <div class="compare-page-content-wrap">
                        <div class="compare-table table-responsive">
                            <table class="table table-bordered mb-0">
                                <tbody>
                                    <tr>
                                        <td class="first-column">Product</td>
                                        <td class="product-image-title" v-for="(item, index) in products" :key="index">
                                            <a :href="`/product/${item.pid}`" class="image">
                                                <img class="img-fluid" :src="`${item.imgsPreview.default.small}`" alt="Compare Product">
                                            </a>
                                            <a href="#" class="category">{{item.tags}}</a>
                                            <a :href="`/product/${item.pid}`" class="title">{{item.title}}</a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Description</td>
                                        <td class="pro-desc" v-for="(item, index) in products" :key="index">
                                            <p>{{item.summary}}</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Price</td>
                                        <td class="pro-price" v-for="(item, index) in products" :key="index">{{item.priceSell}}</td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Color</td>
                                        <td class="pro-color" v-for="(item, index) in products" :key="index">{{item.tags[0]}}</td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Stock</td>
                                        <td class="pro-stock" v-for="(item, index) in products" :key="index">{{item.stock > 0 ? "In Stock" : "Stock Out"}}</td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Add to cart</td>
                                        <td v-for="(item, index) in products" :key="index"><a href="cart" class="check-btn" :class="{'disabled' : (item.stock <= 0)}">Add to Cart</a></td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Rating</td>
                                        <td class="pro-ratting" v-for="(item, index) in products" :key="index">
                                            <review-stars :stars="2"></review-stars>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="first-column">Remove</td>
                                        <td class="pro-remove" v-for="(item, index) in products" :key="index">
                                            <button v-on:click="delItem(item.pid)"><i class="ion-ios-trash-outline"></i></button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Compare Page Content End -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import DataStructures from "../../components/DataStructures"
import {getCompareList} from "../../api/product"
import ReviewStars from "../../components/ReviewStars.vue"

export default {
    name: "compare",
    data() {
        return {
            products: [DataStructures.data.product]
        }
    },
    components: {
        ReviewStars
    },
    mounted() {
        getCompareList(0).then(response => {
            console.log(response.data);
            this.products = response.data;
        }).catch(function (err) {
            console.error(err);
        });
    },
    methods: {
        delItem(pid) {
            console.log("delete product" + pid + "from compare list");
        }
    }
}
</script>