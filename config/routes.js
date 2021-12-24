export default [
  {
    path: '/authentication',
    component: '@/pages/AuthenticationPage',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/HomePage/index' },
      { path: '/router/:id', component: '@/pages/test/$id' },
    ],
  },
];
