export default [
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/HomePage/index' },
      { path: '/film-detail/:id', component: '@/pages/DetailPage/index' },
    ],
  },
];
