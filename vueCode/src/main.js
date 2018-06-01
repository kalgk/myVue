import Vue from 'vue'
import vuex from 'vuex'
import FastClick from 'fastclick'
import App from './App'
import {XInput, Group, XButton, Cell,Flexbox, FlexboxItem,ToastPlugin} from 'vux'
import headBar from './modules/header/head.vue'
import router from './common/router.js'
import store from './common/store.js'
import api from './common/api.js'
import {getAjax,postAjax} from './common/ajax.js'
import * as filter from './common/filter'
import './common/base.less'
import './assets/font/iconfont.css'

//注册插件形式组件
Vue.use(vuex)
Vue.use(ToastPlugin)

//注册vux组件
Vue.component('headBar', headBar)
Vue.component('x-input', XInput)
Vue.component('x-button', XButton)
Vue.component('group', Group)
Vue.component('cell', Cell)
Vue.component('flexbox', Flexbox)
Vue.component('flexbox-item', FlexboxItem)

//注册过滤器
Object.keys(filter).forEach(key => {
  Vue.filter(key, filter[key])
})

//注册全局Ajax方法
Vue.prototype.$post = postAjax
Vue.prototype.$get = postAjax
Vue.prototype.$api = api
Vue.prototype.$api_root = process.env.NODE_ENV === 'production' ? 'http://xxx.com/' : 'http://localhost:8080/prescription_patient_web'

	
FastClick.attach(document.body)
Vue.config.productionTip = false
new Vue({
	store,
	router,
	render: h => h(App)
}).$mount('#app-box')
