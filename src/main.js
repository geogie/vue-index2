// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Axios from 'axios'//网络请求库对promise（对ajax的封装）的封装
import router from './router/index'
import Element from 'element-ui'// 组件库
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.css'// 图标自体库


Vue.prototype.$http = Axios;
Vue.use(Element);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
