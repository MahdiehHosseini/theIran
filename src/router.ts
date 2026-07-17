import { createRouter, createWebHistory } from "vue-router";
import home from './views/HomePage.vue'
import singlePlacePage from './views/PlacePage.vue'
import turism from './views/TouristyPage.vue'
import singleCollection from './components/subComponents/singles/SingleCollection.vue'
import map from './views/MapPage.vue'
import statesPage from './views/StatesPage.vue'
import NotFound from './views/404Page.vue'

const routes = [{
    path: '/',
    name: 'Home',
    component: home
}, {
    path: '/Touristy',
    name: 'Touristy',
    component: turism
}, {
    path: '/Map',
    name: 'Map',
    component: map
}, {
    path: '/Touristy/:collectionName',
    name: 'collection page',
    component: singleCollection
}, {
    path: '/Map/:statesName',
    name: 'states page',
    component: statesPage
}, {
    path: '/location/:placeName',
    name: 'place page',
    component: singlePlacePage
}, {
    path: '/404',
    name: '404',
    component: NotFound
}, {
    path: '/:pathMatch(.*)',
    redirect: '/404'
}]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
