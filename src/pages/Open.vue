<template>
    <div class="main_frame">
        <div class="main_txt">Smart Your Home Today</div>
        <div class="open_img"><img  src="/auto_home/ecomm_open_img.png" alt=""></div>
        <router-link :to="{ name: 'register'}">
        <div class="btn_div">
            <button class="btn_getstarted">Get Started</button>
        </div>
        </router-link>
    </div>
</template>

<style>
@import './styles/openstyle.css';


</style>