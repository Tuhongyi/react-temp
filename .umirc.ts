import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/pages',
      routes: [
        {
          path: '/',
          exact: true,
          redirect: '/home',
        },
        {
          path: '/home',
          exact: true,
          component: '@/pages/Home',
        },
        {
          path: '/aboutUs/stronger',
          exact: true,
          component: '@/pages/aboutUs/stronger',
        },
        {
          path: '/aboutUs/structure/market',
          exact: true,
          component: '@/pages/aboutUs/structure/market',
        },
        {
          path: '/aboutUs/structure/personnelDepartment',
          exact: true,
          component: '@/pages/aboutUs/structure/personnelDepartment',
        },
      ],
    },
  ],
  proxy: {
    '/api/': {
      target: 'http://localhost:3001', //代理的地址
      changeOrigin: true,
    },
  },
  fastRefresh: {},
});
