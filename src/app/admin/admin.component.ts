import {Component, OnInit} from '@angular/core';
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
              private courseService: CourseServiceClient, private userService: UserServiceClient, private route: ActivatedRoute) {
  }

  courses: Course[] = [];
  sectionName = '';
  seats = '';
  courseId = '';
  courseTitle = '';
  sectionId = '';
  editMode = false;
  sections = [];

  createSection() {
    if (this.courseId !== '') {
      this
        .sectionService
        .createSection(this.courseId, this.sectionName, this.seats)
        .then(() => {
          this.findAllSectionsForCourse(this.courseId, this.courseTitle);
          this.cleanData();
        });
    } else {
      alert('Choose the course first');
    }
  }

  updateSection() {
    this.sectionService.updateSection(this.sectionId, this.sectionName, this.seats)
      .then(() => {
        this.findAllSectionsForCourse(this.courseId, this.courseTitle);
        this.cleanData();
      });
  }

  deleteSection(sectionId) {
    this.sectionService.deleteSection(sectionId)
      .then(() => {
        this.findAllSectionsForCourse(this.courseId, this.courseTitle);
        this.cleanData();
      });
  }

  cleanData() {
    this.sectionName = '';
    this.seats = '';
    this.editMode = false;
  }

  editSection(name, seats, id) {
    this.editMode = true;
    this.sectionName = name;
    this.sectionId = id;
    this.seats = seats;
  }

  findAllSectionsForCourse(courseId, courseTitle) {
    this.courseId = courseId;
    this.courseTitle = courseTitle
    this.sectionService.findSectionsForCourse(courseId)
      .then(sections => this.sections = sections);
  }

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);

  }

}
