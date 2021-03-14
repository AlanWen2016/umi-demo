import { defineConfig } from 'umi';

export default defineConfig({
  ssr: {
    // devServerRender: false,
  },
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  antd: {
    compact: true,
  },
  plugins: [
    "babel-plugin-styled-components"
  ],
});
