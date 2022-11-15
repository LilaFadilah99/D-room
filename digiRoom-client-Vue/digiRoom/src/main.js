import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import router from "./router";
// import Axios from "axios";

import App from "./App.vue";

const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
// Axios.defaults.baseURL = "http://localhost:3000";
// Axios.defaults.baseURL = "https://d-room.herokuapp.com";

const app = createApp(App);

app.use(router);
app.use(pinia);

app.mount("#app");
