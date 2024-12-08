import { createApp } from 'vue';
import App from './app.vue';
import router from './router/index.js';
import store from './store/index.js';
import "./styles/bootstrap.css"

createApp(App)
  .use(router)
  .use(store)
  .mount('#app');