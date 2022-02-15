import { createRouter, createWebHistory } from 'vue-router'
import AboutCompany from '../components/web-page/content/AboutCompany.vue'
import TheContact from '../components/web-page/content/TheContact.vue'
import TheGallery from '../components/web-page/content/TheGallery.vue'
import LogHomes from '../components/web-page/content/offer/LogHomes.vue'
import WoodTrading from '../components/web-page/content/offer/WoodTrading.vue'
import TheHunting from '../components/web-page/content/offer/TheHunting.vue'
import TheProgramming from '../components/web-page/content/offer/TheProgramming.vue'
import TheOfffer from '../components/web-page/content/offer/TheOffer.vue'

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
    path: '/offer',
    name: TheOfffer,
    component: TheOfffer,
    children: [
      {
        path: 'woodtrading',
        name: WoodTrading,
        component: WoodTrading
      },
      {
        path: 'loghomes',
        name: LogHomes,
        component: LogHomes
      },
      {
        path: 'hunting',
        name: TheHunting,
        component: TheHunting
      },
      {
        path: 'programming',
        name: TheProgramming,
        component: TheProgramming
      }
    ]
  },
  {
    path: '/:notFound(.*)',
    component: AboutCompany
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
