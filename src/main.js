import Vue from "vue";
import App from "./App.vue";
import "@fortawesome/fontawesome-free/css/all.min.css";
import store from './store'
import router from './router'
import './assets/css/reset.css'
import VCalendar from 'v-calendar';
Vue.config.productionTip = false;
Vue.use(VCalendar);
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
