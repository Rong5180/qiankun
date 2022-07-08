import Vue from "vue";
import router from "./router";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import { registerMicroApps, start } from "qiankun";

Vue.config.productionTip = false;
registerMicroApps([
  {
    name: "qiankun-vue", // 应用的名字
    entry: "//localhost:3001", // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
    container: "#container", // 容器id
    activeRule: "/app/vue" // 根据路由 激活的路径
  },
  {
    name: "reactApp",
    entry: "//localhost:20000",
    container: "#container",
    activeRule: "/app/react"
  },
]);

start();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
