export default [
  {
    path: '/',
    component: () => import('../components/about.vue'),
  },
  {
    path: '/login',
    component: () => import('../components/auth.vue'),
    meta: {
      public: true
    }
  },
  {
    path: '/works',
    component: () => import('../components/works.vue'),
  },
  {
    path: '/reviews',
    component: () => import('../components/reviews.vue'),
  }
];


