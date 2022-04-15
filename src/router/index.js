import { createRouter, createWebHistory } from 'vue-router'
import AboutPage from '../components/AboutPage.vue';
import HomePage from '../components/HomePage.vue';
import EventDetails from "../components/EventDetails.vue";
import Login from "../components/login.vue";
import FavorisPage from "../components/FavorisPage.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/event/:eventId',
    name: 'EventDetails',
    props:true,
    component: EventDetails
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/favoris',
    name: 'Favoris',
    component: FavorisPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router