import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history/history.component';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HistoryService } from './histort.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,MaterialModule,HttpClientModule,MatTableModule,RouterModule
  ],
  providers:[HistoryService]
})
export class HistoryModule { }
