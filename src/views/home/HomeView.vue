<template>
    <header-area></header-area>
    <router-view class="main-wrapper main-wrapper-2" ></router-view>
    <bottom-footer></bottom-footer>
</template>

<script>
import HeaderArea from '../../components/HeaderArea.vue'
import BottomFooter from '../../components/BottomFooter.vue'

export default {
    components: { HeaderArea, BottomFooter },
    name: 'home-view'
}
</script>

<style>

@import '../../assets/themes/bag/css/vendor/bootstrap.min.css';
@import '../../assets/themes/bag/css/vendor/font-awesome.min.css';
@import '../../assets/themes/bag/css/vendor/ionicons.min.css';
@import '../../assets/themes/bag/css/vendor/eleganticons.css';
@import '../../assets/themes/bag/css/plugins/swiper.min.css';
/*@import '../../assets/themes/bag/css/plugins/select2.min.css';
@import '../../assets/themes/bag/css/plugins/nice-select.css';
@import '../../assets/themes/bag/css/plugins/animate.css';
@import '../../assets/themes/bag/css/plugins/magnific-popup.css';
@import '../../assets/themes/bag/css/plugins/easyzoom.css';
@import '../../assets/themes/bag/css/plugins/slinky.css'; */
/* @import '../../assets/themes/bag/css/plugins/jquery-ui.css'; */
/* @import '../../assets/themes/bag/css/plugins/jquery.mb.ytplayer.min.css'; */
@import '../../assets/themes/bag/css/style.css';
</style>

