import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cadastro from '../views/Cadastro.vue'
import Login from '@/views/Login.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/cadastro',
      name: 'cadastro',
      component: Cadastro,
    },
    {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
  ],
})

export default router
