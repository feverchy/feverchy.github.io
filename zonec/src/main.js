import { createApp } from 'vue'
import './assets/css/reset.css'
import './assets/css/animate.min.css'
import './assets/css/fontLibrary.css'
import 'virtual:windi.css' // windicss v3.0 or up
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/es/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import App from './App.vue'
import router from './router'
import store from '~/store'
import './assets/js/rem.js'// 引入rem.js

const app = createApp(App)//创建vue实例

app.use(ElementPlus, {locale})//使用element-plus

app.use(router)//使用路由

app.use(store)//使用vuex

app.mount('#app')//挂载到id为app的元素上

// Register all icons as components globally
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
