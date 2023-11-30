import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import store from './store'; // Vuex store instance


import PrimeVue from 'primevue/config';

// Fontawesome core 
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


//Styles
import './style.css'

// Create App Instance
const app = createApp(App);

//Use Plugins
app.use(PrimeVue);
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);
app.use(store);

//Mount App
app.mount("#app");
