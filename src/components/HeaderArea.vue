<template>
    <div class="body-overlay-2" v-on:click="onEndTriggerClick"></div>
    <header class="header-area header-padding-3 section-padding-5 header-height-1 sticky-bar" v-bind:class="[{ stick : isScrolled}]">
        <div class="header-large-device d-none d-lg-block">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-xl-4 col-lg-4">
                        <div class="header-menu-search-wrap">
                            <div class="clickable-menu-button-2">
                                <a class="clickable-mainmenu-active" href="#" v-on:click="onClickableMainmenuActiveClick">
                                    <span class="navbars-icon-2">
                                            <span class="custom-menu-style-2"></span>
                                    <span class="custom-menu-style-2"></span>
                                    <span class="custom-menu-style-2"></span>
                                    </span>
                                    Menu
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="logo logo-bag text-center">
                            <a href="index.html"><img src="../assets/themes/bag/images/logo/logo-black-4.png" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4">
                        <div class="header-shop-action-wrap">
                            <div class="header-action-wrap">
                                <div class="header-action-cart">
                                    <a class="black" href="#">
                                        <i class="ion-bag"></i>
                                        <span class="product-count bg-theme-color">01</span>
                                    </a>
                                    <div class="cart-dropdown-wrap">
                                        <div class="cart-content">
                                            <ul>
                                                <li class="single-product-cart">
                                                    <div class="cart-img">
                                                        <a href="product-details.html"><img src="../assets/themes/bag/images/cart/cart-1.jpg" alt=""></a>
                                                    </div>
                                                    <div class="cart-title">
                                                        <h4><a href="product-details.html">Obey T-shirt With Tiger Print</a></h4>
                                                        <span> 1 × $30.00	</span>
                                                    </div>
                                                    <div class="cart-delete">
                                                        <a href="#"><i class="icon_close"></i></a>
                                                    </div>
                                                </li>
                                                <li class="single-product-cart">
                                                    <div class="cart-img">
                                                        <a href="product-details.html"><img src="../assets/themes/bag/images/cart/cart-3.jpg" alt=""></a>
                                                    </div>
                                                    <div class="cart-title">
                                                        <h4><a href="product-details.html">The North Face T-Shirt</a></h4>
                                                        <span> 1 × $25.00	</span>
                                                    </div>
                                                    <div class="cart-delete">
                                                        <a href="#"><i class="icon_close"></i></a>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div class="cart-total">
                                                <h4>Subtotal: <span>$67.00</span></h4>
                                            </div>
                                            <div class="cart-checkout-btn">
                                                <a class="cart" href="cart.html">view cart <i class="ion-ios-arrow-right"></i></a>
                                                <a class="checkout" href="checkout.html">checkout <i class="ion-ios-arrow-right"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="header-action-login-2">
                                    <a data-bs-toggle="modal" data-bs-target="#loginActive" href="#"><i class="t-icon ion-person"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="header-small-device d-block d-lg-none">
            <div class="container-fluid">
                <div class="row align-items-center">
                    <div class="col-md-4 col-3">
                        <div class="logo logo-bag">
                            <a href="index.html"><img src="../assets/themes/bag/images/logo/logo-black-4.png" alt="logo"></a>
                        </div>
                    </div>
                    <div class="col-md-8 col-9">
                        <div class="header-action-wrap">
                            <div class="header-action-cart">
                                <a class="black" href="#">
                                    <i class="ion-bag"></i>
                                    <span class="product-count bg-theme-color">01</span>
                                </a>
                                <div class="cart-dropdown-wrap">
                                    <div class="cart-content">
                                        <ul>
                                            <li class="single-product-cart">
                                                <div class="cart-img">
                                                    <a href="product-details.html"><img src="../assets/themes/bag/images/cart/cart-1.jpg" alt=""></a>
                                                </div>
                                                <div class="cart-title">
                                                    <h4><a href="product-details.html">Obey T-shirt With Tiger Print</a></h4>
                                                    <span> 1 × $30.00	</span>
                                                </div>
                                                <div class="cart-delete">
                                                    <a href="#"><i class="icon_close"></i></a>
                                                </div>
                                            </li>
                                            <li class="single-product-cart">
                                                <div class="cart-img">
                                                    <a href="product-details.html"><img src="../assets/themes/bag/images/cart/cart-3.jpg" alt=""></a>
                                                </div>
                                                <div class="cart-title">
                                                    <h4><a href="product-details.html">The North Face T-Shirt</a></h4>
                                                    <span> 1 × $25.00	</span>
                                                </div>
                                                <div class="cart-delete">
                                                    <a href="#"><i class="icon_close"></i></a>
                                                </div>
                                            </li>
                                        </ul>
                                        <div class="cart-total">
                                            <h4>Subtotal: <span>$67.00</span></h4>
                                        </div>
                                        <div class="cart-checkout-btn">
                                            <a class="cart" href="cart.html">view cart <i class="ion-ios-arrow-right"></i></a>
                                            <a class="checkout" href="checkout.html">checkout <i class="ion-ios-arrow-right"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="header-action-login-2">
                                <a data-bs-toggle="modal" data-bs-target="#loginActive" v-on:click="toggleModal" href="#"><i class="t-icon ion-person"></i></a>
                            </div>
                            <div class="mobile-menu mobile-menu-black">
                                <a class="mobile-menu-active-button" href="#" v-on:click="onClickMobileMenuActiveButton(e)"><i class="ion-navicon"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <!-- Log in start -->
    <!-- <div class="modal popup-login-style" id="loginActive" 
    v-show="showModal" v-bind:class="[{ show : showModal, displayBlock : showModal}]"
    > -->
    <div class="modal popup-login-style" id="loginActive">    
        <div class="modal-overlay">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="login-content">
                            <h2>Log in</h2>
                            <h3>Log in your account</h3>
                            <form action="#">
                                <input type="text" placeholder="Username">
                                <input type="password" placeholder="Password">
                                <div class="remember-forget-wrap">
                                    <div class="remember-wrap">
                                        <input type="checkbox">
                                        <p>Remember</p>
                                        <span class="checkmark"></span>
                                    </div>
                                    <div class="forget-wrap">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                </div>
                                <button type="button">Log in</button>
                                <div class="member-register">
                                    <p> Not a member? <a href="login-register.html"> Register now</a></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- clickable menu start -->
    <div class="clickable-mainmenu text-center" :class="{inside:isClickableMainmenuActive}">
        <div class="clickable-mainmenu-icon">
            <button class="clickable-mainmenu-close" v-on:click="onClickableMainmenuClose">
                <span class="ion-android-close"></span>
            </button>
        </div>
        <div id="menu" class="slinky-menu-style text-left" :class="['slinky-menu', 'slinky-theme-default']">
            <ul>
                <li>
                    <a href="#">Home </a>
                    <ul>
                        <li>
                            <a href="#">Home Column #1</a>
                            <ul>
                                <li><a href="index.html">Home Default</a></li>
                                <li><a href="index-boxed.html">Home Boxed</a></li>
                                <li><a href="index-shoes-v1.html">Home Shoes </a></li>
                                <li><a href="index-bag.html">Home Bag </a></li>
                                <li><a href="index-cosmetic-1.html">Home Cosmetic V1 </a></li>
                                <li><a href="index-cosmetic-2.html">Home Cosmetic V2 </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Home Column #2</a>
                            <ul>
                                <li><a href="index-cosmetic-3.html">Home Cosmetic V3 </a></li>
                                <li><a href="index-fashion-studio.html">Home Fashion Studio</a></li>
                                <li><a href="index-app-landing.html">Home App Landing</a></li>
                                <li><a href="index-selling-single-a-product.html">Home Single Product</a></li>
                                <li><a class="new" href="index-tech-v1.html">Home Tech 1</a></li>
                                <li><a class="new" href="index-tech-v2.html">Home Tech 2</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Home Column #3</a>
                            <ul>
                                <li><a class="new" href="index-barber-shop.html">Home Barber Shop</a></li>
                                <li><a class="new" href="index-glasses-v1.html">Home Glasses v1</a></li>
                                <li><a class="new" href="index-glasses-v2.html">Home Glasses v2</a></li>
                                <li><a class="new" href="index-glasses-v3.html">Home Glasses v3</a></li>
                                <li><a class="new" href="index-watch-v1.html">Home Watch v1</a></li>
                                <li><a class="new" href="index-watch-v2.html">Home Watch v2</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Shop </a>
                    <ul>
                        <li>
                            <a href="#">Shop Layout</a>
                            <ul>
                                <li><a href="shop.html">Shop Grid Style 1</a></li>
                                <li><a href="shop-grid-2.html">Shop Grid Style 2</a></li>
                                <li><a href="shop-grid-3.html">Shop Grid Style 3</a></li>
                                <li><a href="shop-grid-4.html">Shop Grid Style 4</a></li>
                                <li><a href="shop-categories.html">Shop Grid Style 5</a></li>
                                <li><a href="shop-list.html">Shop Listing</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Product Types</a>
                            <ul>
                                <li><a href="product-details.html">Product Simple</a></li>
                                <li><a href="product-details-variable.html">Product Variable</a></li>
                                <li><a href="product-details-group.html">Product Groupped</a></li>
                                <li><a href="product-details-affilate.html">Product Affilate</a></li>
                                <li><a href="product-details-out-of-stock.html">Product Out Of Stock</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="#">Categories </a>
                    <ul>
                        <li>
                            <a href="#">Clothings</a>
                            <ul>
                                <li><a href="shop.html">Bed Pillows</a></li>
                                <li><a href="shop.html">Sheets</a></li>
                                <li><a href="shop.html">Jeckets Coats</a></li>
                                <li><a href="shop.html">Bedding Sets</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Shoes</a>
                            <ul>
                                <li><a href="shop.html">Boots</a></li>
                                <li><a href="shop.html">Oxfords</a></li>
                                <li><a href="shop.html">Sandals</a></li>
                                <li><a href="shop.html">Sneakers</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Bags</a>
                            <ul>
                                <li><a href="shop.html">Game</a></li>
                                <li><a href="shop.html">Office</a></li>
                                <li><a href="shop.html">Patio</a></li>
                                <li><a href="shop.html">Sports</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Hats</a>
                            <ul>
                                <li><a href="shop.html">Beer Glasses</a></li>
                                <li><a href="shop.html">Cocktail Glasses</a></li>
                                <li><a href="shop.html">Cowboy</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Accessories</a>
                            <ul>
                                <li><a href="shop.html">Belts</a></li>
                                <li><a href="shop.html">Gloves Mittens</a></li>
                                <li><a href="shop.html">Neckwear</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <a href="shop-onsale.html">Blog </a>
                    <ul>
                        <li><a href="blog.html">Left Sidebar</a></li>
                        <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="blog-no-sidebar.html">Grid No Sidebar</a></li>
                        <li><a href="blog-list-style.html">Blog Listing</a></li>
                        <li><a href="blog-masonry.html">Blog Masonry </a></li>
                        <li><a href="blog-details.html">Blog Details </a></li>
                        <li><a href="blog-details-sidebar.html">Blog Details with sidebar </a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Pages</a>
                    <ul>
                        <li>
                            <a href="#">Commons</a>
                            <ul>
                                <li><a href="about-us.html">About</a></li>
                                <li><a href="about-us-2.html">About v2</a></li>
                                <li><a href="contact-us.html">Contact Us</a></li>
                                <li><a href="contact-us-2.html">Contact Us v2</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="404.html">404 Page</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Portfolio</a>
                            <ul>
                                <li><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                <li><a href="portfolio-free-style.html">Portfolio Free Style</a></li>
                                <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                                <li><a href="portfolio-details.html">Portfolio Single Gallery</a></li>
                                <li><a href="portfolio-details-2.html">Portfolio Single Image</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Shop Pages</a>
                            <ul>
                                <li><a href="my-account.html">My Account</a></li>
                                <li><a href="checkout.html">Check Out</a></li>
                                <li><a href="cart.html">Shopping Cart</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="order-tracking.html">Order Tracking</a></li>
                                <li><a href="login-register.html">Login Register</a></li>
                                <li><a href="compare.html">Compare </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Product Layout</a>
                            <ul>
                                <li><a href="product-details.html">Product Layout 1</a></li>
                                <li><a href="product-layout-2.html">Product Layout 2</a></li>
                                <li><a href="product-layout-3.html">Product Layout 3</a></li>
                                <li><a href="product-layout-4.html">Product Layout 4</a></li>
                                <li><a href="product-layout-5.html">Product Layout 5</a></li>
                                <li><a href="product-layout-6.html">Product Layout 6</a></li>
                                <li><a href="product-layout-7.html">Product Layout 7</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <!-- Mobile Menu start -->
    <div class="off-canvas-active" :class="{ inside: isMobileMenuActive }">
        <a class="off-canvas-close" v-on:click="onEndTriggerClick()"><i class="ion-android-close"></i></a>
        <div class="off-canvas-wrap">
            <div class="mobile-menu-wrap mrg-padding-border-none">
                <div id="mobile-menu" class=" text-left" :class="['slinky-menu', 'slinky-theme-default', 'slinky-mobile-menu']">
                    <ul>
                        <li>
                            <a href="#">HOME</a>
                            <ul>
                                <li>
                                    <a href="#">Home Column #1</a>
                                    <ul>
                                        <li><a href="index.html">Home Default</a></li>
                                        <li><a href="index-boxed.html">Home Boxed</a></li>
                                        <li><a href="index-shoes-v1.html">Home Shoes </a></li>
                                        <li><a href="index-bag.html">Home Bag </a></li>
                                        <li><a href="index-cosmetic-1.html">Home Cosmetic V1 </a></li>
                                        <li><a href="index-cosmetic-2.html">Home Cosmetic V2 </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Home Column #2</a>
                                    <ul>
                                        <li><a href="index-cosmetic-3.html">Home Cosmetic V3 </a></li>
                                        <li><a href="index-fashion-studio.html">Home Fashion Studio</a></li>
                                        <li><a href="index-app-landing.html">Home App Landing</a></li>
                                        <li><a href="index-selling-single-a-product.html">Home Single Product</a></li>
                                        <li><a class="new" href="index-tech-v1.html">Home Tech 1</a></li>
                                        <li><a class="new" href="index-tech-v2.html">Home Tech 2</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Home Column #3</a>
                                    <ul>
                                        <li><a class="new" href="index-barber-shop.html">Home Barber Shop</a></li>
                                        <li><a class="new" href="index-glasses-v1.html">Home Glasses v1</a></li>
                                        <li><a class="new" href="index-glasses-v2.html">Home Glasses v2</a></li>
                                        <li><a class="new" href="index-glasses-v3.html">Home Glasses v3</a></li>
                                        <li><a class="new" href="index-watch-v1.html">Home Watch v1</a></li>
                                        <li><a class="new" href="index-watch-v2.html">Home Watch v2</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">SHOP</a>
                            <ul>
                                <li>
                                    <a href="#">Shop Layout</a>
                                    <ul>
                                        <li><a href="shop.html">Shop Grid Style 1</a></li>
                                        <li><a href="shop-grid-2.html">Shop Grid Style 2</a></li>
                                        <li><a href="shop-grid-3.html">Shop Grid Style 3</a></li>
                                        <li><a href="shop-grid-4.html">Shop Grid Style 4</a></li>
                                        <li><a href="shop-categories.html">Shop Grid Style 5</a></li>
                                        <li><a href="shop-list.html">Shop Listing</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Product Types</a>
                                    <ul>
                                        <li><a href="product-details.html">Product Simple</a></li>
                                        <li><a href="product-details-variable.html">Product Variable</a></li>
                                        <li><a href="product-details-group.html">Product Groupped</a></li>
                                        <li><a href="product-details-affilate.html">Product Affilate</a></li>
                                        <li><a href="product-details-out-of-stock.html">Product Out Of Stock</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">CATEGORIES</a>
                            <ul>
                                <li>
                                    <a href="#">Clothings</a>
                                    <ul>
                                        <li><a href="shop.html">Bed Pillows</a></li>
                                        <li><a href="shop.html">Sheets</a></li>
                                        <li><a href="shop.html">Jeckets Coats</a></li>
                                        <li><a href="shop.html">Bedding Sets</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Shoes</a>
                                    <ul>
                                        <li><a href="shop.html">Boots</a></li>
                                        <li><a href="shop.html">Oxfords</a></li>
                                        <li><a href="shop.html">Sandals</a></li>
                                        <li><a href="shop.html">Sneakers</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Bags</a>
                                    <ul>
                                        <li><a href="shop.html">Game</a></li>
                                        <li><a href="shop.html">Office</a></li>
                                        <li><a href="shop.html">Patio</a></li>
                                        <li><a href="shop.html">Sports</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Hats</a>
                                    <ul>
                                        <li><a href="shop.html">Beer Glasses</a></li>
                                        <li><a href="shop.html">Cocktail Glasses</a></li>
                                        <li><a href="shop.html">Cowboy</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Accessories</a>
                                    <ul>
                                        <li><a href="shop.html">Belts</a></li>
                                        <li><a href="shop.html">Gloves Mittens</a></li>
                                        <li><a href="shop.html">Neckwear</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="shop-onsale.html">BLOG</a>
                            <ul>
                                <li><a href="blog.html">Left Sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">Right Sidebar</a></li>
                                <li><a href="blog-no-sidebar.html">Grid No Sidebar</a></li>
                                <li><a href="blog-list-style.html">Blog Listing</a></li>
                                <li><a href="blog-masonry.html">Blog Masonry </a></li>
                                <li><a href="blog-details.html">Blog Details </a></li>
                                <li><a href="blog-details-sidebar.html">Blog Details with sidebar </a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">PAGES</a>
                            <ul>
                                <li>
                                    <a href="#">Commons</a>
                                    <ul>
                                        <li><a href="about-us.html">About</a></li>
                                        <li><a href="about-us-2.html">About v2</a></li>
                                        <li><a href="contact-us.html">Contact Us</a></li>
                                        <li><a href="contact-us-2.html">Contact Us v2</a></li>
                                        <li><a href="faq.html">FAQ</a></li>
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Portfolio</a>
                                    <ul>
                                        <li><a href="portfolio-grid.html">Portfolio Grid</a></li>
                                        <li><a href="portfolio-free-style.html">Portfolio Free Style</a></li>
                                        <li><a href="portfolio-masonry.html">Portfolio Masonry</a></li>
                                        <li><a href="portfolio-details.html">Portfolio Single Gallery</a></li>
                                        <li><a href="portfolio-details-2.html">Portfolio Single Image</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Shop Pages</a>
                                    <ul>
                                        <li><a href="my-account.html">My Account</a></li>
                                        <li><a href="checkout.html">Check Out</a></li>
                                        <li><a href="cart.html">Shopping Cart</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                        <li><a href="login-register.html">Login Register</a></li>
                                        <li><a href="compare.html">Compare </a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#">Product Layout</a>
                                    <ul>
                                        <li><a href="product-details.html">Product Layout 1</a></li>
                                        <li><a href="product-layout-2.html">Product Layout 2</a></li>
                                        <li><a href="product-layout-3.html">Product Layout 3</a></li>
                                        <li><a href="product-layout-4.html">Product Layout 4</a></li>
                                        <li><a href="product-layout-5.html">Product Layout 5</a></li>
                                        <li><a href="product-layout-6.html">Product Layout 6</a></li>
                                        <li><a href="product-layout-7.html">Product Layout 7</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import "../assets/themes/bag/js/vendor/bootstrap.min.js"
import "../assets/themes/bag/js/plugins/slinky.min.js"
import {slinkyForVue} from './slinky'

export default {
    name: "HeaderArea",
    data() {
        return {
            isScrolled: false,
            switchSlideMenu: false,
            isMobileMenuActive: false,
            isClickableMainmenuActive: false,
            // showModal: false
        }
    },
    setup() {

    },
    methods: {
        onScroll() {
            var scroll = window.scrollY;
            if (scroll < 200) {
                this.isScrolled = false;
            } else {
                this.isScrolled = true;
            }
        },
        onClickMobileMenuActiveButton() {
            this.isMobileMenuActive = true;

            var list = document.getElementsByClassName("main-wrapper-2");
            for (var i = 0; i < list.length; i++) {
                // list[i] is a node with the desired class name
                list[i].classList.add("overlay-active-2"); 
            }
        },
        onEndTriggerClick() {
            this.isMobileMenuActive = false;
            var list = document.getElementsByClassName("main-wrapper-2");
            for (var i = 0; i < list.length; i++) {
                // list[i] is a node with the desired class name
                list[i].classList.remove("overlay-active-2"); 
            }
        },
        onClickableMainmenuActiveClick() {
            this.isClickableMainmenuActive = true;
        },
        onClickableMainmenuClose() {
            this.isClickableMainmenuActive = false;
        },
        // toggleModal:function(){
        //     this.showModal = !this.showModal;
        //     console.log(this.showModal);
        //     console.log($("#loginActive"));
        // },
        // closeme:function(){
        //     this.showModal = !this.showModal;
        // }
    },
    created() {
        document.addEventListener('scroll', this.onScroll);
        window.addEventListener('touchmove', this.onScroll);

    },
    mounted () {
        slinkyForVue();
    }
}
</script>

<style>
.displayBlock {
    display: block !important;
    padding-right: 17px;
}
</style>