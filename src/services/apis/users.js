export default class UsersApi {
  constructor(api) {
    this.api = api;
  }

  getCurrentUser() {
    return this.api.get('/user');
  }

  create(email, password, firstName, lastName) {
    return this.api.post('/users', {
      user: {
        email,
        password,
        first_name: firstName,
        last_name: lastName,
      },
    });
  }
}
