import _ from "lodash-es";
import { sum } from "./js/math";
import { mul } from "./ts/mul";
import { createApp } from "vue";
import App from "./vue/App.vue";

import "./css/style.css";
import "./css/title.less";

console.log(sum(10, 20));
console.log(_.join(["abc", "def"], "-"));
console.log(mul(10, 20));

const divEle = document.createElement("div");
divEle.innerHTML = "hello world";
divEle.className = "title";
document.body.appendChild(divEle);

// // vue
createApp(App).mount("#app");
