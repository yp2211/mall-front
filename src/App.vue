<template>
  <site-header />
  <router-view />
  <site-footer />
</template>

<script>
import SiteHeader from './components/SiteHeader/index.vue'
import SiteFooter from './components/SiteFooter/index.vue'

export default {
  name: 'App',
  components: {
    SiteHeader, SiteFooter
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

