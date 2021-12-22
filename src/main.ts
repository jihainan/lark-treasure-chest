import "vue-class-component/hooks";
import Vue from "vue";
import "@/assets/styles/index.scss";

import App from "@/app.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
