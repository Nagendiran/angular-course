import { AfterContentInit, Component, ContentChildren, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course';
import { CourseImageComponent } from '../course-image/course-image.component';


@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent implements AfterContentInit {

    ngAfterContentInit(): void {
      console.log(" content children ",this.childrens)
    }

    @Input()
    course: Course

    @Input()
    index: number

    @Output()
    newEvent = new EventEmitter<Course>()

    @ContentChildren(CourseImageComponent)
    childrens: CourseImageComponent

    clickEvent(){
      console.log('child component'+JSON.stringify(this.course))
      this.newEvent.emit(this.course)
    }
}
