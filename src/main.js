import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
import VueGoogleCharts from "vue-google-charts";
// Good Table
import VueGoodTablePlugin from 'vue-good-table';
import 'vue-good-table/dist/vue-good-table.css'
Vue.use(VueGoodTablePlugin);
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
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading,{
  color: '#148DCD',
  height:70,
  zIndex:99999999
});
import CKEditor from '@ckeditor/ckeditor5-vue2'; 
Vue.use( CKEditor );
Vue.use(VueGoogleCharts);

// import "bootstrap/dist/css/bootstrap.min.css";
import "datatables.net-bs4"
import "datatables.net-bs4/css/dataTables.bootstrap4.css"
import "jszip"
import "datatables.net-buttons-bs4"
import "datatables.net-buttons-bs4/css/buttons.bootstrap4.css";
import "datatables.net-buttons/js/buttons.colVis"
import "datatables.net-buttons/js/buttons.flash"
import "datatables.net-buttons/js/buttons.html5"
import "datatables.net-buttons/js/buttons.print"
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
