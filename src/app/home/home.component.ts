import { Component, OnInit } from '@angular/core';
import {COURSES} from "../../db-data";
import {Course} from "../../course";
import {ChannelService} from "../services/channel.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private chService: ChannelService) { }

  data = {
    title: 'Angular World!'
  };

  ngOnInit(): void {
    this.f();
  }

  onClickEvent() {
    alert('Clicked');
  }

  onKeyUp(newTitle: string) {
    this.data.title = newTitle;
  }

  courses = COURSES;

  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];
  // beginnerCourse = COURSES[3];

  onCourseSelected(course:Course) {
    console.log('Course view clicked and getting course!', course);
  }

  startDate = new Date(2000, 0, 1);
  price = 9.91111;
  percentage = 0.65;

  f(){
    this.chService.getValue(this.data.title);
  }

  message(){
    return this.chService.display();
  }


}
