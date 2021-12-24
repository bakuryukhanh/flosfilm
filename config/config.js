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
    '@input-bg': 'transparent',
    '@steps-dot-size': '20px',
    '@steps-current-dot-size': '20px',
    '@steps-dot-top': '10px',
  },
  routes: routes,
  fastRefresh: {},
});
