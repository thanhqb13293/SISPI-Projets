//import { AuthGuard } from './../core/guards/auth.guard';
import { Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const mainRoutes: Routes = [
    {
        path: '', component: MainComponent, children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'user', loadChildren: './user/user.module#UserModule' },
            {
                path: 'home', loadChildren: './home/home.module#HomeModule'
            },
            {
              path:'bonlivraisonSpi',loadChildren:'./bon-livraison-spi/bon-livraison-spi.module#BonLivraisonSpiModule'  
            },
            {
                path:'role',loadChildren:'./role/role.module#RoleModule'
            }
        ]
    }
]

