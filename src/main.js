import { createApp, h } from 'vue'
import App from './App.vue'
import router from "./router";
import i18n from './i18n';
// import store from './store'

const app = createApp(App);
// app.prototype.jQuery = jQuery;
// app.prototype.$ = jQuery;

app.use(router);
app.use(i18n);
// app.use(store);
// app.use({
//     install: function(Vue, options){
//         Vue.prototype.$jQuery = require('jquery'); // you'll have this.$jQuery anywhere in your vue project
//         }
//     });

app.mount('#app');
// createApp(App).mount('#app')

