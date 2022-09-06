import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseCardComponent} from "./course-card/course-card.component";
import {PostListComponent} from "./post-list/post-list.component";
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {ListComponent} from "./list/list.component";
import {ProductsComponent} from "./components/products/products.component";
import {AgGridComponent} from "./components/ag-grid/ag-grid.component";

// declare routes
const routes: Routes = [
  {
    path: '', component: CourseCardComponent
  },
  {
    path: 'home', title: "Home", component: HomeComponent
  },
  {
    path: 'posts', title: "Posts", component: PostListComponent
  },
  {
    path: 'forms', component: FormComponent
  },
  {
    path: 'lists', title: "AG Lists", component: ListComponent
  },
  {
    path: 'products',
    title: "Products",
    loadChildren:
      () => import('./components/products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'ag-grid', title: "AG Grid", component: AgGridComponent
  },
  {
    path: 'ag-material',
    title: "Angular Material",
    loadChildren:
    () => import('./components/ag-material/ag-material.module').then(m => m.AgMaterialModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
