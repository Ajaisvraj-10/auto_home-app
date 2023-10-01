<template>
    <div class="conect_main">
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
                        <h5>Smart Control</h5>
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

        <div class="txt_conect_device">Connecting to Device</div>
        <div class="txt_conect_device2">Please make sure the device is <br> connected to the internet</div>
        <!--  -->
        <router-link :to="{ name: 'smartconnect'}">
        <div class="outer_conect1"></div>
        <div class="outer_conect2"></div>
        <div class="outer_conect3"></div>
        <div class="outer_conect4"></div>
        <div class="outer_conect5">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200" fill="none">
  <circle cx="100" cy="100" r="100" fill="#6C35B5"/>
</svg>
        </div>
        <div class="outer_conect6">
            <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
  <circle cx="50" cy="50" r="50" fill="white"/>
</svg>
        </div>
        <div class="outer_conect7">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M0.918945 9.32879C5.04003 5.99605 10.2867 4 15.9995 4C21.7123 4 26.959 5.99605 31.0802 9.32879L28.5667 12.4407C25.1325 9.66337 20.7602 8 15.9995 8C11.2388 8 6.86662 9.66337 3.43238 12.4407L0.918945 9.32879ZM5.108 14.5152C8.08434 12.1083 11.8736 10.6667 15.9995 10.6667C20.1255 10.6667 23.9147 12.1083 26.8911 14.5152L24.3777 17.6271C22.0882 15.7756 19.1734 14.6667 15.9995 14.6667C12.8257 14.6667 9.91093 15.7756 7.62143 17.6271L5.108 14.5152ZM9.29706 19.7017C11.1286 18.2204 13.4605 17.3333 15.9995 17.3333C18.5386 17.3333 20.8705 18.2204 22.7021 19.7017L20.1886 22.8136C19.0438 21.8877 17.5865 21.3333 15.9995 21.3333C14.4126 21.3333 12.9552 21.8877 11.8105 22.8136L9.29706 19.7017ZM13.4861 24.8881C14.173 24.3327 15.0474 24 15.9995 24C16.9517 24 17.8261 24.3327 18.513 24.8881L15.9995 28L13.4861 24.8881Z" fill="#9747FF"/>
</svg>
        </div>
    </router-link>
        <!--  -->
    </div>
</template>


<style>
@import './styles/connectingstyle.css';
</style>