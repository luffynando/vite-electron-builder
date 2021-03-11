import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '/@/components/Home.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home },
  {
    path: '/about',
    name: 'About',
    component: () => import('/@/components/About.vue'),
  }, // Lazy load route component
];

export default new VueRouter({
  mode: 'history',
  routes,
});
