import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SplitLine from "./components/SplitLine/SplitLine";

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.component('SplitLine',SplitLine)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
