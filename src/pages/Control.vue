<template>
    <div class="control_main">
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
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z" fill="white"/>
</svg>
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

        <div class="profile_sect">
            <div>
                <img src="/auto_home/auto_home_profile.png" alt="">
            </div>
            <div class="prof_dtls">
                <div class="txt_mlvn">Hi, Melvin</div>
                <div class="txt_wlcm_bck">Welcome back to your smart home</div>
            </div>
        </div>

        <!--  -->
        <div class="device_div">
            <div class="txt_devices">Devices</div>
            <router-link :to="{ name: 'adddevice'}">
            <div>
                <button class="add_device_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="white"/>
</svg>
                    Add Device</button>
            </div>
        </router-link>
        </div>

        <!--  -->
        <div class="list_devices">
            <div class="outer_device_box">
                <img src="/auto_home/auto_home_prdct4.png" alt="">
                <div class="txt_device_speaker">Smart Speaker</div>
                <div class="txt_device_speaker2">Melvin’s <br> Apple <br> HomePod</div>
                <div class="on_off_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42" fill="none">
  <rect x="24" width="42" height="24" rx="12" transform="rotate(90 24 0)" fill="#CBCED5"/>
  <circle cx="12" cy="30" r="11" transform="rotate(90 12 30)" fill="white"/>
</svg>
                </div>
            </div>
            <!-- 2 -->
            <div class="outer_device_box">
                <img src="/auto_home/auto_home_prdct4.png" alt="">
                <div class="txt_device_speaker">Smart Humidifier</div>
                <div class="txt_device_speaker2">Philips <br> AirSole Smart <br> Humidifier</div>
                <div class="on_off_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="42" viewBox="0 0 24 42" fill="none">
  <rect x="24" width="42" height="24" rx="12" transform="rotate(90 24 0)" fill="#9747FF"/>
  <circle cx="12" cy="12" r="11" transform="rotate(-90 12 12)" fill="white"/>
</svg>
                </div>
            </div>

        </div>

        <!--  -->

        <div class="device_div2">
            <div class="txt_devices">Scenes</div>
            <div>
                <button class="add_device_btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="white"/>
</svg>
                    Add Scene</button>
            </div>
        </div>
        <!--  -->

        <div class="scenes_imgs">
            <div class="outer_scene_box">
                <img src="/auto_home/auto_home_scene1.png" alt="">
                <div class="txt_season">Winter Season</div>
            </div>
            <div class="outer_scene_box2">
                <img src="/auto_home/auto_home_scene2.png" alt="">
                <div class="txt_season">Winter Evening</div>
            </div>

            <div class="outer_scene_box2">
                <img src="/auto_home/auto_home_scene1.png" alt="">
                <div class="txt_season">Winter Season</div>
            </div>
            <div class="outer_scene_box2">
                <img src="/auto_home/auto_home_scene2.png" alt="">
                <div class="txt_season">Winter Evening</div>
            </div>
        </div>
    </div>
</template>


<style>
@import './styles/controlstyle.css';
</style>