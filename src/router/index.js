import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import ProductDetailView from '@/views/ProductDetailView.vue'
import LoginView from '@/views/LoginView.vue'
import CheckOutView from '@/views/CheckoutView.vue'
import store from '@/store'
import NaBetalingView from '@/views/NaBetalingView.vue'
import OverzichtsView from '@/views/OverzichtsView.vue'
import WinkelmandView from '@/views/WinkelmandView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/overzicht',
    name: 'overzicht',
    component: OverzichtsView
  },
  {
    path: '/shop/product/:id',
    name: 'product',
    component: ProductDetailView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/winkelmand',
    name: 'winkelmand',
    component: WinkelmandView
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckOutView,
    beforeEnter: () => {
      if(store.state.userLoggedIn === false){
        sessionStorage.setItem("originatedFrom", "/checkout");
        return router.push("/login");
      }
    }
  },
  {
    path: '/naBetaling',
    name: 'naBetaling',
    component: NaBetalingView
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes
})
export default router
