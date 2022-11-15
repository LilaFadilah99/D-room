import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import DetailPage from "../views/DetailPage.vue";
import AccountPage from "../views/AccountPage.vue";
import FavoritePage from "../views/FavoritePage.vue";
import LoginPage from "../views/LoginPage.vue";
import PaymentPage from "../views/PaymentPage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/detail/:id",
    name: "detail",
    component: DetailPage,
  },
  {
    path: "/payment/:id",
    name: "payment",
    component: PaymentPage,
  },
  {
    path: "/account",
    name: "account",
    component: AccountPage,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: FavoritePage,
  },
];
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {
//   if (to.name !== "login" && !localStorage.access_token)
//     next({ name: "login" });
//   else if (to.name === "login" && localStorage.access_token)
//     next({ name: "home" });
//   else next();
// });

export default router;
