import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {COURSES} from "../../db-data";
import {Course} from "../../course";
import {ChannelService} from "../services/channel.service";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  courseIndex: number;


  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() {

  }

  ngOnInit(): void {
    // this.f();
  }

  onCourseViewed() {
    this.courseEmitter.emit(this.course);
  }

  isImgVisible() {
    return this.course && this.course.iconUrl;
  }

  cardClasses() {
    return {
      'beginner': this.course.category == 'BEGINNER'
    }
  }

}
