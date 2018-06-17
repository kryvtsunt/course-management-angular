import { Component, OnInit } from '@angular/core';
import {Course} from "../models/coruse.model.client";
import {SectionServiceClient} from "../services/section.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private sectionService: SectionServiceClient,
              private courseService: CourseServiceClient, private userService: UserServiceClient,  private route: ActivatedRoute) {}

  courses: Course[] = [];
  myCourses: Course[] = [];
  status: boolean;
  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];

  loadSections(courseId) {
    this.courseId = courseId;
    this
      .sectionService
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections)
  }

  createSection(sectionName, seats, courseId) {
    this
      .sectionService
      .createSection(courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }
  findAllSectionsForCourse(courseId){
    this.courseId = courseId;
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }
  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

  }

}
