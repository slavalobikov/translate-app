import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', component: <div>da</div> },
  { path: '/about', component: <div>net</div> },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
