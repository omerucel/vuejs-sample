import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexPage from './pages/index.vue'
import AboutPage from './pages/about.vue'
import ContactPage from './pages/contact.vue'
import NotFoundPage from './pages/not_found.vue'

import 'bootstrap/js/src/modal.js'
import 'bootstrap/scss/bootstrap.scss'

Vue.use(VueRouter);
var router = new VueRouter({
    routes: [
        { path: '/', component: IndexPage },
        { path: '/about', component: AboutPage },
        { path: '/contact', component: ContactPage },
        { path: '*', component: NotFoundPage }
    ]
})

var app = new Vue({
    el: '#app',
    router: router
});
