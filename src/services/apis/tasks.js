export default class TaskApi {
  constructor(api) {
    this.api = api;
  }

  create(text) {
    return this.api.post('/tasks', {
      text,
    });
  }
}
