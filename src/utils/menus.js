let menus =        [
    {
        path: '/dashboard',
        component: 'dashboard',
        name:'dashboard',
        meta: { title: '系统首页' }
    },
    {
        path: '/baseTable',
        component: 'baseTable',
        name:'baseTable',
        meta: { title: '基础表格' }
    },
    {
        path: '/tabs',
        component: 'tabs',
        name:'tabs',
        meta: { title: 'tab选项卡' }
    },
    {
        path: '/baseForm',
        component: 'baseForm',
        name:'baseForm',
        meta: { title: '基本表单' }
    },
    {
        // 图片上传组件
        path: '/upload',
        component: 'upload',
        name:'upload',
        meta: { title: '文件上传' }
    }
]
export default menus
