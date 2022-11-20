import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
import Chat from "vue-beautiful-chat";
Vue.use(Chat);
new Vue({
  render: (h) => h(App),
}).$mount("#app");
