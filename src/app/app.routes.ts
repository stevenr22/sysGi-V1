import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Notfound } from './shared/components/notfound/notfound';
import { Home } from './pages/home/home';


export const routes: Routes = [
    {
        path: 'sysGi',
        children: [
            //MODULO HOME
            {
                path: '',
                component: Home

            },
            //MODULOS LOGIN Y REGISTRO
            {
                path: 'login',
                component: Login
            },
            {
                path: 'register',
                component: Register
            },


            //MODULO DASHBOARD
            {
                path: 'dashboard',
                component: Dashboard
            },


            //MODULO 404 NOTFOUND ("SITIO NO EXISTENTE")
            {
                path: '**',
                component: Notfound
            }

        ]
    },
    // Redirección para la raíz
    { path: '', redirectTo: 'sysGi', pathMatch: 'full' },
    // Redirección para cualquier otra ruta no encontrada fuera de sysGi
    { path: '**', redirectTo: 'sysGi' }





];