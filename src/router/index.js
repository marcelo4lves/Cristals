import { createRouter, createWebHistory } from 'vue-router'
import Cristals from '../components/Cristals.vue'
import Page from '../components/Page.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Cristals},
    {path: '/page/:id', component: Page, props: true}
  ]
})

export default router
