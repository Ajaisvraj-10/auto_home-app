<template>
    <div class="settings_main">
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
                        <h5>Settings</h5>
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

        <div class="setngs_txt">Account</div>
        <div class="stng_profl_sect">
            <div><img src="/auto_home/auto_home_profile.png" alt=""></div>
            <div>
                <div class="stng_name">Melvin Joshy</div>
                <div class="stng_email">melvindesigns.io@gmail.com</div>
            </div>
            <div>
<div>
    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" stroke="#D9D9D9"/>
</svg>
</div>
<div class="stng_edit_icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z" fill="#252323"/>
</svg>
</div>
            </div>
        </div>

        <!--  -->

        <div class="stng_frst_line"></div>
        
        <div class="stngs_optin_txt1">Personal Details</div>
        <div class="stngs_optin_txt2">Add or change your name and address</div>
        <div class="stng_frst_line2"></div>

        <div class="stngs_optin_txt1">Payment Methods</div>
        <div class="stngs_optin_txt2">Manage your payment methods</div>
        <div class="stng_frst_line2"></div>

        <div class="stngs_optin_txt1">Your Wishlist</div>
        <div class="stngs_optin_txt2">Your wishlisted products </div>
        <div class="stng_frst_line2"></div>

        <router-link :to="{ name: 'orders'}">
        <div class="stngs_optin_txt1">Orders</div>
        <div class="stngs_optin_txt2">Track Your Order Delivery</div>
        <div class="stng_frst_line2"></div>
        </router-link>

        <div class="setngs_txt">Smart Control</div>
        <div class="stng_frst_line3"></div>

        <div class="txt_btn_notify_stng">
            <div>
                <div class="txt_sound">Show Global Brands</div>
        <div class="txtsound_2">Show global automation brand products</div>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="#9747FF"/>
  <circle cx="28" cy="10" r="9" fill="white"/>
</svg>
            </div>
        </div>
        <div class="base_line"></div>
        <!-- 2 -->
        <div class="txt_btn_notify_stng2">
            <div>
                <div class="txt_sound">Enable IR controls</div>
        <div class="txtsound_2">Control your devices with IR sensor</div>
            </div>

            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="20" viewBox="0 0 38 20" fill="none">
  <rect width="38" height="20" rx="10" fill="#9747FF"/>
  <circle cx="28" cy="10" r="9" fill="white"/>
</svg>
            </div>
        </div>
        <div class="base_line"></div>
        <!--  -->

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
@import './styles/settingsstyle.css';
</style>
