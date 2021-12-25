export default [
  {
    path: '/authentication',
    component: '@/pages/AuthenticationPage',
  },
  {
    path: '/registerSuccess',
    component: '@/pages/AuthenticationPage/registerSuccess',
  },
  {
    path: '/',
    component: '@/layouts/BasicLayout',
    routes: [
      { path: '/', component: '@/pages/HomePage/index' },
      {
        path: '/choosePackage',
        component: '@/pages/upgradeAccount/choosePackage',
      },
      {
        path: '/payment/:id',
        component: '@/pages/upgradeAccount/payment',
      },
      {
        path: '/result/:id/:nMonth',
        component: '@/pages/upgradeAccount/result',
      },
    ],
  },
];
