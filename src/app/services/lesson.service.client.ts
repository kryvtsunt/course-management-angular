const HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

export class LessonServiceClient {
  findLessonsForModule(courseId, moduleId) {
    return fetch(HOST + 'api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
}
