import type { App } from 'vue';
import { createPinia } from 'pinia';
const allModules = import.meta.globEager('./modules/**/index.ts');
export const modules = {} as any;
Object.keys(allModules).forEach((path) => {
  const fileName = path.split('/')[1];
  modules[fileName] = allModules[path][fileName] || allModules[path].default || allModules[path];
});
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };