/*
 * @Author: your name
 * @Date: 2022-02-12 15:53:45
 * @LastEditTime: 2022-02-14 11:20:56
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \vitecamp\src\main.ts
 */
// i18n
import { createI18n } from 'vue-i18n';
import messages from '@intlify/vite-plugin-vue-i18n/messages';
// vue router
import router from '@/router/index';
// pinia
import store from '@/store';
import App from './App.vue';

import 'virtual:windi.css';
// Devtools: https://windicss.org/integrations/vite.html#design-in-devtools
import 'virtual:windi-devtools';
import '@/assets/styles/index.scss';
import { tips } from '@/utils/mineUtils';


const i18n = createI18n({
  locale: 'en',
  messages,
});

const app = createApp(App);

app.config.globalProperties.$tips = tips;
app.use(router).use(store).use(i18n).mount('#app');
