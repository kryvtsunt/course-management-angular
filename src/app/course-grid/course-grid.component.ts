import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";
import {UserServiceClient} from "../services/user.service.client";
import {SectionServiceClient} from "../services/section.service.client";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-course-grid',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient, private userService: UserServiceClient) { }

  courses: Course[] = [];
  myCourses: Course[] = [];
  courseIds = []
  status: boolean;
  ngOnInit() {
    this.userService.checkStatus().then((st) => this.status = st).then(() => {
      if (this.status) {
        this.sectionService.findSectionsForStudent()
          .then(async sections => {for (const en of sections) {
            this.myCourses[this.myCourses.length] = await this.courseService.findCourseById(en.section.courseId);
          }});
      }
    });
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

}
