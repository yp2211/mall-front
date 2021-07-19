<template>
    <div class="order-tracking-area pt-115 pb-120">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 offset-lg-2">
                    <div class="order-tracking-content">
                        <div class="order-tracking-title text-center">
                            <h2>Track Your Order</h2>
                            <p class="width-100-percent">To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</p>
                        </div>
                        <form action="#">
                            <div class="sin-order-tracking">
                                <label>Order ID</label>
                                <input type="text" placeholder="Found in your order confirmation email.">
                            </div>
                            <div class="sin-order-tracking">
                                <label>Billing Email</label>
                                <input type="email" placeholder="Email you used during checkout">
                            </div>
                            <div class="order-track-btn">
                                <a href="#">Track</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>