<template>
    <div class="breadcrumb-area breadcrumb-ptb-3">
        <div class="container">
            <div class="breadcrumb-content-2 breadcrumb-content-2-center text-center">
                <h2>Checkout</h2>
                <ul>
                    <li><a href="/index">Home</a></li>
                    <li>Checkout</li>
                </ul>
            </div>
        </div>
    </div>
    <div class="checkout-area pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-7">
                    <div class="customer-zone mb-45">
                        <p class="cart-page-title">Returning customer? <a class="checkout-click1" href="#" v-on:click="onShowLoginClick">Click here to login</a></p>
                        <div class="checkout-login-info">
                            <p>If you have shopped with us before, please enter your details in the boxes below. If you are a new customer, please proceed to the Billing & Shipping section.</p>
                            <form action="#">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="sin-checkout-login">
                                            <label> Username or email <span>*</span></label>
                                            <input type="text" name="user-name" placeholder="user name">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="sin-checkout-login">
                                            <label>Passwords <span>*</span></label>
                                            <input type="password" name="user-password" placeholder="password" >
                                        </div>
                                    </div>
                                </div>
                                <div class="checkout-remember checkout-checkbox-style">
                                    <input type="checkbox">
                                    <p>Remember Me</p>
                                    <span class="checkmark"></span>
                                </div>
                                <div class="checkout-login-btn">
                                    <button class="button" type="submit">Login</button>
                                </div>
                                <div class="lost-password">
                                    <a href="#">Lost your password?</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5">
                    <div class="customer-zone mb-45">
                        <p class="cart-page-title">Have a coupon? <a class="checkout-click3" href="#" v-on:click="onShowCodeClick">Click here to enter your code</a></p>
                        <div class="checkout-login-info3">
                            <form action="#">
                                <input type="text" placeholder="Coupon code">
                                <input type="submit" value="Apply Coupon">
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="checkout-wrap pt-30">
                <div class="row">
                    <div class="col-lg-7">
                        <div class="billing-info-wrap">
                            <h3>Billing details</h3>
                            <div class="row">
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>First Name <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Last Name <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Company name (optional)</label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-select mb-20">
                                        <label>Country <span>*</span></label>
                                        <select>
                                            <option>Select a country</option>
                                            <option>Azerbaijan</option>
                                            <option>Bahamas</option>
                                            <option>Bahrain</option>
                                            <option>Bangladesh</option>
                                            <option>Barbados</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Street Address <span>*</span></label>
                                        <input class="billing-address" placeholder="House number and street name" type="text">
                                        <input placeholder="Apartment, suite, unit etc." type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Town / City <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>State / County <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Postcode / ZIP <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Phone <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="billing-info mb-20">
                                        <label>Email Address <span>*</span></label>
                                        <input type="text">
                                    </div>
                                </div>
                            </div>
                            <div class="checkout-account checkout-checkbox-style-2 mb-25">
                                <input class="checkout-toggle2" type="checkbox" v-on:click="onCreatAccountClick">
                                <p>Create an account?</p>
                                <span class="checkmark"></span>
                            </div>
                            <div class="checkout-account-toggle-wrap open-toggle2 mb-30">
                                <div class="checkout-account-toggle billing-info">
                                    <label>Account username <span>*</span></label>
                                    <input placeholder="Username" type="text">
                                </div>
                                <div class="checkout-account-toggle billing-info">
                                    <label>Create account password <span>*</span></label>
                                    <input placeholder="Password" type="password">
                                </div>
                            </div>
                            <div class="checkout-account checkout-checkbox-style-2 mt-25">
                                <input class="checkout-toggle" type="checkbox" v-on:click="onShipDiffClick">
                                <p>Ship to a different address?</p>
                                <span class="checkmark"></span>
                            </div>
                            <div class="different-address open-toggle mt-30">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>First Name</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Last Name</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Company Name</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-select mb-20">
                                            <label>Country</label>
                                            <select>
                                                <option>Select a country</option>
                                                <option>Azerbaijan</option>
                                                <option>Bahamas</option>
                                                <option>Bahrain</option>
                                                <option>Bangladesh</option>
                                                <option>Barbados</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Street Address</label>
                                            <input class="billing-address" placeholder="House number and street name" type="text">
                                            <input placeholder="Apartment, suite, unit etc." type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Town / City</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>State / County</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Postcode / ZIP</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Phone</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="billing-info mb-20">
                                            <label>Email Address</label>
                                            <input type="text">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="additional-info-wrap">
                                <label>Order notes (optional)</label>
                                <textarea placeholder="Notes about your order, e.g. special notes for delivery." name="message"></textarea>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="your-order-area">
                            <h3>Your order</h3>
                            <div class="your-order-wrap">
                                <div class="your-order-info-wrap">
                                    <div class="your-order-title">
                                        <ul>
                                            <li>Product <span>Total</span></li>
                                        </ul>
                                    </div>
                                    <div class="your-order-product">
                                        <ul>
                                            <li>Product Name X 1 <span>$329 </span></li>
                                            <li>Product Name X 1 <span>$329 </span></li>
                                        </ul>
                                    </div>
                                    <div class="your-order-subtotal">
                                        <ul>
                                            <li>Subtotal <span>$329 </span></li>
                                        </ul>
                                    </div>
                                    <div class="your-order-total">
                                        <ul>
                                            <li>Total <span>$273.00 </span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="payment-method">
                                    <div class="pay-top sin-payment">
                                        <input id="payment_method_1" class="input-radio" type="radio" value="cheque" checked="checked" name="payment_method">
                                        <label for="payment_method_1"> Direct Bank Transfer </label>
                                        <div class="payment-box payment_method_bacs">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                        </div>
                                    </div>
                                    <div class="pay-top sin-payment">
                                        <input id="payment-method-2" class="input-radio" type="radio" value="cheque" name="payment_method">
                                        <label for="payment-method-2">Check payments</label>
                                        <div class="payment-box payment_method_bacs">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                        </div>
                                    </div>
                                    <div class="pay-top sin-payment">
                                        <input id="payment-method-3" class="input-radio" type="radio" value="cheque" name="payment_method">
                                        <label for="payment-method-3">Cash on delivery </label>
                                        <div class="payment-box payment_method_bacs">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                        </div>
                                    </div>
                                    <div class="pay-top sin-payment sin-payment-3">
                                        <input id="payment-method-4" class="input-radio" type="radio" value="cheque" name="payment_method">
                                        <label for="payment-method-4">PayPal</label>
                                        <div class="payment-box payment_method_bacs">
                                            <p>Make your payment directly into our bank account. Please use your Order ID as the payment reference.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="order-conditions checkout-checkbox-style">
                                <input type="checkbox">
                                <p>I’ve read and accept the <a href="#">terms & conditions *</a></p>
                                <span class="checkmark"></span>
                            </div>
                            <div class="Place-order">
                                <a href="#">Place Order</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Checkout",
    data() {
        return {
            
        }
    },
    methods: {
        onShowLoginClick(e) {
            e.preventDefault();
            $('.checkout-login-info').slideToggle(900);
        },
        onShowCodeClick(e) {
            e.preventDefault();
            $('.checkout-login-info3').slideToggle(1000);
        },
        onCreatAccountClick(){
            $('.open-toggle2').slideToggle(1000);
        },
        onShipDiffClick() {
            $('.open-toggle').slideToggle(1000);
        }
    },
    mounted() {
        var checked = $( '.sin-payment input:checked' )
        if(checked){
            $(checked).siblings( '.payment-box' ).slideDown(900);
        };
        $( '.sin-payment input' ).on('change', function() {
            $( '.payment-box' ).slideUp(900);
            $(this).siblings( '.payment-box' ).slideToggle(900);
        });
    }
}

</script>