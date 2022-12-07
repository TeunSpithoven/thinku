import { createApp } from "vue";
import App from "./App.vue";

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

import router from "./router";
import store from "./store";
import "./assets/tailwind.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { faUpDown } from "@fortawesome/free-solid-svg-icons";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

library.add(faPenToSquare, faCircle, faCircleCheck, faTrashCan, faUpDown, faPlusSquare);

createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(store)
  .use(router)
  .use(Toast, {
    transition: "Vue-Toastification__bounce",
    maxToasts: 20,
    newestOnTop: true,
  })
  .mount("#app");
