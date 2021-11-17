import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolidaysModule } from './holidays/holidays.module';
import { SettlementModule } from './settlement/settlement.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { ManagamentRoutingModule } from './management-routing.module';
import { SchedulingModule } from './scheduling/scheduling.module';
import { MaterialModule } from 'src/app/material.module';
import { NavComponent } from './nav/nav.component';
import { HistoryModule } from './history/history.module';
import { MessageBeforeDeleteComponent } from './message-before-delete/message-before-delete.component';
import { PasswordDialogComponent } from './password-dialog/password-dialog.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PasswordsService } from '../management-log-in/passwords.service';
import { PasswordsModule } from './passwords/passwords.module';



@NgModule({
  declarations: [
NavComponent,MessageBeforeDeleteComponent,
PasswordDialogComponent
  ],
  imports: [
    CommonModule,ManagamentRoutingModule,FormsModule,RouterModule,
    MaterialModule,HistoryModule ],
    providers:[PasswordsService]
})
export class ManagementModule { }
