export default class UsersApi {
  constructor(api) {
    this.api = api;
  }

  getCurrentUser() {
    return this.api.get('/user');
  }

  create(email, password) {
    return this.api.post('/users', {
      email,
      password,
    });
  }
}
