<template>
  <!-- mini cart start -->
  <div class="sidebar-cart-active">
    <div class="sidebar-cart-all">
      <a class="cart-close" href="#"><i class="icon_close"></i> Close </a>
      <div class="cart-content">
        <h3>Cart</h3>
        <ul>
          <li class="single-product-cart">
            <div class="cart-img">
              <a href="product-details.html"
                ><img src="../../assets/themes/bag/images/cart/cart-1.jpg" alt=""
              /></a>
            </div>
            <div class="cart-title">
              <h4>
                <a href="product-details.html">Obey T-shirt With Tiger Print</a>
              </h4>
              <span> 1 × $30.00 </span>
            </div>
            <div class="cart-delete">
              <a href="#"><i class="icon_close"></i></a>
            </div>
          </li>
          <li class="single-product-cart">
            <div class="cart-img">
              <a href="product-details.html"
                ><img src="../../assets/themes/bag/images/cart/cart-2.jpg" alt=""
              /></a>
            </div>
            <div class="cart-title">
              <h4>
                <a href="product-details.html"
                  >Satchel In Washed Navy Canvas
                </a>
              </h4>
              <span> 1 × $12.00 </span>
            </div>
            <div class="cart-delete">
              <a href="#"><i class="icon_close"></i></a>
            </div>
          </li>
          <li class="single-product-cart">
            <div class="cart-img">
              <a href="product-details.html"
                ><img src="../../assets/themes/bag/images/cart/cart-3.jpg" alt=""
              /></a>
            </div>
            <div class="cart-title">
              <h4><a href="product-details.html">The North Face T-Shirt</a></h4>
              <span> 1 × $25.00 </span>
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
          <a class="cart" href="cart.html"
            >view cart <i class="ion-ios-arrow-right"></i
          ></a>
          <a class="checkout" href="checkout.html"
            >checkout <i class="ion-ios-arrow-right"></i
          ></a>
        </div>
      </div>
    </div>
  </div>
  <div class="shop-area section-padding-1 pt-115 pb-120">
    <div class="container-fluid">
      <div class="row flex-row-reverse">
        <div class="col-xl-10 col-lg-9">
          <div class="shop-page-wrap">
            <div class="shop-top-bar mb-40">
              <div class="row">
                <div class="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6 mb-10">
                  <div class="shop-total-product">
                    <p><span> 17</span> products found</p>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6 mb-10">
                  <div class="shop-sort-by">
                    <span>Sort By </span>
                    <select class="nice-select nice-select-style-1">
                      <option>Default</option>
                      <option>Popularity</option>
                      <option>Average rating</option>
                      <option>Newness</option>
                      <option>low to high</option>
                    </select>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6 mb-10">
                  <div class="show-list">
                    <span>Show</span>
                    <ul>
                      <li><a class="active" href="#">12</a></li>
                      <li><a href="#">24</a></li>
                      <li><a href="#">36</a></li>
                    </ul>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-6 col-md-6 col-12 col-sm-6 mb-10">
                  <div class="shop-page-tab-wrap">
                    <span>View</span>
                    <div class="shop-page-tab nav">
                      <a class="active" href="#pro-1" data-bs-toggle="tab"
                        ><i class="ion-android-apps"></i>
                      </a>
                      <a href="#pro-2" data-bs-toggle="tab" class="">
                        <i class="ion-android-menu"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="tab-content">
              <div id="pro-1" class="tab-pane active product-responsive-style">
                <div class="row">
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-2.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-2-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-badge">
                          <span class="red">Sale</span>
                        </div>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Satchel In Washed Navy</a
                          >
                        </h3>
                        <div class="product-price">
                          <span class="old-price">$24.00</span>
                          <span class="new-price">$12.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-3.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-3-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >The North Face T-Shirt</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$30.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-4.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-4-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-badge">
                          <span>Hot</span>
                        </div>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Longline T-Shirt In Lined Fabric</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$31.00 - $34.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-6.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-6-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Wavefarer Bucket Hat</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$39.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-5.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-5-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Leather The Quartz Watch</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$34.00 - $64.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-6.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-6-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html">
                            Wavefarer Bucket Hat</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$39.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-7.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-7-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html">
                            T-shirt International</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$31.00 - $40.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-1.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-1-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-badge">
                          <span>Hot</span>
                        </div>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >The North Face T-Shirt</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$25.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-35.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-35-2.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-badge">
                          <span class="red">Sale</span>
                        </div>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Satchel In Washed Navy</a
                          >
                        </h3>
                        <div class="product-price">
                          <span class="old-price">$24.00</span>
                          <span class="new-price">$12.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-36.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-36-2.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >The North Face T-Shirt</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$30.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-37.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-37-2.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Longline T-Shirt In Lined Fabric</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$31.00 - $34.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-38.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-38-2.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html">
                            Wavefarer Bucket Hat</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$39.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-39.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-39-2.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html">
                            Wavefarer Bucket Hat</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$80.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-3.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-3-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >The North Face T-Shirt</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$75.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-4.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-4-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html"
                            >Longline T-Shirt In Lined Fabric</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$20.00 - $25.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-xxl-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-12"
                  >
                    <div class="product-wrap mb-40">
                      <div class="product-img mb-20">
                        <a href="product-details.html">
                          <img
                            class="default-img"
                            src="../../assets/themes/bag/images/product/product-6.jpg"
                            alt=""
                          />
                          <img
                            class="hover-img"
                            src="../../assets/themes/bag/images/product/product-6-1.jpg"
                            alt=""
                          />
                        </a>
                        <div class="product-action-wrap">
                          <div class="product-action-left">
                            <button aria-label="Add To Cart">
                              <i class="ion-ios-plus-empty"></i> Add to cart
                            </button>
                          </div>
                          <div class="product-action-right tooltip-style">
                            <button
                              aria-label="Quick View"
                              data-bs-toggle="modal"
                              data-bs-target="#exampleModal"
                            >
                              <i class="ion-ios-eye-outline"></i>
                            </button>
                            <button aria-label="Add To Wishlist">
                              <i class="ion-ios-heart-outline"></i>
                            </button>
                            <button aria-label="Compare">
                              <i class="ion-stats-bars"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="product-content text-center">
                        <h3 class="font-dec">
                          <a href="product-details.html">
                            Wavefarer Bucket Hat</a
                          >
                        </h3>
                        <div class="product-price">
                          <span>$25.00</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination-style mt-10">
                  <ul>
                    <li><a class="active" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                  </ul>
                </div>
              </div>
              <div id="pro-2" class="tab-pane">
                <div class="row">
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-2.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-2-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-badge">
                              <span class="red">Sale</span>
                            </div>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html"
                                >Satchel In Washed Navy</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span class="old-price">$24.00</span>
                              <span class="new-price">$12.00</span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <a href="product-details.html"
                                  ><i class="ion-plus"></i>Select options</a
                                >
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-3.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-3-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html"
                                >The North Face T-Shirt</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span>$30.00</span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <button>
                                  <i class="ion-plus"></i> Add to cart
                                </button>
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-4.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-4-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html"
                                >The North Face T-Shirt</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span> $31.00 - $34.00 </span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <button>
                                  <i class="ion-plus"></i> Add to cart
                                </button>
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-6.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-6-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html">
                                Wavefarer Bucket Hat</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span>$39.00</span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <a href="product-details.html"
                                  ><i class="ion-plus"></i>Select options</a
                                >
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-5.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-5-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-badge">
                              <span>hot</span>
                            </div>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html"
                                >Leather The Quartz Watch</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span> $34.00 - $64.00 </span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <button>
                                  <i class="ion-plus"></i> Add to cart
                                </button>
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-7.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-7-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html">
                                T-shirt International</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span> $31.00 - $40.00 </span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <button>
                                  <i class="ion-plus"></i> Add to cart
                                </button>
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-1.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-1-1.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-badge">
                              <span class="red">Sale</span>
                            </div>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html"
                                >The North Face T-Shirt</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span> $25.00 </span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <button>
                                  <i class="ion-plus"></i> Add to cart
                                </button>
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-12">
                    <div
                      class="
                        shop-list-wrap
                        product-wrap product-responsive-style
                        mb-50
                      "
                    >
                      <div class="row align-items-center">
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-img">
                            <a href="product-details.html">
                              <img
                                class="default-img"
                                src="../../assets/themes/bag/images/product/product-35.jpg"
                                alt=""
                              />
                              <img
                                class="hover-img"
                                src="../../assets/themes/bag/images/product/product-35-2.jpg"
                                alt=""
                              />
                            </a>
                            <div class="product-list-quickview tooltip-style">
                              <button
                                aria-label="Quick View"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="ion-ios-eye-outline"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6 col-12">
                          <div class="product-content product-list-content">
                            <h3>
                              <a href="product-details.html">
                                Freshman Baseball Cap</a
                              >
                            </h3>
                            <div class="product-rating">
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star"></i>
                              <i class="ion-android-star gray"></i>
                            </div>
                            <div class="product-price product-price-left">
                              <span>$16.00 – $25.00</span>
                            </div>
                            <p>
                              The t-shirt has become an irreplaceable article of
                              clothing.
                            </p>
                            <div class="product-list-action">
                              <div class="product-list-cart">
                                <a href="product-details.html"
                                  ><i class="ion-plus"></i>Select options</a
                                >
                              </div>
                              <div class="product-list-wishlist tooltip-style">
                                <button aria-label="Add To Wishlist">
                                  <i class="ion-ios-heart"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="pagination-style mt-10">
                  <ul>
                    <li><a class="active" href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3">
          <div class="sidebar-wrapper">
            <div class="sidebar-widget-wrap">
              <h2>Filter By</h2>
              <div class="sidebar-widget mb-30">
                <div class="sidebar-title-content-wrap">
                  <div class="sidebar-widget-sub-title sidebar-widget-width">
                    <h3>Color</h3>
                  </div>
                  <div class="sidebar-color-list">
                    <ul>
                      <li><a title="Blue" class="blue" href="#">blue</a></li>
                      <li>
                        <a title="Carmine" class="carmine" href="#">carmine</a>
                      </li>
                      <li>
                        <a title="Copper" class="copper" href="#">copper</a>
                      </li>
                      <li><a title="Green" class="green" href="#">green</a></li>
                      <li><a title="Ocher" class="ocher" href="#">ocher</a></li>
                      <li><a title="Pear" class="pear" href="#">pear</a></li>
                      <li>
                        <a title="Turquoise" class="turquoise" href="#"
                          >turquoise</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget mb-25">
                <div class="sidebar-title-content-wrap">
                  <div class="sidebar-widget-sub-title sidebar-widget-width">
                    <h3>Size</h3>
                  </div>
                  <div class="sidebar-size-list">
                    <ul>
                      <li><a href="#">L</a></li>
                      <li><a href="#">M</a></li>
                      <li><a href="#">S</a></li>
                      <li><a href="#">XL</a></li>
                      <li><a href="#">XXL</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="sidebar-widget mb-40">
                <div class="sidebar-title-content-wrap">
                  <div class="sidebar-widget-sub-title sidebar-widget-width">
                    <h3>Price</h3>
                  </div>
                  <div class="price-filter">
                    <div id="slider-range"></div>
                    <div class="price-slider-amount">
                      <span>Range: </span>
                      <input
                        type="text"
                        id="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="sidebar-widget mb-40">
              <div class="sidebar-widget-title mb-20">
                <h3>Features</h3>
              </div>
              <div class="sidebar-list-style">
                <ul>
                  <li>
                    <a href="#">Accessories</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Bags</a> <span><a href="#"> 3</a></span>
                  </li>
                  <li>
                    <a href="#">Clothings</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Cowboy</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Game</a> <span><a href="#"> 2</a></span>
                  </li>
                  <li>
                    <a href="#">Gloves</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Hats</a> <span><a href="#"> 3</a></span>
                  </li>
                  <li>
                    <a href="#">Jean's Collection</a>
                    <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Jeckets</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Patio</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Sandals</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Shaving</a> <span><a href="#"> 2</a></span>
                  </li>
                  <li>
                    <a href="#">Shoes</a> <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">Super Sunglasses</a>
                    <span><a href="#"> 1</a></span>
                  </li>
                  <li>
                    <a href="#">T-Shirt's Collection</a>
                    <span><a href="#"> 4</a></span>
                  </li>
                  <li>
                    <a href="#">Watches</a> <span><a href="#"> 4</a></span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="sidebar-widget">
              <div class="sidebar-widget-title mb-25">
                <h3>Recent Products</h3>
              </div>
              <div class="sidebar-product-wrap">
                <div class="single-sidebar-product">
                  <div class="sidebar-product-img">
                    <a href="product-details.html"
                      ><img
                        src="../../assets/themes/bag/images/product/shop-sidebar-1.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="sidebar-product-content">
                    <h4>
                      <a href="product-details.html"
                        >Longline T-Shirt In Lined Fabric</a
                      >
                    </h4>
                    <span> $31.00 – $34.00</span>
                  </div>
                </div>
                <div class="single-sidebar-product">
                  <div class="sidebar-product-img">
                    <a href="product-details.html"
                      ><img
                        src="../../assets/themes/bag/images/product/shop-sidebar-2.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="sidebar-product-content">
                    <h4>
                      <a href="product-details.html"> T-shirt International</a>
                    </h4>
                    <span> $35.00 – $37.00</span>
                  </div>
                </div>
                <div class="single-sidebar-product">
                  <div class="sidebar-product-img">
                    <a href="product-details.html"
                      ><img
                        src="../../assets/themes/bag/images/product/shop-sidebar-3.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="sidebar-product-content">
                    <h4>
                      <a href="product-details.html"
                        >Satchel In Grey Dawson Backpack</a
                      >
                    </h4>
                    <span> $40.00 – $42.00</span>
                  </div>
                </div>
                <div class="single-sidebar-product">
                  <div class="sidebar-product-img">
                    <a href="product-details.html"
                      ><img
                        src="../../assets/themes/bag/images/product/shop-sidebar-4.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="sidebar-product-content">
                    <h4>
                      <a href="product-details.html"
                        >Nike Heritage Herschel backpack</a
                      >
                    </h4>
                    <span> $43.00 – $45.00</span>
                  </div>
                </div>
                <div class="single-sidebar-product">
                  <div class="sidebar-product-img">
                    <a href="product-details.html"
                      ><img
                        src="../../assets/themes/bag/images/product/shop-sidebar-5.jpg"
                        alt=""
                    /></a>
                  </div>
                  <div class="sidebar-product-content">
                    <h4><a href="product-details.html">Set Supreme Cap</a></h4>
                    <span> $52.00 – $55.00</span>
                  </div>
                </div>
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
    name: 'shop',
    components: { },
};
</script>

<style>
</style>