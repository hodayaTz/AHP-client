import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { RegistrationSettlementComponent } from './registration-settlement/registration-settlement.component';
import { RegistrationVolunteersComponent } from './registration-volunteers/registration-volunteers.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { LogInRoutingModule } from './login-users-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LogInService } from './log-in.service';
import { MaterialModule } from 'src/app/material.module';



@NgModule({
  declarations: [LogInComponent,RegistrationSettlementComponent,RegistrationVolunteersComponent],
  imports: [
    CommonModule,
    RouterModule,
    LogInRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  exports:[RegistrationSettlementComponent,RegistrationVolunteersComponent],
  providers:[LogInService]
})
export class LoginUsersModule { }
