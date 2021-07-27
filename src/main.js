import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import VueGoogleCharts from "vue-google-charts";
import CKEditor from '@ckeditor/ckeditor5-vue2'; 
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
// V-viewer
import 'viewerjs/dist/viewer.css'
import Viewer from 'v-viewer';
Vue.use(Viewer);
// Sweet Alert
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
Vue.use(VueSweetalert2);
// Vue Moment
import VueMoment from 'vue-moment';
import moment from 'moment-timezone';
Vue.use(VueMoment, {
  moment,
})
moment.locale('id');
// Vue Chart Css
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)
// Apk
Vue.use(Loading,{
  color: '#148DCD',
  height:70,
  zIndex:99999999
});
Vue.use( CKEditor );
Vue.use(VueGoogleCharts);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
