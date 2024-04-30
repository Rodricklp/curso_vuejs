import { createMemoryHistory, createRouter } from 'vue-router'



const routes = [
]

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    {
      path: '/primeraParte',
      name: 'primeraParte',
      component: () => import('../components/primeraParte.vue')
    },
    {
      path: '/listaTareas',
      name: 'listaTareas',
      component: () => import('../components/listaTareas.vue')
    }
  ]
})

export default router