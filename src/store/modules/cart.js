const cartModule = {
  namespaced: true,
  state: {
    items: [],
  },
  mutations: {
    ADD_TO_CART(state, product) {
      const existingProduct = state.items.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        existingProduct.quantity += product.quantity ? product.quantity : 1;
      } else {
        const newProduct = {
          ...product,
          quantity: product.quantity ? product.quantity : 1,
        };
        state.items.push(newProduct);
      }
    },
    UPDATE_QUANTITY(state, { productId, newQuantity }) {
      const product = state.items.find((item) => item.id === productId);
      if (product) {
        product.quantity = newQuantity;
      }
    },
    REMOVE_FROM_CART(state, productId) {
      const index = state.items.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
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
      commit("ADD_TO_CART", product);
    },
    updateQuantity({ commit }, { productId, newQuantity }) {
      commit("UPDATE_QUANTITY", { productId, newQuantity });
    },
    removeFromCart({ commit }, productId) {
      commit("REMOVE_FROM_CART", productId);
    },
    clearCart({ commit }) {
      commit("CLEAR_CART");
    },
  },
};

export default cartModule;
