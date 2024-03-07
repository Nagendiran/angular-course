import { AfterViewInit, Component, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{

  courses = COURSES

  @ViewChild(CourseCardComponent)
  courseCard: CourseCardComponent

  @ViewChildren(CourseCardComponent)
  courseCards: QueryList<CourseCardComponent>

  clickMethod(course: Course) {
    console.log('Parent component' + JSON.stringify(course))
  }

  // clickMethod1(course: Course) {
  //   console.log('Parent component' + JSON.stringify(course))
  // }

  ngAfterViewInit(): void {
    console.log('course card : ', this.courseCard)
    console.log('course cards : ', this.courseCards)
  }
}
