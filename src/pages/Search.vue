<template>
    <div class="search_main">
        <div class="main_inpt_top">
            <div class="search_box_main">
                <router-link :to="{ name: 'home'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
  <path d="M3.88336 7.00005H16.0549V9.00005H3.88336L9.24733 14.364L7.83313 15.7782L0.0549316 8.00005L7.83313 0.221832L9.24733 1.63604L3.88336 7.00005Z" fill="#252323"/>
</svg>
                </router-link>
<div><input class="search_inpt" type="text" placeholder="Search Smart Products"></div>
            </div>
            <!-- 2 -->
            <div class="mic_svg_sect">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="22" viewBox="0 0 18 22" fill="none">
  <path d="M8.9998 2C7.3429 2 5.99976 3.34315 5.99976 5V9C5.99976 10.6569 7.3429 12 8.9998 12C10.6566 12 11.9998 10.6569 11.9998 9V5C11.9998 3.34315 10.6566 2 8.9998 2ZM8.9998 0C11.7612 0 13.9998 2.23858 13.9998 5V9C13.9998 11.7614 11.7612 14 8.9998 14C6.23833 14 3.99976 11.7614 3.99976 9V5C3.99976 2.23858 6.23833 0 8.9998 0ZM0.0546875 10H2.07065C2.55588 13.3923 5.47329 16 8.9998 16C12.5262 16 15.4436 13.3923 15.9289 10H17.9448C17.4837 14.1716 14.1714 17.4839 9.9998 17.9451V22H7.9998V17.9451C3.82814 17.4839 0.515837 14.1716 0.0546875 10Z" fill="#424141"/>
</svg>
                </div>
            </div>
           
        </div>
        <!-- search-suggestions -->
        <div class="suggestion_box1">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5H4C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C9.25022 4.5 6.82447 5.88734 5.38451 8.00024L8 8V10H2V4H4L3.99989 6.49918C5.82434 4.07075 8.72873 2.5 12 2.5ZM13 7.5L12.9998 12.085L16.2426 15.3284L14.8284 16.7426L10.9998 12.913L11 7.5H13Z" fill="#252323"/>
</svg>
            </div>
            <div class="suggest_txt_dtls">
                <router-link :to="{ name: 'productlist'}">
                <div class="txt_suggest1">AmazonAlexa</div>
                </router-link>
                <div class="txt_suggest2">In Speakers</div>
            </div>
        </div>
        <div class="his_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#9D9D9D"/>
</svg>
                </div>
                <!-- suggestion2 -->

                <div class="suggestion_box2">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M12 2.5C17.5228 2.5 22 6.97715 22 12.5C22 18.0228 17.5228 22.5 12 22.5C6.47715 22.5 2 18.0228 2 12.5H4C4 16.9183 7.58172 20.5 12 20.5C16.4183 20.5 20 16.9183 20 12.5C20 8.08172 16.4183 4.5 12 4.5C9.25022 4.5 6.82447 5.88734 5.38451 8.00024L8 8V10H2V4H4L3.99989 6.49918C5.82434 4.07075 8.72873 2.5 12 2.5ZM13 7.5L12.9998 12.085L16.2426 15.3284L14.8284 16.7426L10.9998 12.913L11 7.5H13Z" fill="#252323"/>
</svg>
            </div>
            <div class="suggest_txt_dtls2">
                <div class="txt_suggest3">AmazonAlexa</div>
                <div class="txt_suggest4">In Speakers</div>
            </div>
        </div>
        <div class="his_svg2">
                    <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0007 10.5865L16.9504 5.63672L18.3646 7.05093L13.4149 12.0007L18.3646 16.9504L16.9504 18.3646L12.0007 13.4149L7.05093 18.3646L5.63672 16.9504L10.5865 12.0007L5.63672 7.05093L7.05093 5.63672L12.0007 10.5865Z" fill="#9D9D9D"/>
</svg>
                </div>
    </div>
</template>

<style>
@import './styles/searchstyle.css';
</style>