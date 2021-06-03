import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
