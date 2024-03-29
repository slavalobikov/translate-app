import { createRouter, createWebHistory, createWebHashHistory  } from 'vue-router'
import { PATHS } from '../constants/PATHS'
import Home from './../pages/Home.vue'
import About from './../pages/About.vue'
import Terms from './../pages/Terms.vue'
import Privacy from './../pages/Privacy.vue'
import TermsOfUse from './../pages/TermsOfUse.vue'
import ChooseLanguage from '../pages/ChooseLanguage.vue'
import Login from './../pages/Login.vue';

const routes = [
  { path: PATHS.HOME, component: Home },
  { path: PATHS.ADD_FUNDS, component: <div>add founds</div> },
  { path: PATHS.HISTORY, component: <div>history</div> },
  { path: PATHS.CHANGE_PASSWORD, component: <div>Change password</div> },
  { path: PATHS.MAILBOX_INBOX, component: <div>Mai Inbox</div> },
  { path: PATHS.MAILBOX_OUTBOX, component: <div>Mai Outbox</div> },
  { path: PATHS.MAILBOX_SENTBOX, component: <div>Mai Sentbox</div> },
  { path: PATHS.MAILBOX_POST, component: <div>Mai Post</div> },
  { path: PATHS.ABOUT, component: About },
  { path: PATHS.TERMS_CONDITIONS, component: Terms },
  { path: PATHS.PRIVACY_POLICY, component: Privacy },
  { path: PATHS.REFUND_POLICY, component: <div>refund policy</div> },
  { path: PATHS.OUR_SERVICE, component: <div>out service</div> },
  { path: PATHS.FAQ, component: <div>faq</div> },
  { path: PATHS.JOB, component: <div>job</div> },
  { path: PATHS.CONTACT, component: <div>contact</div> },
  { path: PATHS.TERMS_OF_USE, component: TermsOfUse },
  { path: PATHS.CHOOSE_LANG, component: ChooseLanguage },
  { path: PATHS.LOGIN, component: Login },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
