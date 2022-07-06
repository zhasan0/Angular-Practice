import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CourseCardComponent} from "./course-card/course-card.component";
import {PostListComponent} from "./post-list/post-list.component";
import {HomeComponent} from "./home/home.component";
import {FormComponent} from "./form/form.component";
import {ListComponent} from "./list/list.component";

// declare routes
const routes: Routes = [
  {
    path: '', component: CourseCardComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'posts', component: PostListComponent
  },
  {
    path: 'forms', component: FormComponent
  },
  {
    path: 'lists', component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
