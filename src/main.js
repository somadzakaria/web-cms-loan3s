import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
Vue.config.productionTip = false;
import VueGoogleCharts from "vue-google-charts";

Vue.use(VueGoogleCharts);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
