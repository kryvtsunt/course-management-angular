const HOST = 'https://tk-course-management-nodejs.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

const SECTION_URL = HOST + 'api/course/COURSEID/section';

export class SectionServiceClient {



  findSectionsForStudent() {
    const url = HOST + 'api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(courseId, sectionId) {
    const url = HOST + 'api/course/' + courseId + '/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  dropStudentInSection(sectionId) {
    const url = HOST + 'api/section/' + sectionId + '/drop';
    return fetch(url, {
      method: 'delete',
      credentials: 'include'
    });
  }

  checkSectionEnrollment(courseId) {
    return fetch(HOST + 'api/course/' + courseId + '/enrollment/check', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateSection(sectionId, name, seats) {
    const url = HOST + 'api/section/' + sectionId + '/update';
    const section = {name: name, seats: seats};
    return fetch(url, {
      method: 'put',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    const url = HOST + 'api/section/' + sectionId + '/delete';
    return fetch(url, {
      method: 'delete',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
