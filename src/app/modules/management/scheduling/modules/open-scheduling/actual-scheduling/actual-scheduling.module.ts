import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OptionalSettlementsComponent } from './optional-settlements/optional-settlements.component';
import { MaterialModule } from 'src/app/material.module';
import { ActualSchedulingService } from './actual-scheduling.service';
import { ActualSchedulingRoutingModule } from './actual-scheduling-routing.service';



@NgModule({
  declarations: [OptionalSettlementsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ActualSchedulingRoutingModule
  ],
  providers:[ActualSchedulingService]
})
export class ActualSchedulingModule { }
