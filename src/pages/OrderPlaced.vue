<template>
    <div class="ordr_plcd_main">
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

        <div class="container">
            <div class="grey_line3"></div>
        <div class="green_line3"></div>


        <div class="address_tck_box7">
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

        <div class="address_tck_box8">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="17.5" fill="white" stroke="#07A717" stroke-width="3"/>
  <circle cx="19" cy="19" r="14" fill="#07A717"/>
  <path d="M17.364 22.1924L26.5564 13L27.9706 14.4142L17.364 25.0208L11 18.6569L12.4142 17.2427L17.364 22.1924Z" fill="white"/>
</svg>
            </div>
            <div class="tck_address">Payment</div>
        </div>
        <!-- 3 -->

        <div class="address_tck_box9">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="17.5" fill="white" stroke="#07A717" stroke-width="3"/>
  <circle cx="19" cy="19" r="14" fill="#07A717"/>
  <path d="M17.364 22.1924L26.5564 13L27.9706 14.4142L17.364 25.0208L11 18.6569L12.4142 17.2427L17.364 22.1924Z" fill="white"/>
</svg>
            </div>
            <div class="tck_address">PlaceOrder</div>
        </div>

        <!-- order_placed box -->

        <div class="notific_box">
            <div class="decor_div">
                <svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90" fill="none">
  <circle cx="45" cy="45" r="45" fill="white"/>
  <path d="M40 53.6666L61.6667 32L65 35.3333L40 60.3332L25 45.3334L28.3333 42.0001L40 53.6666Z" fill="#07A717"/>
</svg>
            </div>
            <div class="txt_ordr_plcd">Your order has <br> been placed</div>

            <div class="crcle1">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="24" fill="white"/>
</svg>
<div class="note_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="#252323"/>
</svg>
</div>
            </div>
            <!--  -->

            <div class="crcle2">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="24" fill="white"/>
</svg>
<div class="note_icon2">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M13.1202 17.0228L8.92129 14.7324C8.19135 15.5125 7.15261 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.15255 8 8.19125 8.48746 8.92118 9.26746L13.1202 6.97713C13.0417 6.66441 13 6.33707 13 6C13 3.79086 14.7909 2 17 2C19.2091 2 21 3.79086 21 6C21 8.20914 19.2091 10 17 10C15.8474 10 14.8087 9.51251 14.0787 8.73246L9.87977 11.0228C9.9583 11.3355 10 11.6629 10 12C10 12.3371 9.95831 12.6644 9.87981 12.9771L14.0788 15.2675C14.8087 14.4875 15.8474 14 17 14C19.2091 14 21 15.7909 21 18C21 20.2091 19.2091 22 17 22C14.7909 22 13 20.2091 13 18C13 17.6629 13.0417 17.3355 13.1202 17.0228ZM6 14C7.10457 14 8 13.1046 8 12C8 10.8954 7.10457 10 6 10C4.89543 10 4 10.8954 4 12C4 13.1046 4.89543 14 6 14ZM17 8C18.1046 8 19 7.10457 19 6C19 4.89543 18.1046 4 17 4C15.8954 4 15 4.89543 15 6C15 7.10457 15.8954 8 17 8ZM17 20C18.1046 20 19 19.1046 19 18C19 16.8954 18.1046 16 17 16C15.8954 16 15 16.8954 15 18C15 19.1046 15.8954 20 17 20Z" fill="#252323"/>
</svg>
</div>
            </div>
            <!-- btn home -->

            <router-link :to="{ name: 'home'}">
            <div class="bck_home_div">
                <button class="bck_home_btn">Back to Home</button>
            </div>
            </router-link>
        </div>
        </div>


    </div>
</template>


<style>
@import './styles/orderplacedstyle.css';
</style>