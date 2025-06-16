import { Routes } from '@angular/router';
import { Login } from './auth/login/login';
import { Register } from './auth/register/register';

export const routes: Routes = [
    {
        path: 'login',
        component: Login
    },
    {
        path: 'register',
        component: Register
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full' //sirve para entrar a la raiz que esta redirigiendo el login.
    }
];
