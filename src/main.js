import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import request from './utils/request'
import Vant from 'vant';
import 'vant/lib/index.css';

import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint)
Vue.use(Vant);

Vue.config.productionTip = false
Vue.prototype.$http = request
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
