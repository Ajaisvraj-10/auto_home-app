    <template>
        <div class="login_frame">
            <div class="main_logo"><img src="/auto_home/autohome_logo.png" alt=""></div>
            <div class="txt_login_main">Login for get offers in shopping</div>
            <div class="div_btn">
                <button class="btn_signin_google">
                <img src="/auto_home/google_autohome.png" alt="">
                Sign in with Google
            </button>
            </div>
            
            <div class="container">
                <div class="line_or"></div>
        <div class="or_div">
            <div class="txt_or">Or</div>
        </div>
            </div>
       

        <div class="container">
            <div class="email_box">
                <div class="txt_email">Email</div>
                <input class="inpt_box" placeholder="Email & Phone" >
                    <div style="    margin-left: 25px;margin-top: -45px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M4 22.7143C4 18.296 7.58172 14.7143 12 14.7143C16.4183 14.7143 20 18.296 20 22.7143H18C18 19.4006 15.3137 16.7143 12 16.7143C8.68629 16.7143 6 19.4006 6 22.7143H4ZM12 13.7143C8.685 13.7143 6 11.0293 6 7.71429C6 4.39929 8.685 1.71429 12 1.71429C15.315 1.71429 18 4.39929 18 7.71429C18 11.0293 15.315 13.7143 12 13.7143ZM12 11.7143C14.21 11.7143 16 9.92429 16 7.71429C16 5.50429 14.21 3.71429 12 3.71429C9.79 3.71429 8 5.50429 8 7.71429C8 9.92429 9.79 11.7143 12 11.7143Z" fill="#6A6767"/>
</svg>
                    </div>
            </div>
            <!-- 2 -->

            <div class="email_box2">
                <div class="txt_email">Password</div>
                <input class="inpt_box" placeholder="Password" >
                    <div style="    margin-left: 25px;margin-top: -45px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z" fill="#6A6767"/>
</svg>
                    </div>
            </div>
        </div>
            <!-- frgt-psswrd -->
            <div class="txt_forgot">Forgot Password ?</div>
            <!-- login-btn -->
            <router-link :to="{ name: 'home'}">
            <div class="log_div">
                <button class="login_btn">Login</button>
            </div>
            </router-link>
           
            <div class="link_signup">
                <h6>Don't have an account ? <span>Sign Up</span> </h6> <br><br>
                
            </div>  
           
           
        </div>
    </template>



<style>
@import './styles/loginstyle.css';
</style>