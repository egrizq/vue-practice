import { createMemoryHistory, createRouter } from 'vue-router'

import Page from './Page.vue'
import About from './About.vue'

const routes = [
  { path: '/', component: Page },
  { path: '/about', component: About },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router