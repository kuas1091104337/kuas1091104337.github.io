// import { createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupLayouts } from "virtual:generated-layouts";
import generatedRoutes from "virtual:generated-pages";

const routes = setupLayouts(generatedRoutes);
const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  // routes: [
  //   { path: '/', name: 'home', component: HomeView },
  //   {
  //     path: '/about', name: 'about',
  //     component: () => import('../views/AboutView.vue')
  //   }
  // ]
})

export default router
