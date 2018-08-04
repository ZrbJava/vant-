// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import Vuex from "vuex"
import 'vant/lib/vant-css/index.css';
import 'lib-flexible/flexible'
// import { Lazyload } from 'vant';

Vue.use(Vant);
Vue.use(Vuex);
const store = new Vuex.Store({
        state: {
            count: 0
        },
        mutations: {
            addCart(state) {
                state.count++
            }
        },
        // actions: {
        //     addCart(context) {
        //         context.commit('addCart')
        //     }
        // }
    })
    // Vue.use(Tab).use(Tabs);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})