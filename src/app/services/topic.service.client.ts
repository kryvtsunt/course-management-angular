const HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

export class TopicServiceClient {
  findTopicsForLesson(courseId, moduleId, lessonId) {
    return fetch(HOST + 'api/course/' + courseId + '/module/' + moduleId + '/lesson/' + lessonId + '/topic')
      .then(response => response.json());
  }
}
