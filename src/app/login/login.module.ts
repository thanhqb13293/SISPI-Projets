import { AuthenService } from './../core/services/authen.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms'
import { NotificationService } from '../core/services/notification.service';

export const routeLogin: Routes = [
  { path: '', component: LoginComponent }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routeLogin)
  ],
  providers:[AuthenService,NotificationService],
  declarations: [LoginComponent]
})
export class LoginModule { }
