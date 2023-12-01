import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store";
import ToastPlugin from "vue-toast-notification";
import PrimeVue from "primevue/config";

//Prime Components
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Image from "primevue/image";
import Rating from "primevue/rating";

// Primevue Theme
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.js";
import "vue-toast-notification/dist/theme-bootstrap.css";

// Fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHouse,
  faShoppingCart,
  faBars,
  faTrash,
  faEye,
  faArrowLeft,
  faMoneyBill1,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse);
library.add(faShoppingCart);
library.add(faBars);
library.add(faTrash);
library.add(faArrowLeft);
library.add(faEye);
library.add(faMoneyBill1);

//Styles
import "bootstrap/dist/css/bootstrap.css";
import "./scss/main.scss";
//import "./style.css";

// Create App Instance
const app = createApp(App);

// Use Plugins
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(store);
app.use(ToastPlugin);
app.use(PrimeVue, {
  ripple: true,
  inputStyle: "filled",
  ptOptions: {
    mergeSections: true,
    mergeProps: false,
  },
  locale: {
    accept: "Aceptar",
    reject: "Rechazar",
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/styles/main.scss";`, // Asegúrate de que se importe tu archivo de estilo principal aquí
      },
    },
  },
});

// Use components
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("PrimeButton", Button);
app.component("DataTable", DataTable);
app.component("PrimeColumn", Column);
app.component("ImagePrime", Image);
app.component("RatingPrime", Rating);

//Mount App
app.mount("#app");
