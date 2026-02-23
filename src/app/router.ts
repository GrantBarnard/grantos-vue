import { createRouter, createWebHistory } from 'vue-router'
import Layout from './components/Layout.vue'
import Dashboard from './pages/Dashboard.vue'
import InboxQueue from './pages/InboxQueue.vue'
import Tasks from './pages/Tasks.vue'
import Calendar from './pages/Calendar.vue'
import Agents from './pages/Agents.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        { path: '', name: 'dashboard', component: Dashboard },
        { path: 'inbox', name: 'inbox', component: InboxQueue },
        { path: 'tasks', name: 'tasks', component: Tasks },
        { path: 'calendar', name: 'calendar', component: Calendar },
        { path: 'agents', name: 'agents', component: Agents },
      ],
    },
  ],
})

export default router