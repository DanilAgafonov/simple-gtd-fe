export default class TokenService {
  static getToken() {
    return localStorage.getItem('access_token');
  }

  static removeToken() {
    localStorage.removeItem('access_token');
  }

  static setToken(token) {
    localStorage.setItem('access_token', token);
  }
}
