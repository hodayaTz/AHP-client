import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VolunteersDetailsComponent } from './volunteers-details/volunteers-details.component';
import { VolunteersListComponent } from './volunteers-list/volunteers-list.component';
import { VolunteersService } from './volunteers.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { VolunteersRoutingModule } from './volunteers-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [VolunteersDetailsComponent,VolunteersListComponent],
  imports: [
    CommonModule,HttpClientModule,RouterModule,VolunteersRoutingModule,ReactiveFormsModule,FormsModule,MaterialModule
  ],
  providers:[VolunteersService]
})
export class VolunteersModule { }
