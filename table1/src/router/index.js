import { createRouter, createWebHashHistory } from "vue-router"//创建路由

import Cover from "~/pages/Cover.vue"//Cover Page
import Introduction from "~/pages/Introduction.vue"//Introduction Page
import Home from "~/pages/Home.vue"//Home Page
import subPage from "~/pages/subPage.vue"//subPage
import subPageTwo from "~/pages/subPageTwo.vue"//subPageTwo
import subPageThree from "~/pages/subPageThree.vue"//subPageThree

//路由配置
const routes = [
    {
        path: "/",
        name: "Cover",
        component: Cover,
    },
    {
        path: "/Introduction",
        name: "Introduction",
        component: Introduction,
    },
    {
        path: "/Home",
        name: "Home",
        component: Home,
    },
    {
        path: "/subPage",
        name: "subPage",
        component: subPage,
    },
    {
        path: "/subPageTwo",
        name: "subPageTwo",
        component: subPageTwo,
    },
    {
        path: "/subPageThree",
        name: "subPageThree",
        component: subPageThree,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;