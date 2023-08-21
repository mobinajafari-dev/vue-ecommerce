import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import i18n from "./i18n";
import "./assets/sass/style.scss";

createApp(App).use(i18n).use(router).mount("#app");

// main.js

import Vue3PersianDatetimePicker from "vue3-persian-datetime-picker";
const app = createApp({});
app.use(Vue3PersianDatetimePicker, {
  name: "CustomDatePicker",
  props: {
    format: "YYYY-MM-DD HH:mm",
    displayFormat: "jYYYY-jMM-jDD",
    editable: false,
    placeholder: "تاریخ تولد",
    altFormat: "YYYY-MM-DD HH:mm",
    color: "#555",
    //...
    //... And whatever you want to set as default.
    //...
  },
});
