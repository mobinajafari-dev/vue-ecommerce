import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SearchView from "../views/SearchView.vue";
import ShoppingCardView from "../views/ShoppingCardView.vue";
import ProductView from "../views/ProductView.vue";
import NotFound from "../views/NotFound.vue";
import login from "../views/login.vue";
import ForgetPassword from "../views/ForgetPassword.vue";
import Signin from "../views/Signin.vue";
import AboutUsView from "../views/AboutUsView.vue";
import Password from "../views/Password.vue";
import ConfirmPassword from "../views/ConfirmPassword.vue";

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
    component: () => import("../views/ForgetPassword.vue"),
  },
  {
    path: "/password",
    name: "password",
    component: () => import("../views/Password.vue"),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import("../views/Signin.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/login.vue"),
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
  {
    path: "/confirm-password",
    name: "confirm-password",
    component: () => import("../views/ConfirmPassword.vue"),
  },

  // error 403 , 502

  {
    path: "/forbiden-access",
    name: "forbiden-access",
    component: () => import("../views/ForbidenAccess.vue"),
  },
  {
    path: "/bad-gateaway",
    name: "bad-gateaway",
    component: () => import("../views/BadGateaway.vue"),
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
