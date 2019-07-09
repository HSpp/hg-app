import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/custom.less';
import interfaceUrl from './requset/interface'
import {requireComponents} from './needsComponents'
requireComponents();
Vue.config.productionTip = false
Vue.prototype.interfaceUrl=interfaceUrl;

let $vue=new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
