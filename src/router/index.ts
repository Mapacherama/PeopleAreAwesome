import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";
import Achievements from "@/views/Achievements.vue";
import Leaderboard from "@/views/Leaderboard.vue";

const routes = [
  { path: "/", component: LandingPage },
  { path: "/achievements", component: Achievements },
  { path: "/leaderboard", component: Leaderboard }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
