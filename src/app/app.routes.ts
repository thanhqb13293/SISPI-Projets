import { AuthGuard } from './core/guards/auth.guard';
import { Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'main',
        loadChildren: './main/main.module#MainModule',
        canActivate:[AuthGuard]
    }
]