import { createStore } from 'vuex';
import cartModule from './modules/cart';

export default createStore({
  modules: {
    cart: cartModule,
  },
});
