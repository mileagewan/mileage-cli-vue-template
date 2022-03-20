import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import { install } from '@/ui-plugin/ant-design-plugin';

Vue.config.productionTip = false;
install(Vue);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
