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
  }
}

</script>

