export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const GET_CURRENT_USER_SUCCESS = 'GET_CURRENT_USER_SUCCESS';
export const GET_CURRENT_USER_FAIL = 'GET_CURRENT_USER_FAIL';
export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';
export const REGISTRATION = 'REGISTRATION';
export const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
export const REGISTRATION_FAIL = 'REGISTRATION_FAIL';

export function getCurrentUser() {
  return {
    type: GET_CURRENT_USER,
    meta: {
      thunk: true,
    },
  };
}

export function getCurrentUserSuccess(payload, thunk) {
  return {
    type: GET_CURRENT_USER_SUCCESS,
    payload,
    meta: {
      thunk,
      entities: 'users',
    },
  };
}

export function getCurrentUserFail(thunk) {
  return {
    type: GET_CURRENT_USER_FAIL,
    error: true,
    meta: {
      thunk,
    },
  };
}

export function login(email, password) {
  return {
    type: LOGIN,
    payload: { email, password },
    meta: {
      thunk: true,
    },
  };
}

export function loginSuccess(thunk) {
  return {
    type: LOGIN_SUCCESS,
    meta: {
      thunk,
    },
  };
}

export function loginFail(message, thunk) {
  return {
    type: LOGIN_FAIL,
    error: true,
    payload: {
      message,
    },
    meta: {
      thunk,
    },
  };
}

export function logout(message) {
  return {
    type: LOGOUT,
    payload: {
      message,
    },
  };
}

export function registration(email, password, passwordConfirmation) {
  return {
    type: REGISTRATION,
    payload: {
      email,
      password,
      passwordConfirmation,
    },
    meta: {
      thunk: true,
    },
  };
}

export function registrationSuccess(thunk) {
  return {
    type: REGISTRATION_SUCCESS,
    meta: {
      thunk,
    },
  };
}

export function registrationFail(payload, thunk) {
  return {
    type: REGISTRATION_FAIL,
    error: true,
    payload,
    meta: {
      thunk,
    },
  };
}

