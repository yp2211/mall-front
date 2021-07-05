import { createApp, h } from 'vue'
import App from './App.vue'
import router from "./router";
import i18n from './i18n';
import axios from 'axios';
import VueAxios from 'vue-axios';
// import { jQuery } from 'jquery';
// // import VueLazyLoad from 'vue-lazyload';
// // import VueCookie from 'vue-cookie';
// // import store from './store'
// // import path from 'path'

// window.$=window.jQuery=window.$jQuery=jQuery;

const app = createApp(App);
app.use(router);
app.use(i18n);
// app.use(jQuery, {
//     jQuery: jQuery,
//     $: jQuery,
//     $jQuery: jQuery
// })
console.log("main.js Ln.23")
// app.use(store);
// app.use({
//     install: function(Vue, options){
//         Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
// //         }
// //     });
app.use(VueAxios,axios);
// // app.use(VueCookie);
// app.use(VueLazyLoad,{
//   loading:'/imgs/loading-svg/loading-bars.svg'
// })
// Vue.prototype.$message = Message;
// Vue.config.productionTip = false
app.mount('#app');
// createApp(App).mount('#app')

