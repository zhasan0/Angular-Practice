import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgMaterialComponent } from './ag-material.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  {
    path: '',
    component: AgMaterialComponent,
    children: [
      { path: 'new', component: NewComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgMaterialRoutingModule { }
