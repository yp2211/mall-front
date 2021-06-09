import { createApp, h } from 'vue'
import App from './App.vue'
import router from "./router";
import './assets/themes/default/css/style.less'

import i18n from './i18n'



const app = createApp(App);
app.use(router);
app.use(i18n)
app.mount('#app')
// createApp(App).mount('#app')

