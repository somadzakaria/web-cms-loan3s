import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
Vue.config.productionTip = false;
Vue.config.delimiters = ['${', '}'];
import VueGoogleCharts from "vue-google-charts";
import CKEditor from '@ckeditor/ckeditor5-vue2';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
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
