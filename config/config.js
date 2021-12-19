import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  theme: {
    '@primary-color': '#fed530',
    '@link-color': 'white',
    '@text-color': 'white',
    '@heading-color': 'white',
    '@border-radius-base': '5px',
    '@component-background': '#525252',
  },
  routes: routes,
  fastRefresh: {},
});
