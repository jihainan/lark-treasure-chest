import "vue-class-component/hooks";
import Vue from "vue";
import "@/assets/styles/index.scss";

import App from "@/app.vue";
import store from "@/store";

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
