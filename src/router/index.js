import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: HomeView
    }, */
    {
      path: '/contador',
      name: 'contador',
      component: () => import('../modules/contador/components/Contador.vue')
    },
    {
      path: '/listaTareas',
      name: 'listaTareas',
      component: () => import('../modules/listaTareas/components/ListaTareas.vue')
    },
    {
      path: '/registrar',
      name: 'registrar',
      component: () => import('../modules/registrar/views/RegistrarView.vue')
    },
    {
      path: '/calcular',
      name: 'calcular',
      component: () => import('../modules/calcular/views/Calcular.vue')
    },
  ]
})

export default router
