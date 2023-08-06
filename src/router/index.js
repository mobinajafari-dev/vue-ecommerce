import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import ShoppingCardView from "../views/ShoppingCardView.vue";
import ProductView from "../views/ProductView.vue";
import NotFound from "../views/NotFound.vue";
import UserProfileView from "../views/UserProfileView.vue";
import ForgetPassword from "../components/ForgetPassword.vue";
import Password from "../components/Password.vue";
import Signin from "../components/Signin.vue";
import AboutUsView from "../views/AboutUsView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/search",
    name: "search",
    component: () => import("../views/SearchView.vue"),
  },
  {
    path: "/shopping-card",
    name: "shopping-card",
    component: () => import("../views/ShoppingCardView.vue"),
  },
  {
    path: "/forget-password",
    name: "forget-password",
    component: () => import("../components/ForgetPassword.vue"),
  },
  {
    path: "/password",
    name: "password",
    component: () => import("../components/Password.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../components/Signin.vue"),
  },
  {
    path: "/login",
    name: "user-profile",
    component: () => import("../views/UserProfileView.vue"),
  },
  {
    path: "/products",
    name: "product",
    component: () => import("../views/ProductView.vue"),
    props: true,
  },
  {
    path: "/about-us",
    name: "about-us",
    component: () => import("../views/AboutUsView.vue"),
  },

  // redirect

  {
    path: "/products",
    redirect: "/home",
  },
  {
    path: "/user-profile",
    redirect: "/home",
  },

  // catchall 404

  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
