import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {SectionServiceClient} from "../services/section.service.client";

@Component({
  selector: 'app-section-list',
  templateUrl: './section-list.component.html',
  styleUrls: ['./section-list.component.css']
})
export class SectionListComponent implements OnInit {

  constructor(private service: SectionServiceClient,
              private router: Router,
              private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.loadSections(params['courseId']))
  }

  sectionName = '';
  seats = '';
  courseId = '';
  sections = [];
  enrollment;
  loadSections(courseId) {
    this.courseId = courseId;
    this
      .service
      .findSectionsForCourse(courseId)
      .then(sections => this.sections = sections)
  }

  createSection(sectionName, seats) {
    this
      .service
      .createSection(this.courseId, sectionName, seats)
      .then(() => {
        this.loadSections(this.courseId);
      });
  }

  checkEnrollment(courseId){
    this.service.checkSectionEnrollment(courseId)
      .then(response => {
        this.enrollment = response
       } );
  }

  enroll(sectionId) {
    // alert(section._id);
    this.service
      .enrollStudentInSection(this.courseId, sectionId)
      .then(() => {
        this.loadSections(this.courseId);
      })
      .then(() => this.checkEnrollment(this.courseId));
  }

  drop(sectionId){
    this.service
      .dropStudentInSection(sectionId)
      .then(() => {
        this.loadSections(this.courseId);
      })
      .then(() => this.checkEnrollment(this.courseId));
  }

  ngOnInit() {
      this.checkEnrollment(this.courseId);
  }

}
