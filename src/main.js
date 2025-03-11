import { createApp } from "vue";
import App from "./App.vue";
import "./assets/styles.css"; // Import the CSS file
import router from "./router";

createApp(App).use(router).mount("#app");
