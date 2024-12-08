import { createRouter, createWebHistory } from 'vue-router';
import Products from '../components/Product.vue';
import Overview from '../components/Overview.vue';
import CartDetails from '../components/CartDetails.vue';
import Carts from '../components/Cart.vue';
import Users from '../components/User.vue';
import Login from '../components/Login.vue';
import ProductDetails from '../components/ProductDetails.vue';

// Função para verificar se o usuário está autenticado
const isAuthenticated = () => {
  return !!localStorage.getItem('token'); // Verifica se há um token no localStorage
};

const routes = [
  { path: '/', component: Login },
  { 
    path: '/products', 
    component: Products, 
    meta: { requiresAuth: true } // Rota protegida
  },
  { 
    path: '/products/:id', 
    component: ProductDetails, 
    meta: { requiresAuth: true } // Rota protegida
  },
  { 
    path: '/cart/:id', 
    component: CartDetails, 
    meta: { requiresAuth: true } // Rota protegida
  },
  { 
    path: '/carts', 
    component: Carts, 
    meta: { requiresAuth: true } // Rota protegida
  },
  { 
    path: '/users', 
    component: Users, 
    meta: { requiresAuth: true } // Rota protegida
  },
  { 
    path: '/dash', 
    component: Overview, 
    meta: { requiresAuth: true } // Rota protegida
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Guarda de navegação global para verificar se o usuário está autenticado antes de permitir o acesso às rotas protegidas
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) { // Verifica se a rota precisa de autenticação
    if (!isAuthenticated()) { // Se não estiver autenticado, redireciona para a página de login
      next({ path: '/' }); // Redireciona para a página de login
    } else {
      next(); // Se estiver autenticado, permite a navegação
    }
  } else {
    next(); // Se a rota não exigir autenticação, permite a navegação
  }
});

export default router;
