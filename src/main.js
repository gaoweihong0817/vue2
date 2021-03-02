import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
Vue.prototype.$axios = axios

import './vants/vant'
import 'vant/lib/index.css';
// import Vant from 'vant';
// import 'vant/lib/index.css';

// Vue.use(Vant);

import '@/assets/iconfont/font_2394605_okeixit5bna/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')