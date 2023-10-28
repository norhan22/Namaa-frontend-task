import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/style/main.scss";

import helpers from "./mixins/helpers";
import "../veeValidation.config";

createApp(App).use(store).use(router).mixin(helpers).mount("#app");
