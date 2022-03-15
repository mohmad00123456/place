import { createRouter, createWebHashHistory } from "vue-router";
import sourceData from '@/data.json';
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/destination/:id/:slug",
    name: "destination.show",
    component: () => import("@/views/DestinationShow.vue"),
    props: true,
    beforeEnter:function(to){
      const exist = sourceData.destinations.find((i) => i.id === parseInt(to.params.id))
      if (!exist) return { name: "NotFound" }
    },
    children: [
      {
        path: ":slu",
        name: "Show.slugg",
        component: () => import("@/views/Shows.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/views/notFoundPage.vue")
  },
  //qurery params
  {
    path: "/invoices",
    name: "invoices",
    component: () => import("@/views/Invoices.vue"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: "/myImages",
    name: "Amages",
    component: () => import("@/views/myimages.vue") 
  },
  {
    path: "/protected",
    name: "protected",
    component: () => import("@/views/Protected.vue"),
    meta: {
      requiresAuth:true ,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  }

];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "vue-school",
  // scrollBehavior(to, from, savedPosition) {
  //   return savedPosition || {top:0}
  // }
});
router.beforeEach((to) => {
  if (to.meta.requiresAuth && !window.user) {
    return {name:'login' , query:{redirect:to.fullPath}}
  }
});
export default router;
