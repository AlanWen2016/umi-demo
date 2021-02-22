import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
});
