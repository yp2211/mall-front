<template>
    <div class="sidebar-cart-active" :class="{inside:toggle}">
        <div class="sidebar-cart-all">
            <a class="cart-close" href="#" v-on:click="close"><i class="icon_close"></i> Close </a>
            <div class="cart-content">
                <h3>Cart</h3>
                <ul>
                    <li class="single-product-cart" v-for="(item, index) in items" :key="index">
                        <div class="cart-img">
                            <a :href="`/product/${item.productId}`"><img :src="item.productPic" alt=""></a>
                        </div>
                        <div class="cart-title">
                            <h4><a href="`/product/${item.productId}`">{{item.productName}}</a></h4>
                            <span> {{item.quantity}} × ${{item.price}}	</span>
                        </div>
                        <div class="cart-delete">
                            <a href="#" v-on:click="cartDelete"><i class="icon_close"></i></a>
                        </div>
                    </li>
                </ul>
                <div class="cart-total">
                    <h4>Subtotal: <span>${{subtotal}}</span></h4>
                </div>
                <div class="cart-checkout-btn">
                    <a class="cart" href="/cart">view cart <i class="ion-ios-arrow-right"></i></a>
                    <a class="checkout" href="checkout">checkout <i class="ion-ios-arrow-right"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getCartList } from '../api/cart'

export default {
    name: "MiniCart",
    props: {
        toggle: { type: Boolean, require: true }
    },
    data() {
        return {
            items: [],
            user: {}
        }
    },
    computed: {
        subtotal() {
            return 69;
        }
    },
    setup() {
    },
    methods: {
        initCart() {
            getCartList()
            .then(response => {
                this.items = response.data;
            })
            .catch(function(error) {
                console.log(error);
            });
        },
        cartDelete() {

        },
        close() {
            this.$emit('dismiss');
        },
    },
    watch: {
        user: 'initCart'
    },
    mounted() {
        this.initCart();
    }
}
</script>