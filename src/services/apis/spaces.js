export default class SpacesApi {
  constructor(api) {
    this.api = api;
  }

  getAll() {
    return this.api.get('/spaces');
  }
}
