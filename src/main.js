import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
});

createApp(App).use(router).mount('#app')
