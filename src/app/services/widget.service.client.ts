const HOST = 'https://tk-course-management.herokuapp.com/';
// const HOST = 'http://localhost:4000/';

export class WidgetServiceClient {
  findWidgetsForTopic(topicId) {
    return fetch(HOST + 'api/topic/' + topicId + '/widget')
      .then(response => response.json());
  }
}
