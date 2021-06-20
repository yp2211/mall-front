<template>
    <div class="main-wrapper main-wrapper-2">
        <header-area2></header-area2>
        <router-view></router-view>
        <bottom-footer2></bottom-footer2>
    </div>
</template>

<script>
import HeaderArea2 from '../../components/HeaderArea2.vue'
import BottomFooter2 from '../../components/BottomFooter2.vue'

export default {
    components: { HeaderArea2, BottomFooter2 },
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
@import '../../assets/themes/bag/css/plugins/nice-select.css';*/
@import '../../assets/themes/bag/css/plugins/animate.css';
/*@import '../../assets/themes/bag/css/plugins/magnific-popup.css';
@import '../../assets/themes/bag/css/plugins/easyzoom.css';*/
@import '../../assets/themes/bag/css/plugins/slinky.css';
/* @import '../../assets/themes/bag/css/plugins/jquery-ui.css'; */
/* @import '../../assets/themes/bag/css/plugins/jquery.mb.ytplayer.min.css'; */
@import '../../assets/themes/bag/css/style.css';
</style>

