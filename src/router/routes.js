const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        // ROUTES VERS LA GESTION DE CHARROI
        path: "/Main",
        component: () => import("pages/GestionCharroi/MyDash.vue"),
        children: [
          { path: "", redirect: "EnregV" },
          {
            path: "/EnregV",
            component: () =>
              import("pages/GestionCharroi/EnregistrerVehicule.vue"),
          },
          {
            path: "/EnregM",
            component: () =>
              import("pages/GestionCharroi/EnregistrerMecanicien.vue"),
          },
          {
            path: "/EnregCh",
            component: () =>
              import("pages/GestionCharroi/EnregistrerChefcharroi.vue"),
          },
          {
            path: "/RepV",
            component: () =>
              import("pages/GestionCharroi/ReparationVehicule.vue"),
          },
          {
            path: "/SortieV",
            component: () => import("pages/GestionCharroi/SortieVehicule.vue"),
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
