import { createRouter, createWebHistory } from "vue-router";
import home from './pages/HomePage.vue'
import singlePlacePage from './pages/PlacePage.vue'
import turism from './pages/TouristyPage.vue'
import singleCollection from './components/subComponents/singles/SingleCollection.vue'
import map from './pages/MapPage.vue'
import statesPage from './pages/StatesPage.vue'
import NotFound from './pages/404Page.vue'
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