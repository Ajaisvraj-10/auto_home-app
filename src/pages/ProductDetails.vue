<template>
    <div class="prdct_details_main">
        <div class="header_part">
            <div class="header_parts_prdct">
                <div class="location_part_prdct">
                    <div class="section_one_prdct">
                      <router-link :to="{ name: 'productlist'}">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M3.82843 6.97154H16V9.02858H3.82843L9.1924 14.5455L7.7782 16L0 8.00006L7.7782 0L9.1924 1.45454L3.82843 6.97154Z" fill="white"/>
</svg>
                      </router-link>
                    </div>
                </div>
                <!-- 2 -->
                <div class="search_cart">
                    <div class="search_box">
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <g clip-path="url(#clip0_19_41)">
    <path d="M20.9401 19.1067L26 24.1666L24.3292 25.8374L19.2693 20.7775C17.4499 22.2331 15.1427 23.1038 12.6332 23.1038C6.76368 23.1038 2 18.3402 2 12.4706C2 6.60108 6.76368 1.8374 12.6332 1.8374C18.5028 1.8374 23.2664 6.60108 23.2664 12.4706C23.2664 14.9801 22.3957 17.2874 20.9401 19.1067ZM18.5697 18.23C20.0144 16.7412 20.9035 14.7102 20.9035 12.4706C20.9035 7.90129 17.2025 4.20034 12.6332 4.20034C8.06389 4.20034 4.36294 7.90129 4.36294 12.4706C4.36294 17.04 8.06389 20.7409 12.6332 20.7409C14.8728 20.7409 16.9038 19.8518 18.3926 18.4071L18.5697 18.23Z" fill="white"/>
  </g>
  <defs>
    <clipPath id="clip0_19_41">
      <rect width="24" height="24" fill="white"/>
    </clipPath>
  </defs>
</svg>
                        </div>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="26" viewBox="0 0 27 26" fill="none">
  <path d="M2.31669 17.0542V3.15409H0V0.837402H3.47503C4.11478 0.837402 4.63338 1.35602 4.63338 1.99575V15.8959H19.0414L21.358 6.62913H6.95007V4.31244H22.8417C23.4814 4.31244 24 4.83105 24 5.47078C24 5.56549 23.9884 5.65985 23.9654 5.75173L21.0695 17.3351C20.9407 17.8508 20.4774 18.2126 19.9458 18.2126H3.47503C2.8353 18.2126 2.31669 17.694 2.31669 17.0542ZM4.63338 25.1626C3.35391 25.1626 2.31669 24.1255 2.31669 22.846C2.31669 21.5664 3.35391 20.5293 4.63338 20.5293C5.91285 20.5293 6.95007 21.5664 6.95007 22.846C6.95007 24.1255 5.91285 25.1626 4.63338 25.1626ZM18.5335 25.1626C17.254 25.1626 16.2169 24.1255 16.2169 22.846C16.2169 21.5664 17.254 20.5293 18.5335 20.5293C19.813 20.5293 20.8502 21.5664 20.8502 22.846C20.8502 24.1255 19.813 25.1626 18.5335 25.1626Z" fill="white"/>
  <circle cx="22.0086" cy="5.47078" r="4.63338" fill="#FF9417"/>
</svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- product-image -->
        <div class="container2">
          <div class="prdct_image_box">
            <img src="/auto_home/auto_home_prdct_dtls.png" alt="">
        </div>
        <div class="prdct_side_imgs">
            <div class="frst_side_img">
                <img src="/auto_home/auto_home_prdct_dtls.png" alt="">

            </div>
            <!--  -->
            <div class="scnd_side_img">
                <img src="/auto_home/auto_home_prdct_dtls.png" alt="">
                <div class="ply_svg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z" fill="#E6E6E6"/>
</svg>
                </div>
            </div>
            <!--  -->
            <div class="thrd_side_img">
                <img src="/auto_home/auto_home_sideimg3.png" alt="">
            </div>

            <!--  -->
            <div class="frth_side_img">
                <img src="/auto_home/auto_home_sideimg4.png" alt="">
                <div class="inner_num">+2</div>
            </div>
        </div>
      </div>
        <!-- prdct-details -->
        <div class="prdct_name_dtls">
            <div class="prdct_title">Google Nest Mini (2nd Gen) with Google Assistant</div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38" fill="none">
  <circle cx="19" cy="19" r="18.5" stroke="#D9D9D9"/>
  <path d="M23.5 11C26.5376 11 29 13.5 29 17C29 24 21.5 28 19 29.5C16.5 28 9 24 9 17C9 13.5 11.5 11 14.5 11C16.36 11 18 12 19 13C20 12 21.64 11 23.5 11ZM19.9339 26.6038C20.8155 26.0485 21.61 25.4955 22.3549 24.9029C25.3337 22.533 27 19.9435 27 17C27 14.6408 25.463 13 23.5 13C22.4241 13 21.2593 13.5691 20.4142 14.4142L19 15.8284L17.5858 14.4142C16.7407 13.5691 15.5759 13 14.5 13C12.5591 13 11 14.6565 11 17C11 19.9435 12.6663 22.533 15.6451 24.9029C16.39 25.4955 17.1845 26.0485 18.0661 26.6038C18.3646 26.7919 18.6611 26.9729 19 27.1752C19.3389 26.9729 19.6354 26.7919 19.9339 26.6038Z" fill="#252323"/>
</svg>
            </div>
        </div>
        <br>
        <div class="prdct_ratng">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.39212 9.67032L2.68389 11.746L3.51209 7.57785L0.39209 4.69258L4.61216 4.19222L6.39212 0.333313L8.17204 4.19222L12.3921 4.69258L9.27213 7.57785L10.1003 11.746L6.39212 9.67032Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.39212 9.67032L2.68389 11.746L3.51209 7.57785L0.39209 4.69258L4.61216 4.19222L6.39212 0.333313L8.17204 4.19222L12.3921 4.69258L9.27213 7.57785L10.1003 11.746L6.39212 9.67032Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.39212 9.67032L2.68389 11.746L3.51209 7.57785L0.39209 4.69258L4.61216 4.19222L6.39212 0.333313L8.17204 4.19222L12.3921 4.69258L9.27213 7.57785L10.1003 11.746L6.39212 9.67032Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.39212 9.67032L2.68389 11.746L3.51209 7.57785L0.39209 4.69258L4.61216 4.19222L6.39212 0.333313L8.17204 4.19222L12.3921 4.69258L9.27213 7.57785L10.1003 11.746L6.39212 9.67032Z" fill="#FF9F2E"/>
</svg>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <path d="M6.39212 9.67032L2.68389 11.746L3.51209 7.57785L0.39209 4.69258L4.61216 4.19222L6.39212 0.333313L8.17204 4.19222L12.3921 4.69258L9.27213 7.57785L10.1003 11.746L6.39212 9.67032ZM6.39212 8.46534L8.62474 9.71506L8.12609 7.20553L10.0046 5.46835L7.46377 5.16707L6.39212 2.84369L5.32043 5.16707L2.77961 5.46835L4.6581 7.20553L4.15945 9.71506L6.39212 8.46534Z" fill="#FF9F2E"/>
</svg>
                </div>
                <!--  -->

        <div class="txt_review">4500 Rating & 3000 Reviews</div>
        <div class="prdct_dtls_price">
            <div class="dtls_price1">₹3999</div>
            <div class="dtls_price2">₹4499</div>
        </div>
        <!--  -->
        <div class="actve_emi">
          <div class="emi_dtls">No Cost EMI Available</div>
          <div class="actve_btn">
            <div class="txt_actve">Activate Now</div>
          </div>
        </div>
        <!--  -->
        <br>
        <div class="txt_dlvry">Delivery to</div>
        <!--  -->
        <div class="address_box">
          <div class="prson_name">Melvin Joshy 68005</div>
          <div class="prson_name2">Pallipadan House PO <br> Thalore Konikkara Thrissur <br> Kerala</div>

          <div class="icon_boxes">
            <div class="outer_boxicon1">
              <div class="edit_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M15.7279 9.57629L14.3137 8.16207L5 17.4758V18.89H6.41421L15.7279 9.57629ZM17.1421 8.16207L18.5563 6.74786L17.1421 5.33365L15.7279 6.74786L17.1421 8.16207ZM7.24264 20.89H3V16.6474L16.435 3.21233C16.8256 2.8218 17.4587 2.8218 17.8492 3.21233L20.6777 6.04075C21.0682 6.43128 21.0682 7.06444 20.6777 7.45497L7.24264 20.89Z" fill="black"/>
</svg>
              </div>
            </div>
            <!--  -->
            <div class="outer_boxicon1">
              <div class="edit_icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z" fill="black"/>
</svg>
              </div>
            </div>

          </div>
        </div>
        <!--  -->

        <div class="dlvry_detils">
          <div class="txt_green"> Free </div><div class="txt_light"> ₹40 </div><div class="txt_dlvry_date"> Delivery By 26 May Monday</div>
        </div>
        <!--  -->
        <br>
        <div class="txt_specifton">Specifications</div>
        <!--  -->
        <div class="spec_dtls_box">
          <li class="spec_dtls">Voice activated smart speaker with the</li>
          <div class="end_line">Google Assistant</div>
          <li class="spec_dtls">Available in Hindi</li>
          <li class="spec_dtls">2X stronger bass than Google Home Mini</li>
          <li class="spec_dtls">Wall-mount ready</li>
          <li class="spec_dtls">Play music, control other smart devices in </li>
          <div class="end_line">home</div>
          <li class="spec_dtls">Wireless music streaming via Bluetooth</li>
          <li class="spec_dtls">Configuration: Mono</li>
        </div>

        <div class="copy_btn_div">
          <button class="spec_copy_btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z" fill="black"/>
</svg>Copy Spec
        </button>
        </div>
        <!--  -->

        <!-- rating & review-section -->

        <div class="txt_rating_review">Rating & Reviews</div>
        <!-- review-box -->
        <div class="rating_review_box">

          <div class="inner_circle">
            <div class="rating_point">4.5</div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z" fill="#07A717"/>
</svg>
            </div>
          </div>
          <div class="rating_circle">
            <svg xmlns="http://www.w3.org/2000/svg" width="175" height="175" viewBox="0 0 175 175" fill="none">
  <path d="M150.232 87.5523C150.232 122.169 122.169 150.232 87.5525 150.232C52.9356 150.232 24.873 122.169 24.873 87.5523C24.873 52.9354 52.9356 24.8728 87.5525 24.8728C122.169 24.8728 150.232 52.9354 150.232 87.5523ZM36.3859 87.5523C36.3859 115.811 59.294 138.719 87.5525 138.719C115.811 138.719 138.719 115.811 138.719 87.5523C138.719 59.2937 115.811 36.3856 87.5525 36.3856C59.294 36.3856 36.3859 59.2937 36.3859 87.5523Z" fill="#E6E6E6"/>
  <path d="M54.2085 41.3273C52.3491 38.7485 48.7308 38.1463 46.3334 40.2342C36.3803 48.9026 29.3776 60.5312 26.4059 73.4914C23.0036 88.3291 25.1175 103.898 32.3529 117.291C39.5883 130.685 51.4506 140.987 65.7253 146.276C80 151.564 95.7115 151.477 109.927 146.03C124.142 140.583 135.889 130.149 142.975 116.676C150.061 103.203 152.001 87.612 148.434 72.813C144.867 58.014 136.036 45.0188 123.59 36.2536C112.719 28.5976 99.739 24.6257 86.5418 24.8277C83.363 24.8764 81.0736 27.7423 81.4135 30.9032C81.7535 34.0642 84.596 36.3169 87.7751 36.334C98.1828 36.3898 108.377 39.6212 116.961 45.6664C127.121 52.8217 134.33 63.4299 137.242 75.5107C140.154 87.5914 138.57 100.319 132.785 111.317C127.001 122.316 117.411 130.833 105.807 135.279C94.2032 139.726 81.3776 139.797 69.7248 135.48C58.072 131.163 48.3885 122.753 42.4821 111.819C36.5757 100.886 34.8501 88.1768 37.6275 76.0644C39.974 65.8311 45.3991 56.6147 53.1047 49.6185C55.4584 47.4814 56.0678 43.9061 54.2085 41.3273Z" fill="#0DAE1D"/>
</svg>
          </div>

          <div class="total_txt">4500 Rating & 3000 Reviews</div>

          <!-- spec-rating -->

          <div class="spect_rating_box">
            <div class="spec_bass">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 175 175" fill="none">
  <path d="M150.232 87.5523C150.232 122.169 122.169 150.232 87.5525 150.232C52.9356 150.232 24.873 122.169 24.873 87.5523C24.873 52.9354 52.9356 24.8728 87.5525 24.8728C122.169 24.8728 150.232 52.9354 150.232 87.5523ZM36.3859 87.5523C36.3859 115.811 59.294 138.719 87.5525 138.719C115.811 138.719 138.719 115.811 138.719 87.5523C138.719 59.2937 115.811 36.3856 87.5525 36.3856C59.294 36.3856 36.3859 59.2937 36.3859 87.5523Z" fill="#E6E6E6"/>
  <path d="M54.2085 41.3273C52.3491 38.7485 48.7308 38.1463 46.3334 40.2342C36.3803 48.9026 29.3776 60.5312 26.4059 73.4914C23.0036 88.3291 25.1175 103.898 32.3529 117.291C39.5883 130.685 51.4506 140.987 65.7253 146.276C80 151.564 95.7115 151.477 109.927 146.03C124.142 140.583 135.889 130.149 142.975 116.676C150.061 103.203 152.001 87.612 148.434 72.813C144.867 58.014 136.036 45.0188 123.59 36.2536C112.719 28.5976 99.739 24.6257 86.5418 24.8277C83.363 24.8764 81.0736 27.7423 81.4135 30.9032C81.7535 34.0642 84.596 36.3169 87.7751 36.334C98.1828 36.3898 108.377 39.6212 116.961 45.6664C127.121 52.8217 134.33 63.4299 137.242 75.5107C140.154 87.5914 138.57 100.319 132.785 111.317C127.001 122.316 117.411 130.833 105.807 135.279C94.2032 139.726 81.3776 139.797 69.7248 135.48C58.072 131.163 48.3885 122.753 42.4821 111.819C36.5757 100.886 34.8501 88.1768 37.6275 76.0644C39.974 65.8311 45.3991 56.6147 53.1047 49.6185C55.4584 47.4814 56.0678 43.9061 54.2085 41.3273Z" fill="#0DAE1D"/>
</svg>
              </div>
              <div class="txt_bass_div">
                <div class="bass_rtng">3.9</div>
              <div class="txt_bass">Bass</div>
              </div>
            </div>
            <!--  -->
            <div class="spec_bass">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 175 175" fill="none">
  <path d="M150.232 87.5523C150.232 122.169 122.169 150.232 87.5525 150.232C52.9356 150.232 24.873 122.169 24.873 87.5523C24.873 52.9354 52.9356 24.8728 87.5525 24.8728C122.169 24.8728 150.232 52.9354 150.232 87.5523ZM36.3859 87.5523C36.3859 115.811 59.294 138.719 87.5525 138.719C115.811 138.719 138.719 115.811 138.719 87.5523C138.719 59.2937 115.811 36.3856 87.5525 36.3856C59.294 36.3856 36.3859 59.2937 36.3859 87.5523Z" fill="#E6E6E6"/>
  <path d="M54.2085 41.3273C52.3491 38.7485 48.7308 38.1463 46.3334 40.2342C36.3803 48.9026 29.3776 60.5312 26.4059 73.4914C23.0036 88.3291 25.1175 103.898 32.3529 117.291C39.5883 130.685 51.4506 140.987 65.7253 146.276C80 151.564 95.7115 151.477 109.927 146.03C124.142 140.583 135.889 130.149 142.975 116.676C150.061 103.203 152.001 87.612 148.434 72.813C144.867 58.014 136.036 45.0188 123.59 36.2536C112.719 28.5976 99.739 24.6257 86.5418 24.8277C83.363 24.8764 81.0736 27.7423 81.4135 30.9032C81.7535 34.0642 84.596 36.3169 87.7751 36.334C98.1828 36.3898 108.377 39.6212 116.961 45.6664C127.121 52.8217 134.33 63.4299 137.242 75.5107C140.154 87.5914 138.57 100.319 132.785 111.317C127.001 122.316 117.411 130.833 105.807 135.279C94.2032 139.726 81.3776 139.797 69.7248 135.48C58.072 131.163 48.3885 122.753 42.4821 111.819C36.5757 100.886 34.8501 88.1768 37.6275 76.0644C39.974 65.8311 45.3991 56.6147 53.1047 49.6185C55.4584 47.4814 56.0678 43.9061 54.2085 41.3273Z" fill="#0DAE1D"/>
</svg>
              </div>
              <div class="txt_bass_div">
                <div class="bass_rtng">4.1</div>
              <div class="txt_bass">Sound</div>
              </div>
            </div>
            <!--  -->
            <div class="spec_bass">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 175 175" fill="none">
  <path d="M150.232 87.5523C150.232 122.169 122.169 150.232 87.5525 150.232C52.9356 150.232 24.873 122.169 24.873 87.5523C24.873 52.9354 52.9356 24.8728 87.5525 24.8728C122.169 24.8728 150.232 52.9354 150.232 87.5523ZM36.3859 87.5523C36.3859 115.811 59.294 138.719 87.5525 138.719C115.811 138.719 138.719 115.811 138.719 87.5523C138.719 59.2937 115.811 36.3856 87.5525 36.3856C59.294 36.3856 36.3859 59.2937 36.3859 87.5523Z" fill="#E6E6E6"/>
  <path d="M54.2085 41.3273C52.3491 38.7485 48.7308 38.1463 46.3334 40.2342C36.3803 48.9026 29.3776 60.5312 26.4059 73.4914C23.0036 88.3291 25.1175 103.898 32.3529 117.291C39.5883 130.685 51.4506 140.987 65.7253 146.276C80 151.564 95.7115 151.477 109.927 146.03C124.142 140.583 135.889 130.149 142.975 116.676C150.061 103.203 152.001 87.612 148.434 72.813C144.867 58.014 136.036 45.0188 123.59 36.2536C112.719 28.5976 99.739 24.6257 86.5418 24.8277C83.363 24.8764 81.0736 27.7423 81.4135 30.9032C81.7535 34.0642 84.596 36.3169 87.7751 36.334C98.1828 36.3898 108.377 39.6212 116.961 45.6664C127.121 52.8217 134.33 63.4299 137.242 75.5107C140.154 87.5914 138.57 100.319 132.785 111.317C127.001 122.316 117.411 130.833 105.807 135.279C94.2032 139.726 81.3776 139.797 69.7248 135.48C58.072 131.163 48.3885 122.753 42.4821 111.819C36.5757 100.886 34.8501 88.1768 37.6275 76.0644C39.974 65.8311 45.3991 56.6147 53.1047 49.6185C55.4584 47.4814 56.0678 43.9061 54.2085 41.3273Z" fill="#0DAE1D"/>
</svg>
              </div>
              <div class="txt_bass_div">
                <div class="bass_rtng">3.9</div>
              <div class="txt_bass">Design</div>
              </div>
            </div>
            <!--  -->
            <div class="spec_bass">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="85" height="85" viewBox="0 0 175 175" fill="none">
  <path d="M150.232 87.5523C150.232 122.169 122.169 150.232 87.5525 150.232C52.9356 150.232 24.873 122.169 24.873 87.5523C24.873 52.9354 52.9356 24.8728 87.5525 24.8728C122.169 24.8728 150.232 52.9354 150.232 87.5523ZM36.3859 87.5523C36.3859 115.811 59.294 138.719 87.5525 138.719C115.811 138.719 138.719 115.811 138.719 87.5523C138.719 59.2937 115.811 36.3856 87.5525 36.3856C59.294 36.3856 36.3859 59.2937 36.3859 87.5523Z" fill="#E6E6E6"/>
  <path d="M54.2085 41.3273C52.3491 38.7485 48.7308 38.1463 46.3334 40.2342C36.3803 48.9026 29.3776 60.5312 26.4059 73.4914C23.0036 88.3291 25.1175 103.898 32.3529 117.291C39.5883 130.685 51.4506 140.987 65.7253 146.276C80 151.564 95.7115 151.477 109.927 146.03C124.142 140.583 135.889 130.149 142.975 116.676C150.061 103.203 152.001 87.612 148.434 72.813C144.867 58.014 136.036 45.0188 123.59 36.2536C112.719 28.5976 99.739 24.6257 86.5418 24.8277C83.363 24.8764 81.0736 27.7423 81.4135 30.9032C81.7535 34.0642 84.596 36.3169 87.7751 36.334C98.1828 36.3898 108.377 39.6212 116.961 45.6664C127.121 52.8217 134.33 63.4299 137.242 75.5107C140.154 87.5914 138.57 100.319 132.785 111.317C127.001 122.316 117.411 130.833 105.807 135.279C94.2032 139.726 81.3776 139.797 69.7248 135.48C58.072 131.163 48.3885 122.753 42.4821 111.819C36.5757 100.886 34.8501 88.1768 37.6275 76.0644C39.974 65.8311 45.3991 56.6147 53.1047 49.6185C55.4584 47.4814 56.0678 43.9061 54.2085 41.3273Z" fill="#0DAE1D"/>
</svg>
              </div>
              <div class="txt_bass_div">
                <div class="bass_rtng">3.9</div>
              <div class="txt_bass">Battery</div>
              </div>
            </div>
          </div>
          <div class="review_imgs">
            <div class="review_img1"><img src="/auto_home/review_img1.png" alt=""></div>
            <div class="review_img1"><img src="/auto_home/review_img2.png" alt=""></div>
            <div class="review_img1"><img src="/auto_home/review_img3.png" alt=""></div>
            <div class="review_img1"><img src="/auto_home/review_img4.png" alt=""></div>
          </div>

          <div class="copy_btn_div2">
          <button class="spec_copy_btn2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M7 4V2H17V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H7ZM7 6H5V20H19V6H17V8H7V6ZM9 4V6H15V4H9Z" fill="black"/>
</svg>Copy Spec
        </button>
        </div>
        </div>
        <!--  -->

        <div class="btn_div_bck_to_top">
            <button class="back_to_top">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M12.9999 7.82843V20H10.9999V7.82843L5.63589 13.1924L4.22168 11.7782L11.9999 4L19.778 11.7782L18.3638 13.1924L12.9999 7.82843Z" fill="#252323"/>
</svg>Back to top
        </button>
        </div>

        <!-- add to cart button -->
        <router-link :to="{ name: 'productcart'}">
        <div class="addto_cart_div">
          <button class="addto_btn">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z" fill="white"/>
</svg> Add to Cart
        </button>
        </div>
      </router-link>
    
 
       
    </div>
</template>


<style>
@import './styles/productdetailsstyle.css';
</style>