import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOGIN,
  LOGOUT,
  GET_CURRENT_USER,
  getCurrentUserSuccess,
  getCurrentUserFail,
  loginSuccess,
  loginFail,
} from './actions';

function* getCurrentUser(usersService, { meta: { thunk } }) {
  try {
    const { data } = yield call([usersService, 'getCurrentUser']);
    yield put(getCurrentUserSuccess(data, thunk));
  } catch (error) {
    yield put(getCurrentUserFail(thunk));
  }
}

function logoutFlow(tokenService) {
  tokenService.removeToken();
}

function* loginFlow(tokenApi, tokenService, { payload: { email, password }, meta: { thunk } }) {
  try {
    const response = yield call([tokenApi, 'retrieve'], email, password);
    const token = response.data.access_token;
    tokenService.setToken(token);
    yield put(loginSuccess(thunk));
  } catch (error) {
    let message;
    if (error.response) {
      if (
        error.response.status === 400
        || error.response.status === 401
        || error.response.status === 403
        || error.response.status === 404
      ) {
        message = 'Wrong password or e-mail';
      } else {
        message = 'Error occurred on server.';
      }
    } else {
      message = 'Unexpected error.';
    }
    yield put(loginFail(message, thunk));
  }
}

export default function* ({ apis: { users, token: tokenApi }, tokenService }) {
  yield all([
    yield takeEvery(GET_CURRENT_USER, getCurrentUser, users),
    yield takeEvery(LOGOUT, logoutFlow, tokenService),
    yield takeEvery(LOGIN, loginFlow, tokenApi, tokenService),
  ]);
}
