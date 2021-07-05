<template>
    <div class="sidebar-widget-title mb-25">
        <h3>Recent Products </h3>
    </div>
    <div class="sidebar-product-wrap">
        <div class="single-sidebar-product" v-for="(item, index) in products" :key="index">
            <div class="sidebar-product-img">
                <a :href="`/product-details/${item.id}`"><img :src="item.imgsPreview.default.thumb" alt=""></a>
            </div>
            <div class="sidebar-product-content">
                <h4><a :href="`/product-details/${item.id}`">{{item.title}}</a></h4>
                <span> {{item.priceSell}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {getRecentProducts} from "../api/product";
import DataStructures from '../components/DataStructures';

export default {
    name: "RecentProducts",
    data() {
        return {
            products: [DataStructures.data.product]
        }
    },
    setup() {

    },
    mounted() {
        getRecentProducts()
        .then(response => {
            this.products = response.data;
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }
}
</script>