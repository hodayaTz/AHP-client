import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './modules/login-users/log-in/log-in.component';
import { ManagementLogInComponent } from './modules/management-log-in/management-log-in/management-log-in.component';

const routes: Routes = [
  {path:"",redirectTo:"logInUsers",pathMatch:"full"},
  {path:"logInUsers",component:LogInComponent},
  {path:"logInManagement",component:ManagementLogInComponent},
  {path:"management",loadChildren: () => import("./modules/management/management.module").then(m => m.ManagementModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
