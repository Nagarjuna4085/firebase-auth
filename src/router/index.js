import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from "../views/LoginView";
import {auth} from "../firebase"


const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path:"/login",
    name:"LoginView",
    component:LoginView

  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to,from,next)=>{
   if(to.path === '/lohin' && auth.currentUser){
     next('/')
     return ;
   }

   if(to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser){
     next('/login')
     return
   }
   next()
})

export default router 
