import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';

import jaJP from './locale/ja-JP.json';
import zhCN from './locale/zh-CN.json';
import enUK from './locale/en-UK.json';

const messages = {
    en : enUK,
    ja : jaJP,
    cn : zhCN
}

export default new createI18n({
    locale: 'ja', 
    messages
})
