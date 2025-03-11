import { createRouter, createWebHistory } from "vue-router";
import FamilyHeritage from "../components/FamilyHeritage.vue";
import ActivitiesPage from "../views/ActivitiesPage.vue";
import ActivityDetail from "../views/ActivityDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: FamilyHeritage,
  },
  {
    path: "/activities",
    name: "ActivitiesPage",
    component: ActivitiesPage,
  },
  {
    path: "/activities/:id",
    name: "ActivityDetail",
    component: ActivityDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
