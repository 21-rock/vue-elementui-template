<template>
    <div id="main-container">
        <el-container>
            <el-header>
                <el-menu
                        :default-active="activeIndex2"
                        class="el-menu-demo"
                        mode="horizontal"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b">
                    <el-menu-item index="0" class="nav-logo">
                        <img src="../public/images/logo.png" alt="logo">
                    </el-menu-item>

                    <el-menu-item index="1">处理中心</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">我的工作台</template>
                        <el-menu-item index="2-1">选项1</el-menu-item>
                        <el-menu-item index="2-2">选项2</el-menu-item>
                        <el-menu-item index="2-3">选项3</el-menu-item>
                        <el-submenu index="2-4">
                            <template slot="title">选项4</template>
                            <el-menu-item index="2-4-1">选项1</el-menu-item>
                            <el-menu-item index="2-4-2">选项2</el-menu-item>
                            <el-menu-item index="2-4-3">选项3</el-menu-item>
                        </el-submenu>
                    </el-submenu>
                    <el-menu-item index="3" disabled>消息中心</el-menu-item>
                    <el-submenu index="4" id="user-center">
                        <template slot="title">用户</template>
                        <el-menu-item index="4-1">退出登录</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color="#545c64"
                            text-color="#fff"
                            active-text-color="#ffd04b">
                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-location"></i>
                                <span>导航一</span>
                            </template>
                            <el-menu-item-group>
                                <template slot="title">分组一</template>
                                <el-menu-item index="1-1">
                                    选项1
                                </el-menu-item>
                                <el-menu-item index="1-2">选项2</el-menu-item>
                            </el-menu-item-group>
                            <el-menu-item-group title="分组2">
                                <el-menu-item index="1-3">选项3</el-menu-item>
                            </el-menu-item-group>
                            <el-submenu index="1-4">
                                <template slot="title">选项4</template>
                                <el-menu-item index="1-4-1">选项1</el-menu-item>
                            </el-submenu>
                        </el-submenu>
                        <el-menu-item index="2">
                            <i class="el-icon-menu"></i>
                            <span slot="title">导航二</span>
                        </el-menu-item>
                        <el-menu-item index="3" disabled>
                            <i class="el-icon-document"></i>
                            <span slot="title">导航三</span>
                        </el-menu-item>
                        <el-menu-item index="4">
                            <i class="el-icon-setting"></i>
                            <span slot="title" v-on:click="greet">导航四</span>
                        </el-menu-item>
                    </el-menu>
                </el-aside>
                <el-main>
                    <!--<p>-->
                        <!--<span v-on:click="greet"><router-link to="/foo">Go to Foo</router-link></span>-->
                        <!--<router-link to="/bar">Go to Bar</router-link>-->
                    <!--</p>-->
                    <transition name="el-fade-in">
                        <!-- 路由匹配到的组件将渲染在这里 -->
                        <router-view></router-view>
                    </transition>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Home from './components/Home'
    import HomeDetail from './components/HomeDetail'

    export default {
        name: 'app',
        components: {
            Home,
            HomeDetail
        },
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '2',
            };
        },
        methods: {
            greet: function () {
                this.$router.push({path: 'home'})
            }
        }
    }
</script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }

    .el-menu, #main-container, body, html {
        height: 100%;
    }

    #user-center {
        float: right;
    }

    .nav-logo {
        width: 200px;
    }

    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        padding: 0;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
    }

    .el-container.is-vertical {
        height: 100%;
    }

    body > .el-container {
        margin-bottom: 40px;
    }

    .el-container:nth-child(5) .el-aside,
    .el-container:nth-child(6) .el-aside {
        line-height: 260px;
    }

    .el-container:nth-child(7) .el-aside {
        line-height: 320px;
    }

</style>
