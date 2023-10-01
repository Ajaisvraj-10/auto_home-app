<template>
    <div class="adddevice_main">
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
                        <h5>Add Device</h5>
                    </div>
                </div>
                <!-- 2 -->
                <div class="search_cart">
                    <div class="search_box">
                        <div>
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" fill="white"/>
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
        <div class="near_device_div">
            <div class="txt_scning">Scanning Nearby Devices</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="52" height="28" viewBox="0 0 52 28" fill="none">
  <rect width="52" height="28" rx="14" fill="#9747FF"/>
  <circle cx="38" cy="14" r="13" fill="white"/>
</svg>
            </div>
        </div>

        <!--  -->

        <div class="scning_div">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="190" height="190" viewBox="0 0 190 190" fill="none">
  <circle cx="95" cy="95" r="54.5" stroke="#D9D9D9"/>
</svg>
        </div>
        <div class="scnd_div_crcle">
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 55 55" fill="none">
  <circle cx="27.5" cy="27.5" r="27.5" fill="#9747FF"/>
</svg>
        </div>
        <div class="wifi_icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M0.689453 6.99659C3.78027 4.49704 7.71526 3 11.9999 3C16.2845 3 20.2195 4.49704 23.3104 6.99659L21.4253 9.33049C18.8496 7.24753 15.5704 6 11.9999 6C8.42937 6 5.15021 7.24753 2.57453 9.33049L0.689453 6.99659ZM3.83124 10.8864C6.0635 9.08119 8.90544 8 11.9999 8C15.0944 8 17.9363 9.08119 20.1686 10.8864L18.2835 13.2203C16.5664 11.8317 14.3803 11 11.9999 11C9.61954 11 7.43344 11.8317 5.71632 13.2203L3.83124 10.8864ZM6.97304 14.7763C8.34673 13.6653 10.0956 13 11.9999 13C13.9042 13 15.6531 13.6653 17.0268 14.7763L15.1417 17.1102C14.2831 16.4158 13.1901 16 11.9999 16C10.8097 16 9.71667 16.4158 8.85811 17.1102L6.97304 14.7763ZM10.1148 18.6661C10.63 18.2495 11.2858 18 11.9999 18C12.714 18 13.3698 18.2495 13.885 18.6661L11.9999 21L10.1148 18.6661Z" fill="white"/>
</svg>
        </div>
        </div>

        <!--  -->

        <div class="note_txt">Note : Must be Connect your phone <br> with same internet connection</div>

        <div class="slct_device_txt">Select Device</div>

        <div class="device_box_outer">
            <div class="spker_box">
                <img src="/auto_home/slct_device1.png" alt="">
                <div class="item_device_txt">Speakers</div>
            </div>
            <div class="spker_box">
                <img src="/auto_home/slct_device2.png" alt="">
                <div class="item_device_txt">Fan</div>
            </div>
            <router-link :to="{ name: 'humidifier'}">
            <div class="spker_box">
                <img src="/auto_home/slct_device3.png" alt="">
                <div class="item_device_txt">Humidifier</div>
            </div>
            </router-link>

            <div class="spker_box2">
                <img src="/auto_home/slct_device4.png" alt="">
                <div class="item_device_txt">Plugs</div>
            </div>
            <div class="spker_box2">
                <img src="/auto_home/slct_device5.png" alt="">
                <div class="item_device_txt">Bulbs</div>
            </div>
            <div class="spker_box2">
                <img src="/auto_home/slct_device6.png" alt="">
                <div class="item_device_txt">Thermostat</div>
            </div>
        </div>
    </div>
</template>

<style>
@import './styles/adddevicestyle.css';
</style>