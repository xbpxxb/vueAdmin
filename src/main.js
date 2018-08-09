import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
import { store } from './store'
import MenuUtils from './utils/MenuUtils'
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import "babel-polyfill";

Vue.use(ElementUI, { size: 'small' });
Vue.prototype.$axios = axios;

  // 重新加入路由
  let data = JSON.parse(sessionStorage.getItem('menus'));
  if (data){
    let routes = []
    MenuUtils(routes,data)
    router.options.routes[1].children.push(...routes)
    router.addRoutes(router.options.routes)
  }
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else{
        next();
    }
})

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app');
