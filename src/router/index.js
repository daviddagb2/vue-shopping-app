import { createRouter, createWebHistory } from "vue-router";
import store from "../store";

import HomeView from "../views/HomeView.vue";
import CartView from "../views/CartView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import CategoriesView from "../views/CategoriesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: HomeView,
    },
    {
      path: "/product/:id",
      name: "ProductDetail",
      component: ProductDetailView,
    },
    {
      path: "/cart",
      name: "Cart",
      component: CartView,
    },
    {
      path: "/categories",
      name: "Categories",
      component: CategoriesView,
    },
    {
      path: "/categories/:id",
      name: "CategoryDetail",
      component: CategoriesView,
    },
  ],
});

export default router;
