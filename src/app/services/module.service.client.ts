const HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

const MODULE_URL = HOST + 'api/course/COURSE_ID/module';

export class ModuleServiceClient {

  findModulesForCourse(courseId) {
    return fetch(MODULE_URL.replace('COURSE_ID', courseId))
      .then(response => response.json());
  }
}
