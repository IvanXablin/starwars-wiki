import { createApp } from "vue";
import router from "@/router";
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import "element-plus/dist/index.css";
import App from "./App.vue";
import "@/assets/styles/index.scss";

const app = createApp(App);

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}

app.use(ElementPlus).use(router).mount('#app');