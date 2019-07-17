import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// imports para o template sb admin 2 bootstrap 4
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "@/template/css/fonts.googleapis.nunito.css";
import "@/template/css/sb-admin-2.css";

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
