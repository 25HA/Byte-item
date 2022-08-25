import Vue from 'vue'
import VueRouter from 'vue-router'
import ccnew from '../views/CourseContentNew.vue'
import cchot from '../views/CourseContentHot.vue'
import ccprice from '../views/CourseContentPrice.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    
    redirect: '/home'
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
    path: '/home',
    name: 'IndexView',
    component: () => import('../views/IndexView.vue'),
    //二级路由进入口
    children: [
      {
        path: '/',
        redirect: '/IndexView_Content'
      },
      {
        path:'/IndexView_Content',
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
        path: '/',

        redirect: '/coursecontent'
      },
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
  {
    path: '/events/all',
    name: 'EventsAll',
    component: () => import('../views/EventsAll.vue')
  },
  {
    path:'/CourseContentNew',
    name:'CourseContentNew',
    component:ccnew
  },
  {
    path:'/CourseContentPrice',
    name:'CourseContentPrice',
    component:ccprice
  },
  {
    path:'/CourseContentHot',
    name:'CourseContentNew',
    component:cchot
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
