import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { HttpClientModule } from '@angular/common/http';
import { HistoryService } from './histort.service';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HistoryComponent } from './history/history.component';



@NgModule({
  declarations: [HistoryComponent],
  imports: [
    CommonModule,MaterialModule,HttpClientModule,MatTableModule,RouterModule,ReactiveFormsModule,FormsModule
  ],
  providers:[HistoryService]
})
export class HistoryModule { }
