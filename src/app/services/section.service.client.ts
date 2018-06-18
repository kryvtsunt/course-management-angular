export class SectionServiceClient {

  SECTION_URL = 'http://localhost:4000/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://localhost:4000/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  enrollStudentInSection(courseId, sectionId) {
    const url = 'http://localhost:4000/api/course/' + courseId + '/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  dropStudentInSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/drop';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  checkSectionEnrollment(courseId) {
    return fetch('http://localhost:4000/api/course/' + courseId + '/enrollment/check', {
      credentials: 'include'
    })
      .then(response => response.json());
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  updateSection(sectionId, name, seats) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/update';
    const section = {name: name, seats: seats};
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(section),
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    const url = 'http://localhost:4000/api/section/' + sectionId + '/delete';
    return fetch(url, {
      method: 'post',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
