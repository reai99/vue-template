import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.filter('dataFormat', function (originVal) {
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  return `${y}-${m}-${d}`
})

Vue.filter('dataFormatMD', function (originVal) {
  const dt = new Date(originVal)
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  return `${m}月${d}日更新`
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
