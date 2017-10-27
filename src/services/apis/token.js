export default class TokenApi {
  constructor(api) {
    this.api = api;
  }

  retrieve(email, password) {
    return this.api.post('/sessions', {
      email,
      password,
    });
  }
}
