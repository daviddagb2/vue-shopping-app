import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from "./store"; // Vuex store instance

import PrimeVue from "primevue/config";

//Prime Components
import Button from "primevue/button";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Image from "primevue/image";

// Primevue Theme
import "primevue/resources/themes/bootstrap4-light-blue/theme.css";

// Bootstrap JS
import "bootstrap/dist/js/bootstrap.js";

// Fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import {
  faHouse,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

library.add(faHouse);
library.add(faShoppingCart);
library.add(faBars);

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
});

// Use components
app.component("font-awesome-icon", FontAwesomeIcon);
app.component("PrimeButton", Button);
app.component("DataTable", DataTable);
app.component("PrimeColumn", Column);
app.component("ImagePrime", Image);

//Mount App
app.mount("#app");
