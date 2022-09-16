import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/AuthView.vue')
  },
  {
    path: '/questions/',
    name: 'question-list',
    component: () => import('../views/QuestionListView.vue')
  },
  {
    path: '/questions/:id',
    name: 'question-detail',
    component: () => import('../views/QuestionView.vue')
  },
  {
    path: '/make-question/',
    name: 'make-question',
    meta: { auth: true },
    component: () => import('../views/MakeQuestionView.vue')
  },
  { path: "/:pathMatch(.*)*", component: () => import('../views/NotFoundView.vue') }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(info => info.meta.auth)) {
    if(!localStorage.getItem('token') || localStorage.getItem('token') === undefined || localStorage.getItem('token') === null) {
      next('/auth')
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
