import { createRouter, createWebHistory } from 'vue-router'
import PlayQuizView from '../views/quiz/PlayQuizView.vue'
import CreateQuizView from '../views/quiz/CreateQuizView.vue'
import EditQuizView from '../views/quiz/EditQuizView.vue'
import DashboardView from '../views/DashboardView.vue'
import JoinRoomView from '../views/play/JoinRoomView.vue'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: DashboardView,
    alias: ['/dashboard', '/home'],
  },
  {
    path: '/play',
    name: 'playQuiz',
    component: PlayQuizView
  },
  {
    path: '/join',
    name: 'joinRoom',
    component: JoinRoomView
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
