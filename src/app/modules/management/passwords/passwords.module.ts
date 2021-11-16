import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordsComponent } from './passwords/passwords.component';
import { MaterialModule } from 'src/app/material.module';
import { PasswordsService } from '../../management-log-in/passwords.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NewPasswordComponent } from './new-password/new-password.component';



@NgModule({
  declarations: [PasswordsComponent,NewPasswordComponent],
  imports: [
    CommonModule,MaterialModule,FormsModule,RouterModule,
  ],
  providers:[PasswordsService]
})
export class PasswordsModule { }
