import { createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

let configRouters:Array<RouteRecordRaw> = [];
// const routerContext = require.context("./modules", true, /index\.ts$/);
const routerContext = import.meta.globEager('./modules/**/index.ts')
let routerContextArray = []
for(const path in routerContext) {
  routerContextArray.push(routerContext[path].default[0])
}
// const routes:Array<RouteRecordRaw> = commonRouters.concat(configRouters);
const routes:Array<RouteRecordRaw> = configRouters.concat(routerContextArray);
console.log(routes,'routes')


const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
