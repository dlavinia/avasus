import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage'
import ParceirosPage from '@/pages/ParceirosPage'
import CursoPage from '@/pages/CursoPage'

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
        {
        path: '/cursos/:id',
        name: 'cursos',
        component:CursoPage
        },
       ] 
});

export default router;