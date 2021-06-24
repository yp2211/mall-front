<template>
  <router-view/>
</template>

<script>
// import "./assets/themes/bag/js/main";

export default {
  name: 'App',
  components: {
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    }
  },
  mounted() {
    this.$i18n.locale = 'en';
    // process.env.BASE_API = 'api';
    // if(this.$cookie.get('userId')){
    //   this.getUser();
    //   this.getCartCount();
    // }
  },
  methods:{
    getUser(){
      this.axios.get('/member/center/getMemberInfo').then((res={})=>{
        this.$store.dispatch('saveUserName',res.username);
      })
    },
    getCartCount(){
      this.axios.get('/carts/products/sum').then((res=0)=>{
        this.$store.dispatch('saveCartCount',res);
      })
    }
  }
}

</script>

