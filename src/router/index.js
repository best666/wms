import Vue from 'vue'
import VueRouter from 'vue-router'

//路由懒加载
const Home = () => import('../views/home/Home');
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
