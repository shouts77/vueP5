import { createWebHistory, createRouter } from "vue-router";
import NavHome from "../components/NavHome.vue";

const routes = [
  {
    path: "/",
    name: "Nav Home",
    component: NavHome,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
