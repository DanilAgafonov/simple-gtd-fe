export default class TaskApi {
  constructor(api) {
    this.api = api;
  }

  create(data) {
    return this.api.post('/tasks', data);
  }

  deleteTask(id) {
    return this.api.delete(`/tasks/${id}`);
  }
}
