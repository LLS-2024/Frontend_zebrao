import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/views/Login.vue'
import Acai from '@/views/AcaiView.vue'
import Picole from '@/views/PicoleView.vue'
import Geladinho from '@/views/GeladinhoView.vue'
import Pote from '@/views/PoteView.vue'
import Vizualizar from '@/views/VizualizarView.vue'
import CarrinhoView from '@/views/CarrinhoView.vue'
import CompraPagoView from '@/views/CompraPagoView.vue'
import ComprasPagasList from '@/views/ComprasPagasList.vue'
import AreaPagamentoView from '@/views/AreaPagamentoView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { footerColor: "#A2C7FF" }
    },

    {
    path: '/Login',
    name: 'Login',
    component: Login,
  },
   {
    path: '/Acai',
    name: 'Açaí',
    component: Acai,
    meta: { footerColor: "#CC95F0" }
  },
  {
    path: '/Picole',
    name: 'Picolé',
    component: Picole,
    meta: { footerColor: "#DDA478" }
  },
  {
    path: '/Geladinho',
    name: 'Geladinho',
    component: Geladinho,
    meta: { footerColor: "#81E8A8" }
  },
  {
    path: '/Pote',
    name: 'Pote',
    component: Pote,
    meta: { footerColor: "#8192D5" }
  },
   {
    path: '/vizualizar/:id',
    name: 'Vizualizar',
    component: Vizualizar
  },
  {
    path: '/carrinho',
    name: 'carrinho',
    component: CarrinhoView
  },
  {
    path: '/compras/:id',
    name: 'compra-detalhes',
    component: CompraPagoView
  },
  {
    path: '/compras-pagas',
    name: 'compras-pagas',
    component: ComprasPagasList
  },
  {
    path: '/area-pagamento',
    name: 'area de pagamento',
    component: AreaPagamentoView
  },
  
  ],
})

export default router
