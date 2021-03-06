import axios from 'axios';
import urls from 'config/urls';
import tokenService from 'services/token';

export default function () {
  const instance = axios.create({
    baseURL: urls.api,
    headers: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  });

  instance.interceptors.request.use(config => ({
    ...config,
    params: {
      ...config.params,
      auth_token: tokenService.getToken(),
    },
  }));

  return instance;
}
