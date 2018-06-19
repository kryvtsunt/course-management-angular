const HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

const COURSE_URL = HOST + 'api/course';

export class CourseServiceClient {

  findAllCourses() {
    return fetch(COURSE_URL)
      .then(response => response.json());
  }
  findCourseById(courseId) {
    return fetch(COURSE_URL + '/' + courseId)
      .then(response => response.json());
  }
}
