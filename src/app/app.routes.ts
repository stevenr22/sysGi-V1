import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';
import { Dashboard } from './pages/dashboard/dashboard';
import { Notfound } from './shared/components/notfound/notfound';
import { Home } from './pages/home/home';


export const routes: Routes = [
    {
        path: '',
        component: Home

    },
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: 'dashboard',
        component: Dashboard
    },
    {
        path: '**',
        component: Notfound
    }
];