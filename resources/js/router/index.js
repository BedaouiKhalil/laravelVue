import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/admin",
            name: "Admin",
            component: () => import("../pages/Admin.vue"),
        },
        {
            path: "/Register",
            name: "Register",
            component: () => import("../pages/Register.vue"),
        },
    ],
});

export default router;
