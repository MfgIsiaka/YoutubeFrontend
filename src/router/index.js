import { createRouter, createWebHistory } from "vue-router";
import AboutView from "../views/AboutView.vue";
import LoginView from "@/views/auth_views/LoginView.vue";
import VideoList from "@/components/VideoList.vue";

const routes = [
  {
    path: "/",
    name: "login",
    component: LoginView,
  },
  {
    path: "/videos",
    name: "videos",
    component: VideoList,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
