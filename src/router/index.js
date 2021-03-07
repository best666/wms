import Vue from 'vue'
import VueRouter from 'vue-router'
//import Out from "@/views/home/childComps/Out";
//import Transfer from "@/views/home/childComps/Transfer";
//import Home from '../views/Home.vue'
//import view from "vue-router/src/components/view";

const Home = () => import('../views/home/Home');
const In = () => import('@/views/home/childComps/In');
const Out = () => import('@/views/home/childComps/Out');
const Transfer = () => import("@/views/home/childComps/Transfer")

const Stores = () => import('../views/warehouse/Stores');
const About = () => import('../views/profile/About');



Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect:'/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    // redirect: '/in',
    children:[{
      path:'/in',
      name:'In',
      component: In
    },{
      path: '/out',
      name: 'Out',
      component:Out
    },{
      path: '/transfer',
      name: 'Transfer',
      component : Transfer
    }]
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/stores',
    name:'Stores',
    component: Stores
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
