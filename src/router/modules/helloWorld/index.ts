export default [
  // 基础导航
  {
    path: "/hearder",
    component: () => import("@/components/hearder/index.vue"),
    children: [
      {
        path: "/",
        name: "HelloWorld",
        component: () =>
          import(
             "@/components/HelloWorld.vue"
          ),
        meta: {
          layout: "basic-layout",
          title: "欢迎你，世界！",
        },
      },
    ],
  },
];