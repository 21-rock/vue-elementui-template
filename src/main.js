import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false;
Vue.use(ElementUI);

import Home from './components/Home'
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

const router = new VueRouter({
    routes: [
        { path:'/home', component: Home},
        { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
