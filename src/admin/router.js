import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('./components/about.vue'),
  },
  {
    path: '/login',
    ccomponent: () => import('./components/auth.vue')
  },
  {
    path: '/works',
    component: () => import('./components/works.vue'),
  },
  {
    path: '/reviews',
    component: () => import('./components/reviews.vue'),
  }
];

export default new VueRouter({ routes });