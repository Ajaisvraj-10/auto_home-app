<template>
    <div class="payment_main">
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

        <div class="container_op">
            <div class="grey_line2"></div>
        <div class="green_line2"></div>


        <div class="address_tck_box4">
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

        <div class="address_tck_box5">
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

        <div class="address_tck_box6">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="14" fill="#D9D9D9"/>
  <path d="M17.364 22.1924L26.5564 13L27.9706 14.4142L17.364 25.0208L11 18.6569L12.4142 17.2427L17.364 22.1924Z" fill="white"/>
</svg>
            </div>
            <div class="tck_address">PlaceOrder</div>
        </div>

        <!--  -->
        <div class="txt_slct_address">Choose Your <br> Payment Method</div>

        <div class="amnt_topay">
            <div class="txt_amnt_payble">Amount Payable</div>
            <div class="topay_amnt_txt">₹2500</div>
        </div>
        <!-- add payment_btn -->

        <div class="add_pymnt_div">
            <button class="add_paymnt_btn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M9.16699 9.16663V4.16663H10.8337V9.16663H15.8337V10.8333H10.8337V15.8333H9.16699V10.8333H4.16699V9.16663H9.16699Z" fill="#9747FF"/>
</svg>Add Payment Method
            </button>
        </div>
        <!--  -->

        <div class="txt_slct_card_pay">Select Card</div>
        <!--  -->

        <div class="paymnt_cards">
            <div class="outer_line_card1">
                <img src="/auto_home/visa_card.png" alt="">
            </div>

            <div class="outer_line_card2">
                <img src="/auto_home/visa_card2.png" alt="">
            </div>

            <div class="outer_line_card3">
                <div class="plus_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M14.667 14.6666V6.66663H17.3337V14.6666H25.3337V17.3333H17.3337V25.3333H14.667V17.3333H6.66699V14.6666H14.667Z" fill="#9747FF"/>
</svg>
                </div>
            </div>
        </div>
        <!--  -->

        <div class="txt_slct_card_pay">Select Payment Method</div>
        <!--  -->

        <div class="pymnt_mthod_box">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="9" stroke="#A3A3A3" stroke-width="2"/>
</svg>
            </div>
            <div>
                <img src="/auto_home/net_bang_logo.png" alt="">
            </div>
            <div class="txt_net_bank">Net Banking</div>
        </div>
        <!-- 2 -->
        <div class="pymnt_mthod_box">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="9" stroke="#A3A3A3" stroke-width="2"/>
</svg>
            </div>
            <div>
                <img src="/auto_home/paypal_logo.png" alt="">
            </div>
        </div>
        <!-- 3 -->
        <div class="pymnt_mthod_box">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="9" stroke="#A3A3A3" stroke-width="2"/>
</svg>
            </div>
            <div>
                <img src="/auto_home/gpay_logo.png" alt="">
            </div>
        </div>
        <!-- 4 -->
        <div class="pymnt_mthod_box">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <circle cx="10" cy="10" r="9" stroke="#A3A3A3" stroke-width="2"/>
</svg>
            </div>
            <div>
                <img src="/auto_home/coingate_logo.png" alt="">
            </div>
        </div>
        </div><br><br><br><br>
       
        <!-- pay-btn -->

        <router-link :to="{ name: 'orderplaced'}">
        <div class="cntinue_div">
            <button class="cntinue_btn">Pay ₹2500 </button>
        </div>
        </router-link>
    </div>
</template>


<style>
@import './styles/orderpaymentstyle.css';
</style>