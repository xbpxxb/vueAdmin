<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <!-- 一级 -->
                <el-submenu  :index="item.index" :key="item.index" v-if="item.subs" >
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </template>
                    <!-- 二级 -->
                    <template v-for="subItem in item.subs">
                        <el-submenu  :index="subItem.index" :key="subItem.index" v-if="subItem.subs">
                            <template slot="title">
                                <i :class="subItem.icon"></i>
                                <span slot="title">{{ subItem.title }}</span>
                            </template>
                            <!-- 三级 -->
                            <el-menu-item v-for="subsubItem in subItem.subs" :index="subsubItem.index" :key="subsubItem.index">
                                <i :class="subsubItem.icon"></i><span slot="title">{{ subsubItem.title }}</span>
                            </el-menu-item>
                        </el-submenu>
                        <el-menu-item :index="subItem.index" :key="subItem.index" v-else>
                            <i :class="subItem.icon"></i><span slot="title">{{ subItem.title }}</span>
                        </el-menu-item>
                    </template>
                </el-submenu>
                <el-menu-item :index="item.index" :key="item.index" v-else>
                    <i :class="item.icon"></i><span slot="title">{{ item.title }}</span>
                </el-menu-item>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from '../common/bus';
    export default {
        data() {
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'dashboard',
                        title: '系统首页'
                    },
                    {
                        icon: 'el-icon-message',
                        index: 'tabs',
                        title: 'tab选项卡'
                    },
                    {
                        icon: 'el-icon-message',
                        index: '4',
                        title: '三级菜单',
                        subs:[
                             {
                                icon: 'el-icon-date',
                                index: '3',
                                title: '二级菜单',
                                subs: [
                                    {
                                        index: 'baseForm',
                                        title: '基本表单'
                                    },
                                    {
                                        index: 'upload',
                                        title: '文件上传'
                                    }
                                ]
                            },
                            {
                                icon: 'el-icon-tickets',
                                index: 'baseTable',
                                title: '基础表格'
                            },
                        ]
                    }
                ]
            }
        },
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
