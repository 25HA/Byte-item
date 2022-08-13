import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/default.css'

Vue.use(VueHighlightJS)
Vue.config.productionTip = false



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
