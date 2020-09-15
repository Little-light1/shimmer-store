import Vue from 'vue'
import VueRouter from 'vue-router'


// 异步组件加载
const Index = () => import('@/views/Index.vue');
const Login = () => import('@/views/Login.vue');
const Home = () => import('@/views/Home.vue');
const Goods = () => import('@/views/Goods.vue');
const Thanks = () => import('@/views/Thanks.vue');
const GoodsDetails = () => import('@/views/GoodsDetails.vue');
const User = () => import('@/views/User.vue');
// import Index from '@/views/Index'
// import Login from '@/views/Login'
// import Home from '@/views/Home'
// import Goods from '@/views/Goods'
// import Thanks from '@/views/Thanks'
// import GoodsDetail from '@/views/GoodsDetail'
// import User from '@/views/User';
Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    redirect: '/home',
    name: 'home',
    component: Index,
    children: [
      {
        path: "home",
        component: Home
      },
      {
        path: "goods",
        component: Goods
      },
      {
        path: "thanks",
        component: Thanks
      },
      {
        path: 'goodsDetail',
        name: 'goodsDetail',
        component: GoodsDetails
      }
    ]
  },
  {
    path: '/user',
    name: "user",
    component: User
  },
  {
    path: '/login',
    name: "login",
    component: Login
  }
]

// 解决路由命名冲突的方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
const router = new VueRouter({
  routes
})

export default router
