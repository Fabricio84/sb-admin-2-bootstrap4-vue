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

import $ from "jquery";
import { Layout } from "bootstrap-vue/es/components";
import "jquery-easing";
import "@/template/js/sb-admin-2.js";
import VueCharts from 'vue-chartjs'

import "@/template/js/demo/chart-area-demo.js"
import "@/template/js/demo/chart-pie-demo.js"

library.add(faUserSecret);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.use(Layout);
Vue.use(VueCharts);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
