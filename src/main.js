import Vue from "vue";
import App from "./App.vue";
import router from "./router";
<<<<<<< HEAD
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
=======
import store from "./store";
>>>>>>> 7f828623007ff971e6885a341e656b9773c30371
Vue.config.productionTip = false;
import VueGoogleCharts from "vue-google-charts";

Vue.use(VueGoogleCharts);
new Vue({
  router,
<<<<<<< HEAD
=======
  store,
>>>>>>> 7f828623007ff971e6885a341e656b9773c30371
  render: (h) => h(App),
}).$mount("#app");
