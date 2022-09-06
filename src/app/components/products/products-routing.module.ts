import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductEditComponent} from "./product-edit/product-edit.component";
import {ProductsComponent} from "./products.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {path: '', component: ProductsComponent},
      {path: 'edit/:id', component: ProductEditComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
