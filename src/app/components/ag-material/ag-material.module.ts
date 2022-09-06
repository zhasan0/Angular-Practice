import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgMaterialRoutingModule } from './ag-material-routing.module';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    NewComponent
  ],
  imports: [
    CommonModule,
    AgMaterialRoutingModule,
  ]
})
export class AgMaterialModule { }
