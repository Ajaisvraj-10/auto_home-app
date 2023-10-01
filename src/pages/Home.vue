<template>
    <div class="main_home">
        <div class="header_part">
            <div class="header_parts">
                <div class="location_part">
                    <div class="section_one"><img src="/auto_home/weather_autohome.png" alt="">
                        <p>Friday, 24 May 2023</p>
                    <h5>Cloudy</h5>
                    </div>
                </div>
                <!-- 2 -->
                <div class="search_cart">
                    <div class="search_box">
                        <router-link :to="{ name: 'search'}">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_19_41)">
    <path d="M20.9401 19.1067L26 24.1666L24.3292 25.8374L19.2693 20.7775C17.4499 22.2331 15.1427 23.1038 12.6332 23.1038C6.76368 23.1038 2 18.3402 2 12.4706C2 6.60108 6.76368 1.8374 12.6332 1.8374C18.5028 1.8374 23.2664 6.60108 23.2664 12.4706C23.2664 14.9801 22.3957 17.2874 20.9401 19.1067ZM18.5697 18.23C20.0144 16.7412 20.9035 14.7102 20.9035 12.4706C20.9035 7.90129 17.2025 4.20034 12.6332 4.20034C8.06389 4.20034 4.36294 7.90129 4.36294 12.4706C4.36294 17.04 8.06389 20.7409 12.6332 20.7409C14.8728 20.7409 16.9038 19.8518 18.3926 18.4071L18.5697 18.23Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_19_41">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
                        </div>
                        </router-link>
                        <router-link :to="{ name: 'productcart'}">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <path d="M2.31669 17.0542V3.15409H0V0.837402H3.47503C4.11478 0.837402 4.63338 1.35602 4.63338 1.99575V15.8959H19.0414L21.358 6.62913H6.95007V4.31244H22.8417C23.4814 4.31244 24 4.83105 24 5.47078C24 5.56549 23.9884 5.65985 23.9654 5.75173L21.0695 17.3351C20.9407 17.8508 20.4774 18.2126 19.9458 18.2126H3.47503C2.8353 18.2126 2.31669 17.694 2.31669 17.0542ZM4.63338 25.1626C3.35391 25.1626 2.31669 24.1255 2.31669 22.846C2.31669 21.5664 3.35391 20.5293 4.63338 20.5293C5.91285 20.5293 6.95007 21.5664 6.95007 22.846C6.95007 24.1255 5.91285 25.1626 4.63338 25.1626ZM18.5335 25.1626C17.254 25.1626 16.2169 24.1255 16.2169 22.846C16.2169 21.5664 17.254 20.5293 18.5335 20.5293C19.813 20.5293 20.8502 21.5664 20.8502 22.846C20.8502 24.1255 19.813 25.1626 18.5335 25.1626Z" fill="white"/>
  <circle cx="22.0086" cy="5.47078" r="4.63338" fill="#FF9417"/>
</svg>
                        </div>
                    </router-link>
                    </div>
                </div>
            </div>
        </div>

        <!-- img-banner -->
        <div class="img_banner">
            <div class="inner_banner">
                <img src="/auto_home/home_img_autohome.png" alt="">
                <div class="banner_txt">Smart Your Home Today</div>
            </div>
            <div class="banner_dots">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="8" viewBox="0 0 36 8" fill="none">
                <circle cx="18" cy="4" r="4" fill="#A3A3A3"/>
                <circle cx="4" cy="4" r="4" fill="#D9D9D9"/>
                <circle cx="32" cy="4" r="4" fill="#A3A3A3"/>
                </svg>
            </div>
        </div>
        <!--  -->
        <div class="txt_explore">Explore</div>
        <!-- explore-items -->
        <div class="explore_items">
            <router-link :to="{ name: 'productlist'}">
            <div class="frame">
                <img src="/auto_home/explore_item1.png" alt="">
                <div class="item_name">Speakers</div>
            </div>
            </router-link>
            <!-- 2 -->
            <div class="frame2">
                <img src="/auto_home/explore_item2.png" alt="">
                <div class="item_name2">Bulbs</div>
            </div>
            <!-- 3 -->
            <div class="frame3">
                <img src="/auto_home/explore_item3.png" alt="">
                <div class="item_name3">Camera</div>
            </div>
            <!-- 4 -->
            <div class="frame4">
                <img src="/auto_home/explore_item4.png" alt="">
                <div class="item_name4">Plugs</div>
            </div>
            <!-- 5 -->
            <div class="frame5">
                <img src="/auto_home/explore_item5.png" alt="">
                <div class="item_name5">Humidifier</div>
            </div>
            <!-- 6 -->
            <div class="frame6">
                <img src="/auto_home/grp6_1.png" alt="">
                <img src="/auto_home/grp6_2.png" alt="">
                <img src="/auto_home/grp6_3.png" alt="">
                <div class="item_name3">More</div>
            </div>
        </div>
        <!-- from-cart-section -->
        <div class="txt_from_cart">From Your Cart</div>
        <!--  -->
        <div class="cart_items_outer_box">
            <div class="inner_box">
                <img src="/auto_home/explore_item3.png" alt="">
            </div>
            <div class="prdct_name">Mi Home Security Camera 360°1080p Fu..</div>
            <div class="price_sect"><span class="span1">₹3299</span> <span class="span2">₹2500</span></div>
            <div class="rating_star">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
            </div>
             <div class="txt_rating">4.5 Rating</div>
             <div class="btn_bst_div"> <button class="bst_seller">Best Seller</button></div>
             <div class="chckt_btns">
                <button class="btn_remove">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M17.5 6H22.5V8H20.5V21C20.5 21.5523 20.0523 22 19.5 22H5.5C4.94772 22 4.5 21.5523 4.5 21V8H2.5V6H7.5V3C7.5 2.44772 7.94772 2 8.5 2H16.5C17.0523 2 17.5 2.44772 17.5 3V6ZM18.5 8H6.5V20H18.5V8ZM9.5 11H11.5V17H9.5V11ZM13.5 11H15.5V17H13.5V11ZM9.5 4V6H15.5V4H9.5Z" fill="#6A6767"/>
</svg>Remove
                </button>
                <!--  -->
                <button class="btn_chckt">
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <path d="M3.50488 3H21.5049C22.0572 3 22.5049 3.44772 22.5049 4V20C22.5049 20.5523 22.0572 21 21.5049 21H3.50488C2.9526 21 2.50488 20.5523 2.50488 20V4C2.50488 3.44772 2.9526 3 3.50488 3ZM20.5049 11H4.50488V19H20.5049V11ZM20.5049 9V5H4.50488V9H20.5049ZM14.5049 15H18.5049V17H14.5049V15Z" fill="white"/>
</svg>Checkout
                </button>
             </div>
        </div>
        <!-- suggested -->

        <div class="suggested_viewall">
            <div class="txt_suggest">Suggested</div> <div class="txt_viewall">View All</div>
        </div>
        <!-- tags -->

        <div class="filter_category_box">
            <div class="tag_grp">
                <!-- tag1 -->
                <div class="tag1">
                    <div>
                        <svg class="tag_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="black"/>
</svg>
                    </div>
                    <div class="tag_txt">Filter</div>
                </div>
                <!-- tag2 -->
                <div class="tag1">
                    <div class="tag_txt">Sort by</div>
                    <div>
                        <svg class="tag_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="black"/>
</svg>
                    </div>
                </div>
                <!-- tag3 -->
                <div class="tag1">
                    <div class="tag_txt">Price</div>
                    <div>
                        <svg class="tag_icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z" fill="black"/>
</svg>
                    </div>
                </div>
                <!-- tag4 -->
                <div class="tag1">
                    <div class="tag_txt">New Products</div>
                </div>
                <!-- end-of tags -->
            </div>
        </div>
        <!-- product_list -->

        <div class="outer_box_products">
            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card2 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card3 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card4 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card5 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card6 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card7 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>

            <!-- card8 -->

            <div class="card_1">
                <div class="img_frame">
                    <img src="/auto_home/autohome_prdcts.png" alt="">
                    <div class="like_img">
                        <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" fill="white" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                    </div>
                </div>
                <!--  -->
                <div class="prdct_dtls">
                    <div class="prdct_name">Amazon Alexa Echo Dot (Gen 3..</div>
                    <div class="prdct_price">
                        <span class="span3">₹3779 </span>
                        <span class="span4">₹3779 </span>
                    </div>
                    <div class="rating_star2">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
                    </div>
                    <div class="prdct_rating">4.5 Rating</div>
                </div>
            </div>
            <div class="centere_line"></div>
            <!-- <div class="side_line4"></div> -->
         

        </div>

        <!-- recently-viewed-txt-->
        <div class="recently_viewall">
            <div class="txt_recently">Recently Viewed</div> <div class="txt_viewall">View All</div>
        </div>

        <!-- recently_viewed-cards -->
        <div class="recently_cards">
            <div class="img_sect">
                <div class="image_frame">
                    <img src="/auto_home/explore_item3.png" alt="">
                </div>
            </div>
            <div class="dtls_sect">
                <div class="card_txt">Mi Home Security Ca..</div>
                <div class="card_price">₹2500</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00032 12.1733L3.29802 14.8054L4.34824 9.51985L0.391846 5.86112L5.74321 5.22663L8.00032 0.333252L10.2574 5.22663L15.6087 5.86112L11.6524 9.51985L12.7026 14.8054L8.00032 12.1733ZM8.00032 10.6453L10.8315 12.23L10.1991 9.04772L12.5812 6.84485L9.35925 6.46281L8.00032 3.5166L6.64135 6.46281L3.41939 6.84485L5.80146 9.04772L5.16914 12.23L8.00032 10.6453Z" fill="#FF9F2E"/>
</svg>
                </div>
                <button class="card_bst_seller">Best Seller</button>
                <div class="like_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                </div>
            </div>
        </div>
        <!-- card2 -->
        <div class="recently_cards">
            <div class="img_sect">
                <div class="image_frame">
                    <img src="/auto_home/explore_item3.png" alt="">
                </div>
            </div>
            <div class="dtls_sect">
                <div class="card_txt">Mi Home Security Ca..</div>
                <div class="card_price">₹2500</div>
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00004 13.09L3.05574 16L4.16001 10.1565L0 6.11146L5.62676 5.40998L8.00004 0L10.3733 5.40998L16 6.11146L11.8401 10.1565L12.9443 16L8.00004 13.09Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M8.00032 12.1733L3.29802 14.8054L4.34824 9.51985L0.391846 5.86112L5.74321 5.22663L8.00032 0.333252L10.2574 5.22663L15.6087 5.86112L11.6524 9.51985L12.7026 14.8054L8.00032 12.1733ZM8.00032 10.6453L10.8315 12.23L10.1991 9.04772L12.5812 6.84485L9.35925 6.46281L8.00032 3.5166L6.64135 6.46281L3.41939 6.84485L5.80146 9.04772L5.16914 12.23L8.00032 10.6453Z" fill="#FF9F2E"/>
</svg>
                </div>
                <button class="card_bst_seller">Best Seller</button>
                <div class="like_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
                </div>
            </div>
        </div>
        <!-- bck to top btn -->
        <div class="btn_div_bck_to_top">
            <button class="back_to_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.9999 7.82843V20H10.9999V7.82843L5.63589 13.1924L4.22168 11.7782L11.9999 4L19.778 11.7782L18.3638 13.1924L12.9999 7.82843Z" fill="#252323"/>
</svg>Back to top
        </button>
        </div>
        <Menubar></Menubar>
    </div>
    <br><br>
</template>

<style>
@import './styles/homestyle.css';
</style>

<script>
import Menubar from '/src/pages/Menubar.vue'
export default{
    components: {
    Menubar,
  },
}

</script>