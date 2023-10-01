<template>
    <div class="orders_main">
        <div class="header_part">
            <div class="header_parts_prdct">
                <div class="location_part_prdct">
                    <div class="section_one_prdct">
                        <router-link :to="{ name: 'control'}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.82843 6.97154H16V9.02858H3.82843L9.1924 14.5455L7.7782 16L0 8.00006L7.7782 0L9.1924 1.45454L3.82843 6.97154Z" fill="white"/>
</svg>
</router-link>
                    </div>
                    <div class="search_content">
                        <h5>Orders</h5>
                    </div>
                </div>
                <!-- 2 -->
                <div class="search_cart">
                    <div class="search_box">
                        <!-- <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" fill="white"/>
</svg>
                        </div> -->
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
        <div class="ordr_tags_div">
            <div class="ordr_outr_div">
            <div class="ordr_tag1">
                <div class="ordr_tag_txt">View All</div>
                <div class="ordr_crcle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <circle cx="9.5" cy="9.5" r="9.5" fill="#9747FF"/>
</svg><div class="ordr_num">4</div>
                </div>
            </div>
            <!-- 2 -->
            <div class="ordr_tag2">
                <div class="ordr_tag_txt2">Active</div>
                <div class="ordr_crcle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <circle cx="9.5" cy="9.5" r="9.5" fill="#D9D9D9"/>
</svg><div class="ordr_num2">1</div>
                </div>
            </div>
            <!-- 3 -->

            <div class="ordr_tag2">
                <div class="ordr_tag_txt2">Delivered</div>
                <div class="ordr_crcle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <circle cx="9.5" cy="9.5" r="9.5" fill="#D9D9D9"/>
</svg><div class="ordr_num2">2</div>
                </div>
            </div>
            <!-- 4 -->
            <div class="ordr_tag2">
                <div class="ordr_tag_txt2">Cancelled</div>
                <div class="ordr_crcle">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">
  <circle cx="9.5" cy="9.5" r="9.5" fill="#D9D9D9"/>
</svg><div class="ordr_num2">1</div>
                </div>
            </div>
        </div>
        </div>
        <!--  -->

        <div class="ordr_outr_box">
            <div class="ordr_img_frme">
                <img src="/auto_home/explore_item3.png" alt="">
            </div>
            <div class="ordr_txt_one">Mi Home Security <br> Camera 360</div>
            <div class="ordr_txt_two">Delivered By Monday</div>
            <div class="ordr_txt_two">Order ID : CA3290529</div>
            <div class="ordr_icon_div">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23.5" stroke="#D9D9D9"/>
</svg>
<div class="ordr_note_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="#252323"/>
</svg>
</div>
            </div>
            <div class="ordr_box_line"></div>
            <div class="order_btns">
                <button class="ordr_btn1">Cancel Order</button>
                <router-link :to="{ name: 'trackorder'}"> <button class="ordr_btn2">Track Order</button></router-link>
            </div>
        </div>

        <!-- 2 -->

        <div class="ordr_outr_box">
            <div class="ordr_img_frme">
                <img src="/auto_home/explore_item3.png" alt="">
            </div>
            <div class="ordr_txt_one">Mi Home Security <br> Camera 360</div>
            <div class="ordr_txt_two_green">Delivered</div>
            <div class="ordr_txt_two">Order ID : CA3290529</div>
            <div class="ordr_icon_div">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23.5" stroke="#D9D9D9"/>
</svg>
<div class="ordr_note_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="#252323"/>
</svg>
</div>
            </div>
            <div class="ordr_box_line"></div>
            <div class="order_btns">
                <button class="ordr_btn1">Cancel Order</button>
                <router-link :to="{ name: 'trackorder'}"> <button class="ordr_btn2">Track Order</button></router-link>
            </div>
        </div>

        <!-- 3 -->

        
        <div class="ordr_outr_box">
            <div class="ordr_img_frme">
                <img src="/auto_home/explore_item3.png" alt="">
            </div>
            <div class="ordr_txt_one">Mi Home Security <br> Camera 360</div>
            <div class="ordr_txt_two_green">Delivered</div>
            <div class="ordr_txt_two">Order ID : CA3290529</div>
            <div class="ordr_icon_div">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23.5" stroke="#D9D9D9"/>
</svg>
<div class="ordr_note_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="#252323"/>
</svg>
</div>
            </div>
            <div class="ordr_box_line"></div>
            <div class="order_btns">
                <button class="ordr_btn1">Cancel Order</button>
                <router-link :to="{ name: 'trackorder'}"> <button class="ordr_btn2">Track Order</button></router-link>
            </div>
        </div>

        <!-- 4 -->
        <div class="ordr_outr_box">
            <div class="ordr_img_frme">
                <img src="/auto_home/explore_item3.png" alt="">
            </div>
            <div class="ordr_txt_one">Mi Home Security <br> Camera 360</div>
            <div class="ordr_txt_two">Cancelled</div>
            <div class="ordr_txt_two">Order ID : CA3290529</div>
            <div class="ordr_icon_div">
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
  <circle cx="24" cy="24" r="23.5" stroke="#D9D9D9"/>
</svg>
<div class="ordr_note_icon">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M20 22H4C3.44772 22 3 21.5523 3 21V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V21C21 21.5523 20.5523 22 20 22ZM19 20V4H5V20H19ZM8 9H16V11H8V9ZM8 13H16V15H8V13Z" fill="#252323"/>
</svg>
</div>
            </div>
            <div class="ordr_box_line"></div>
            <div class="order_btns">
                <button class="ordr_btn1_cancel">Cancel Order</button>
                <button class="ordr_btn2_cancel">Track Order</button>
            </div>
        </div>
        <br><br><br>
        <Menubar></Menubar>


    </div>
</template>

<script>
import Menubar from '/src/pages/Menubar.vue'
export default{
    components: {
    Menubar,
  },
}

</script>

<style>
@import './styles/ordersstyle.css';
</style>
