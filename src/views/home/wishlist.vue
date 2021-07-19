<template>
    <div class="breadcrumb-area section-padding-1 breadcrumb-ptb-1">
        <div class="container-fluid">
            <div class="breadcrumb-content text-center">
                <h2>Wishlist</h2>
            </div>
        </div>
    </div>
    <div class="wishlist-area pb-120">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form action="#">
                        <div class="wishlist-table-content">
                            <div class="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="width-remove"></th>
                                            <th class="width-thumbnail"></th>
                                            <th class="width-name">Product</th>
                                            <th class="width-price"> Unit price </th>
                                            <th class="width-stock-status"> Stock status </th>
                                            <th class="width-wishlist-cart"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item, index) in wishlist" :key="index">
                                            <td class="product-remove"><a href="#">×</a></td>
                                            <td class="product-thumbnail">
                                                <a :href="`/product-details/${item.id}`"><img :src="`${item.imgsPreview.default.thumb}`" alt=""></a>
                                            </td>
                                            <td class="product-name">
                                                <h5><a :href="`/product-details/${item.id}`">{{item.title}}</a></h5>
                                            </td>
                                            <td class="product-price"><span class="amount">{{item.priceSell}}</span></td>
                                            <td v-if="item.stock > 0" class="stock-status-in">
                                                <span > In Stock</span>
                                            </td>
                                            <td v-else class="stock-status-out">
                                                <span > Stock Out</span>
                                            </td>
                                            <td v-if="item.stock > 0" class="wishlist-cart">
                                                <a href="#"><i class="ion-ios-plus-empty"></i> Add to Cart</a>
                                            </td>
                                            <td v-else class="wishlist-cart wishlist-cart-disabled">
                                                <a href="#"><i class="ion-ios-plus-empty"></i> Add to Cart</a>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getWishList} from '../../api/product'
import DataStructures from '../../components/DataStructures'

export default({
    name: "wishlist",
    data() {
        return {
            wishlist: [DataStructures.data.product]
        }
    },
    mounted() {
        getWishList(0).then(response => {
            this.wishlist = response.data;
        }).catch(function (err) {
            console.error(err);
        })
    }
})
</script>
