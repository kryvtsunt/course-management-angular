import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";
import {UserServiceClient} from "../services/user.service.client";
import {CourseServiceClient} from "../services/course.service.client";
import {Course} from "../models/coruse.model.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private courseService: CourseServiceClient,
              private userService: UserServiceClient,
              private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName = '';
  seats = '';
  courseId = '';
  course: Course;
  sections = [];
  enrollment;
  status: boolean;

  loadSections(courseId) {
    this.courseId = courseId;
    this.service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
    this.courseService.findCourseById(courseId)
      .then((course) => this.course = course);
  }

  checkEnrollment(courseId){
    this.userService.checkStatus().then((st) => this.status = st).then(() => {
      if (this.status) {
    this.service.checkSectionEnrollment(courseId)
      .then(response => {
        this.enrollment = response
       } );
      }});
  }

  enroll(sectionId) {
    // alert(section._id);
    this.service
      .enrollStudentInSection(this.courseId, sectionId)
      .then(() => this.loadSections(this.courseId))
      .then(() => this.checkEnrollment(this.courseId));
  }

  drop(sectionId){
    this.service
      .dropStudentInSection(sectionId)
      .then(() => this.loadSections(this.courseId))
      .then(() => this.checkEnrollment(this.courseId));
  }

  ngOnInit(){
      this.checkEnrollment(this.courseId);
  }

}
