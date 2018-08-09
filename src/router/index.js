import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/login.vue'], resolve)
        },
        {
            path: '*',
            component: resolve => require(['../components/page/404.vue'], resolve)
        }
    ]
})
