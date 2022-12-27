import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage'
import ParceirosPage from '@/pages/ParceirosPage'

 
const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
        path: '/',
        name: 'home',
        component: HomePage
        },
        {
        path: '/parceiros',
        name: 'parceiros',
        component: ParceirosPage
        },
       ] 
});

export default router;