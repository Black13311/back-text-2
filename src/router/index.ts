import { createRouter, createWebHashHistory } from "vue-router";

import {userStore} from "../stores/user.ts";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("../pages/Home/Home.vue"),
    meta: {
      title: "Home Page",
      requireAuth: true
    },
  },
  {
    name: "NotFound",
    path: "/:pathMatch(.*)*",
    component: () => import("../pages/NotFounPage.vue"),
    meta: {
      title: "Page not found",
    },
  },
  {
    name: "LoginPage",
    path: "/login",
    component: () => import("../pages/LoginPage.vue"),
    meta: {
      title: "Login Page",
    },
  },
  {
    name: "RegisterPage",
    path: "/register",
    component: () => import("../pages/SignupPage.vue"),
    meta: {
      title: "Register Page",
    },
  },
  {
    name: "RegisterVerifyPage",
    path: "/register/verify",
    component: () => import("../pages/Home/confirm/confirm_email.vue"),
    meta: {
      title: "Register Verify Page",
    },
  },
  {
    name: "ForgotPasswordPage",
    path: "/forgot-password",
    component: () => import("../pages/forgot-passwoed.vue"),
    meta: {
      title: "Forgot Password Page",
    },
  },
  {
    name: "ForgotPasswordVerifyPage",
    path: "/forgot-password/verify",
    component: () => import("../pages/Home/confirm/confirm_email.vue"),
    meta: {
      title: "Forgot Password Verify Page",
    },
  },
  {
    name: "ChangePassword",
    path: "/change-password",
    component: () => import("../pages/change/change_pw.vue"),
    meta: {
      title: "Change password",
    },
  },
  {
    name: "Bolg",
    path: "/bolg",
    component: () => import("../pages/Home/Home-header.vue"),
    meta: {
      title: "Blog",
    },
  },

];

const index = createRouter({
  history: createWebHashHistory(),
  routes,
});

index.beforeEach(async (to, from, next) => {
  console.log('to', to);
  console.log('from', from);

  const auth = userStore()
  const requireAuth = to.matched.some((record) => record.meta.requireAuth)

  if (requireAuth && !auth.user) {
    next({name: 'LoginPage'})
  } else {
    next()
  }

})

export default index;