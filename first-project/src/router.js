import { createMemoryHistory, createRouter } from 'vue-router'

import Page from './Page.vue'
import About from './About.vue'
import Database from './Database.vue'

const routes = [
  { path: '/', component: Page },
  { path: '/about', component: About },
  { path: '/database', component: Database }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router