import { createRouter, createWebHistory } from 'vue-router'
import { PATHS } from '../constants/PATHS'


const routes = [
  { path: PATHS.HOME, component: <div>home</div> },
  { path: PATHS.ADD_FUNDS, component: <div>add founds</div> },
  { path: PATHS.HISTORY, component: <div>history</div> },
  { path: PATHS.CHANGE_PASSWORD, component: <div>Change password</div> },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
