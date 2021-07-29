<template>
  <!-- Log in start -->
  <div class="modal popup-login-style" id="loginActive">
    <div class="modal-overlay">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-body">
            <div class="login-content">
              <h2>Log in</h2>
              <h3>Log in your account</h3>
              <!-- <form @submit.prevent="login"> -->
              <form>
                <input required v-model="username" type="text" placeholder="Username" />
                <input required v-model="password" type="password" placeholder="Password" />
                <div class="remember-forget-wrap">
                  <div class="remember-wrap">
                    <input type="checkbox" />
                    <p>Remember</p>
                    <span class="checkmark"></span>
                  </div>
                  <div class="forget-wrap">
                    <a href="#">Forgot your password?</a>
                  </div>
                </div>
                <!-- <button type="submit">Log in</button> -->
                <button data-bs-dismiss="modal" v-on:click="login">Log in</button>
                <div class="member-register">
                  <p>
                    Not a member?
                    <a href="/login-register"> Register now</a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Log in end -->
</template>

<script>
import { AUTH_REQUEST } from "../store/actions/auth";

export default {
    name: "ModalLogin",
    data() {
        return {
            username: 'test',
            password: 'macro123'
        }
    },
    methods: {
        login: function() {
            const { username, password } = this;
            this.$store.dispatch(AUTH_REQUEST, { username, password }).then(() => {
                this.$router.push("/");
            });
        },
    }
}
</script>