<template>
    <div class="breadcrumb-area section-padding-1 breadcrumb-ptb-1">
        <div class="container-fluid">
            <div class="breadcrumb-content text-center">
                <h2>Shopping Cart</h2>
            </div>
        </div>
    </div>
    <div class="cart-area pb-80">
        <div class="container">
            <div class="cart-title">
                <h2>Your cart items</h2>
            </div>
            <div class="row pb-120">
                <div class="col-12">
                    <form action="#">
                        <div class="cart-table-content">
                            <div class="table-content table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="width-thumbnail"></th>
                                            <th class="width-name">Product</th>
                                            <th class="width-price"> Price</th>
                                            <th class="width-quantity">Quantity</th>
                                            <th class="width-subtotal">Total</th>
                                            <th class="width-remove"></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/cart/cart-4.jpg" alt=""></a>
                                            </td>
                                            <td class="product-name">
                                                <h5><a href="product-details.html">Patagonia Wavefarer Bucket Hat</a></h5>
                                            </td>
                                            <td class="product-price"><span class="amount">$120.00</span></td>
                                            <td class="cart-quality">
                                                <input type="number" step="1" min="1" value="1" title="Qty">
                                            </td>
                                            <td class="product-total"><span>$120.00</span></td>
                                            <td class="product-remove"><a href="#">×</a></td>
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/cart/cart-5.jpg" alt=""></a>
                                            </td>
                                            <td class="product-name">
                                                <h5><a href="product-details.html">The North Face T-Shirt</a></h5>
                                            </td>
                                            <td class="product-price"><span class="amount">$120.00</span></td>
                                            <td class="cart-quality">
                                                <input type="number" step="1" min="1" value="1" title="Qty">
                                            </td>
                                            <td class="product-total"><span>$120.00</span></td>
                                            <td class="product-remove"><a href="#">×</a></td>
                                        </tr>
                                        <tr>
                                            <td class="product-thumbnail">
                                                <a href="product-details.html"><img src="assets/images/cart/cart-6.jpg" alt=""></a>
                                            </td>
                                            <td class="product-name">
                                                <h5><a href="product-details.html">Satchel In Washed Navy Canvas</a></h5>
                                            </td>
                                            <td class="product-price"><span class="amount">$120.00</span></td>
                                            <td class="cart-quality">
                                                <input type="number" step="1" min="1" value="1" title="Qty">
                                            </td>
                                            <td class="product-total"><span>$120.00</span></td>
                                            <td class="product-remove"><a href="#">×</a></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="cart-shiping-update-wrapper">
                                <div class="cart-shiping-btn">
                                    <a href="#">Update cart</a>
                                </div>
                                <div class="cart-shiping-btn">
                                    <a href="#">Continue Shopping</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="cart-calculate-discount-wrap calculate-discount-dropdown">
                        <h4><a class="coupon-active" href="#">Coupon discount</a> </h4>
                        <div class="calculate-discount-content">
                            <div class="input-style">
                                <input type="text" placeholder="Coupon code">
                            </div>
                            <div class="calculate-discount-btn">
                                <a href="#">Apply Coupon</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 mb-40">
                    <div class="cart-calculate-discount-wrap calculate-discount-dropdown-2">
                        <h4><a class="coupon-active-2" href="#">Calculate shipping</a> </h4>
                        <div class="calculate-discount-content">
                            <div class="select-style-3">
                                <select class="select-active">
                                    <option>Bangladesh</option>
                                    <option>Bahrain</option>
                                    <option>Azerbaijan</option>
                                    <option>Barbados</option>
                                    <option>Barbados</option>
                                </select>
                            </div>
                            <div class="select-style-3">
                                <select class="select-active">
                                    <option>State / County</option>
                                    <option>Bahrain</option>
                                    <option>Azerbaijan</option>
                                    <option>Barbados</option>
                                    <option>Barbados</option>
                                </select>
                            </div>
                            <div class="input-style">
                                <input type="text" placeholder="City">
                            </div>
                            <div class="input-style">
                                <input type="text" placeholder="Postcode / ZIP">
                            </div>
                            <div class="calculate-discount-btn">
                                <a href="#">Update</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 mb-40">
                    <div class="grand-total-wrap">
                        <div class="grand-total">
                            <h3>Subtotal <span>$76.00</span></h3>
                            <h2>Total <span>$76.00</span></h2>
                        </div>
                        <div class="grand-total-btn">
                            <a href="checkout.html"> Proceed to checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>