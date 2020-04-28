import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home';

// Регистрируем Router как плагин для Vue.
// Таким образом, научили Vue функционалу роутера.
Vue.use(Router);

export default new Router({
  mode: 'history',  // Обычные символы '/' в url.
  routes: [
    // Каждый объект - настройка для отдельного пути к одной странице.
    {
      path: '/',
      component: Home
    },
    {
      path: '/todos',
      // Lazy loading во Vue: callback-функция c динамическим импортом.
      component: () => import('./views/Todos.vue')
    }
  ]
});