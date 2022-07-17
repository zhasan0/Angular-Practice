import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CourseCardComponent} from './course-card/course-card.component';
import {RouterModule, Routes} from "@angular/router";
import {PostListComponent} from './post-list/post-list.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HomeComponent} from './home/home.component';
import {FormComponent} from './form/form.component';
import {HttpClientModule} from "@angular/common/http";
import {ListComponent} from './list/list.component';
import {ProductsComponent} from './components/products/products.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { AgGridComponent } from './components/ag-grid/ag-grid.component';
import {AgGridModule} from "ag-grid-angular";
import { CustomCellComponent } from './components/ag-grid/custom-cell/custom-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseCardComponent,
    PostListComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
    ProductsComponent,
    NavbarComponent,
    AgGridComponent,
    CustomCellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
