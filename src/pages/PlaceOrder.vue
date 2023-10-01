<template>
    <div class="place_order_main">
        <div class="header_part">
            <div class="header_parts_prdct">
                <div class="location_part_prdct">
                    <router-link :to="{ name: 'home'}">
                    <div class="section_one_prdct">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.82843 6.97154H16V9.02858H3.82843L9.1924 14.5455L7.7782 16L0 8.00006L7.7782 0L9.1924 1.45454L3.82843 6.97154Z" fill="white"/>
</svg>
                    </div>
                </router-link>
                    <div class="search_content">
                        <h5>Place Order</h5>
                    </div>
                </div>
                <!-- 2 -->
                <div class="search_cart">
                    <div class="search_box">
                        <div>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_19_41)">
    <path d="M20.9401 19.1067L26 24.1666L24.3292 25.8374L19.2693 20.7775C17.4499 22.2331 15.1427 23.1038 12.6332 23.1038C6.76368 23.1038 2 18.3402 2 12.4706C2 6.60108 6.76368 1.8374 12.6332 1.8374C18.5028 1.8374 23.2664 6.60108 23.2664 12.4706C23.2664 14.9801 22.3957 17.2874 20.9401 19.1067ZM18.5697 18.23C20.0144 16.7412 20.9035 14.7102 20.9035 12.4706C20.9035 7.90129 17.2025 4.20034 12.6332 4.20034C8.06389 4.20034 4.36294 7.90129 4.36294 12.4706C4.36294 17.04 8.06389 20.7409 12.6332 20.7409C14.8728 20.7409 16.9038 19.8518 18.3926 18.4071L18.5697 18.23Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_19_41">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg> -->
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 3C10.9 3 10 3.9 10 5C10 6.1 10.9 7 12 7C13.1 7 14 6.1 14 5C14 3.9 13.1 3 12 3ZM12 17C10.9 17 10 17.9 10 19C10 20.1 10.9 21 12 21C13.1 21 14 20.1 14 19C14 17.9 13.1 17 12 17ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
</svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="container_po">
            <div class="grey_line"></div>
        <div class="green_line"></div>


        <div class="address_tck_box">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="17.5" fill="white" stroke="#07A717" stroke-width="3"/>
  <circle cx="19" cy="19" r="14" fill="#07A717"/>
  <path d="M17.364 22.1924L26.5564 13L27.9706 14.4142L17.364 25.0208L11 18.6569L12.4142 17.2427L17.364 22.1924Z" fill="white"/>
</svg>
            </div>
            <div class="tck_address">Address</div>
        </div>
        <!-- 2 -->

        <div class="address_tck_box2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="14" fill="#D9D9D9"/>
  <path d="M17.364 22.1924L26.5564 13L27.9706 14.4142L17.364 25.0208L11 18.6569L12.4142 17.2427L17.364 22.1924Z" fill="white"/>
</svg>
            </div>
            <div class="tck_address">Payment</div>
        </div>
        <!-- 3 -->

        <div class="address_tck_box3">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="14" fill="#D9D9D9"/>
  <path d="M17.364 22.1924L26.5564 13L27.9706 14.4142L17.364 25.0208L11 18.6569L12.4142 17.2427L17.364 22.1924Z" fill="white"/>
</svg>
            </div>
            <div class="tck_address">PlaceOrder</div>
        </div>

        <!--  -->

        <div class="txt_slct_address">Select Address</div>
        <!--  -->
        <div class="outer_home_line">
        <div class="adderss_box_home">

            <div class="home_adress_dtls">
                <div class="txt_home">Home</div>
                <div class="txt_home2">Pallipadan House PO <br> Thalore Konikkara <br> Thrissur Kerala</div>
                <div class="txt_home2">Phone: 9567976380</div>
            </div>

            <div class="home_adress_img">
                <img src="/auto_home/place_order_home.png" alt="">
                <div class="purple_circle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="24" fill="#9747FF"/>
</svg>
                </div>
                <div class="adress_home_edit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z" fill="white"/>
</svg>
                </div>
            </div>
        </div>  
        </div>

        <!-- 2 -->

            <div class="adderss_box_home2">

        <div class="home_adress_dtls">
        <div class="txt_home">Office</div>
        <div class="txt_home2">Pallipadan House PO <br> Thalore Konikkara <br> Thrissur Kerala</div>
        <div class="txt_home2">Phone: 9567976380</div>
        </div>

        <div class="home_adress_img">
        <img src="/auto_home/place_order_home.png" alt="">
        <div class="purple_circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="white"/>
        </svg>
        </div>
        <div class="adress_home_edit">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z" fill="#252323"/>
        </svg>
        </div>
        </div>
        </div>

        <!-- add adress-btn -->

        <div class="add_adres_div">
            <button class="add_adres_btn">Add Address</button>
        </div>
        </div>


        <!-- continue_btn -->

        <router-link :to="{ name: 'orderpayment'}">
        <div class="cntinue_div">
            <button class="cntinue_btn">Continue</button>
        </div>
        </router-link>


    </div>
</template>


<style>
@import './styles/placeorderstyle.css';
</style>