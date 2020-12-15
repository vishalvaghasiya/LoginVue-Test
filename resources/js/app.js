require('./bootstrap');
window.Vue = require('vue');
import VueRouter from "vue-router";
import Routes from "./routes";
import App from "./components/App";

Vue.use(VueRouter);

const routeConst = new VueRouter({
    routes: Routes,
    mode: 'history',
});

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
const app = new Vue({
    el: '#app',
    components: {
        'vish': App
    },
    router: routeConst,
});
