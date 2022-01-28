### 项目搭建问题处理

1. 在 vite.config.ts 中使用`import {resolve} from 'path'`报错
   原因：path 是 node.js 内置功能，但 node.js 本身不支持 typescript，所以直接在 ts 项目中使用会有问题
   解决：npm install @types/node --save-dev
