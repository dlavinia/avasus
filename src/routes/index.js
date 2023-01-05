import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from '@/pages/HomePage'
import ParceirosPage from '@/pages/ParceirosPage'
import CursoPage from '@/pages/CursoPage'
import TransparenciaPage from '@/pages/TransparenciaPage'

import ModulosPage from '@/pages/ModulosPage'


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
            component: CursoPage
        },
        {
            path: '/cursos/modulos',
            name: 'modulos',
            component: ModulosPage
        },
        {
            path: '/transparencia',
            name: 'transparencia',
            component: TransparenciaPage
        }
    ]
});

export default router;