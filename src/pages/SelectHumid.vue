<template>
    <div class="select_humid_main">
        

        
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
                        <h5>Select Humidifier</h5>
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
        <div class="wrapper">
        <!--  -->


        <!-- <div class="humid_inpt_div2">
            <input  type="text" placeholder="Search Brand">
            <div class="humid_search">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#252323"/>
</svg>
            </div>
        </div> -->
        <!--  -->

        <div class="txt_suggest5">Suggested</div>

        <div class="suggest_humidifier_box">
            <div class="humid_box1">
                <div class="txt_humids">Vicks</div>
            </div>
            <router-link :to="{ name: 'selecthumid'}">
            <div class="humid_box1">
                <div class="txt_humids">Carepod</div>
            </div>
        </router-link>
            <div class="humid_box1">
                <div class="txt_humids">Xioami</div>
            </div>
            
            <div class="humid_box1">
                <div class="txt_humids">Dyson</div>
            </div>
            <div class="humid_box1">
                <div class="txt_humids">Levoit</div>
            </div>
            <div class="humid_box1">
                <div class="txt_humids">Vitruvi</div>
            </div>
        </div>
        <!--  -->

        <div class="txt_suggest6">All Brands</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">3M</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">ACL</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">Acsom</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">Borler</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">Carepod</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">Cooline</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">3M</div>
        <div class="nxt_line"></div>

        <div class="txt_brands">ACL</div>
        <div class="nxt_line"></div>
    </div>
        <!--  -->
        
    </div>
    <div class="inner_slct_box">
        <div class="slct_mdel_div">
            <div class="inner_txt_humid">Select Model</div>
            <router-link :to="{ name: 'humidifier'}">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#A3A3A3"/>
</svg>
            </div>
        </router-link>
        </div>
        <!--  -->

        <div class="humid_model_box">
            <router-link :to="{ name: 'connecting'}">
            <div class="model_humid1">
                <img src="/auto_home/slct_device3.png" alt="">
                <div class="txt_inner_mdel">Carepod CubeX50</div>
            </div>
            </router-link>

            <div class="model_humid2">
                <img src="/auto_home/slct_device3.png" alt="">
                <div class="txt_inner_mdel">Carepod One</div>
            </div>

            <div class="model_humid2">
                <img src="/auto_home/slct_device3.png" alt="">
                <div class="txt_inner_mdel">Carepod CubeX45Pro</div>
            </div>

            <div class="model_humid2">
                <img src="/auto_home/slct_device3.png" alt="">
                <div class="txt_inner_mdel">Carepod CubeMini</div>
            </div>
        </div>
        <!--  -->

        <div class="inner_txt_humid2">Help</div>
        <div class="sclt_humid_note">Note : If you don’t know model name of product <br> Check it out and then connect</div> <div class="sclt_humid_note2"> Learn More</div>
    </div>
</template>


<style>
@import './styles/selecthumidstyle.css';
</style>