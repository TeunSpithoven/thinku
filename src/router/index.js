import { createRouter, createWebHistory } from 'vue-router'
import CreateQuizView from '../views/quiz/CreateQuizView.vue'
import EditQuizView from '../views/quiz/EditQuizView.vue'
import DashboardView from '../views/DashboardView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView
  },
  {
    path: '/createQuiz',
    name: 'createQuiz',
    component: CreateQuizView
  },
  {
    path: '/editQuiz',
    name: 'editQuiz',
    component: EditQuizView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
