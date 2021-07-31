<template>
  <div class="breadcrumb-area section-padding-1 breadcrumb-ptb-1">
      <div class="container-fluid">
          <div class="breadcrumb-content text-center">
              <h2 class="mrg">Login Register </h2>
              <ul>
                  <li><a href="/">Home</a></li>
                  <li><i class="ion-ios-arrow-right"></i></li>
                  <li>Login / Register</li>
              </ul>
          </div>
      </div>
  </div>
  <div class="login-register-area pb-120">
      <div class="container">
          <div class="login-register-content">
              <h3>Log in your account</h3>
              <form>
                  <div class="row">
                      <div class="col-lg-5 col-md-4">
                          <div class="login-register-input">
                              <input type="text" placeholder="Email Adress" v-model="username">
                          </div>
                      </div>
                      <div class="col-lg-5 col-md-4">
                          <div class="login-register-input">
                              <input type="password" placeholder="Password" v-model="password">
                          </div>
                      </div>
                      <div class="col-lg-2 col-md-4">
                          <div class="login-register-btn">
                              <input class="button" value="Login" v-on:click="login">
                          </div>
                      </div>
                  </div>
                  <div class="keep-forgot-wrap">
                      <div class="keep-wrap checkout-checkbox-style-3">
                          <input type="checkbox">
                          <p>Keep me logged in</p>
                          <span class="checkmark"></span>
                      </div>
                      <div class="forget-wrap">
                          <a href="#">Forgot your password?</a>
                      </div>
                  </div>
              </form>
          </div>
          <div class="login-register-content">
              <h3>Don't have an Account? Register now</h3>
              <form action="#">
                  <div class="row">
                      <div class="col-md-4">
                          <div class="login-register-input">
                              <input type="text" placeholder="Username">
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="login-register-input">
                              <input type="email" placeholder="Email Address">
                          </div>
                      </div>
                      <div class="col-md-4">
                          <div class="login-register-input">
                              <input type="password" placeholder="Password">
                          </div>
                      </div>
                  </div>
                  <div class="agree-wrap checkout-checkbox-style-3">
                      <input type="checkbox">
                      <p> Agree to the <a href="#">Terms and Conditions</a> </p>
                      <span class="checkmark"></span>
                  </div>
                  <div class="login-register-btn">
                      <input type="submit" class="button" value="Register">
                  </div>
              </form>
          </div>
      </div>
  </div>
  

                      <!-- <div class="code" @click="refreshCode">
                        <s-identify :identifyCode="identifyCode"></s-identify>
                      </div> -->
</template>

<script>
import SIdentify from '../../components/SIdentify.vue'
import { AUTH_REQUEST } from "../../store/actions/auth";

export default {
  name: "login-register",
  components: {SIdentify},
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: "",
      username: null,
      password: null
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    login: function() {
      const { username, password } = this;
      this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
          this.$router.push("/");
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style>
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
</style>