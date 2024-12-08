import { createStore } from 'vuex';
import products from './modules/product.js';
import carts from './modules/carts.js';
import users from './modules/users.js';
import auth from './modules/auth.js';

const store = createStore({
  modules: {
    products,
    carts,
    users,
    auth,
  },
});

export default store;
