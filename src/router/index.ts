import { createWebHistory, createRouter } from "vue-router";
const routes = [
    {
      path: '/',
      name: 'Login',
      component: () => import('../pages/LoginPage.vue')
    },
    {
      path: '/signup',
      name: 'Signup',
      component: () => import('../pages/SignupPage.vue')
    },
    {
      name: "NotFound",
      path: "/:pathMatch(.*)*",
      component: () => import("../pages/NotFounPage.vue")
     
    },
    {
      name: "Forgot-password",
      path: '/for-password',
      component: () => import("../pages/forgot-passwoed.vue")
    },
    {
      name: "Home",
      path: '/home',
      component: () => import("../pages/Home/Home.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
