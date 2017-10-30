export default class SpacesApi {
  constructor(api) {
    this.api = api;
  }

  getAll() {
    return this.api.get('/spaces');
  }

  getOne(id) {
    return this.api.get(`/spaces/${id}`);
  }

  create(name) {
    return this.api.post('/spaces', { name });
  }

  deleteSpace(id) {
    return this.api.delete(`/spaces/${id}`);
  }
}
