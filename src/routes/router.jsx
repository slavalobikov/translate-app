import { createRouter, createWebHistory } from 'vue-router'
import { PATHS } from '../constants/PATHS'
import Home from './../pages/Home.vue'


const routes = [
  { path: PATHS.HOME, component: <Home /> },
  { path: PATHS.ADD_FUNDS, component: <div>add founds</div> },
  { path: PATHS.HISTORY, component: <div>history</div> },
  { path: PATHS.CHANGE_PASSWORD, component: <div>Change password</div> },
  { path: PATHS.MAILBOX_INBOX, component: <div>Mai Inbox</div> },
  { path: PATHS.MAILBOX_OUTBOX, component: <div>Mai Outbox</div> },
  { path: PATHS.MAILBOX_SENTBOX, component: <div>Mai Sentbox</div> },
  { path: PATHS.MAILBOX_POST, component: <div>Mai Post</div> },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
