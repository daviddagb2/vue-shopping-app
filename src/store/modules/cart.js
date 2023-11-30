const cartModule = {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      state.items.push(product);
    },
    REMOVE_FROM_CART(state, index) {
      state.items.splice(index, 1);
    },
    CLEAR_CART(state) {
      state.items = [];
    },
  },
  getters: {
    getCartItems: (state) => state.items,
    getCartItemCount: (state) => state.items.length,
  },
  actions: {
    addToCart({ commit }, product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, index) {
      commit('REMOVE_FROM_CART', index);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    },
  },
};

export default cartModule;
