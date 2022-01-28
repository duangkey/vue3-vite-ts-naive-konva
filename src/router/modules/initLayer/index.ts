export default [
  // 基础导航
  {
    path: '/hearder',
    component: () => import('@/components/hearder/index.vue'),
    children: [
      {
        path: '/init-layer',
        name: 'InitLayer',
        component: () => import('@/views/konvaUse/InitLayer.vue'),
        meta: {
          title: '欢迎你，Konva!',
        },
      },
    ],
  },
]
