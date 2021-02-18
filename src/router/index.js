import { createRouter, createWebHistory } from 'vue-router'
import AboutCompany from '../components/web-page/content/AboutCompany.vue'
import TheContact from '../components/web-page/content/TheContact.vue'
import TheGallery from '../components/web-page/content/TheGallery.vue'
import LogHomes from '../components/web-page/content/offer/LogHomes.vue'
import WoodTrading from '../components/web-page/content/offer/WoodTrading.vue'


const routes = [
  {
    path: '/about', alias: '/',
    name: 'AboutCompany',
    component: AboutCompany
  },
  {
    path: '/contact',
    name: 'TheContact',
    component: TheContact
  },
  {
    path: '/gallery',
    name: 'TheGallery',
    component: TheGallery
  },
  {
    path: '/offer/woodtrading',
    name: WoodTrading,
    component: WoodTrading
  },
  {
    path: '/offer/loghomes',
    name: LogHomes,
    component: LogHomes
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
