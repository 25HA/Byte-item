import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import test from '../views/boilingView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/boilingView',
    name: 'boilingView',
    component: () => import('../views/boilingView.vue')
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('../views/Content.vue')
  },
  {
    path: '/IndexView',
    name: 'IndexView',
    component: () => import('../views/IndexView.vue'),
    //二级路由进入口
    children: [
      {
        path:'/',
        name:'IndexView_Content',
        component: () => import('../views/IndexView_Content.vue')
      }
    ]
  },
  {
    path: '/course',
    name: 'course',
    component: () => import('../views/Course.vue'),
    children: [
      {
        path: '/coursecontent',
        name: 'coursecontent',
        component: () => import('../views/CourseContent.vue')
      },
    ]
  },
  {
    path: '/book',
    name: 'book',
    component: () => import('../views/BookDetails.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
