import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/custom.less';
import {requireComponents} from './needsComponents'
requireComponents();
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
