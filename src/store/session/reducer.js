import TokenService from 'services/token';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  REGISTRATION_FAIL,
  REGISTRATION,
  REGISTRATION_SUCCESS,
} from './actions';

const getInitialState = () => ({
  isAuthenticated: !!TokenService.getToken(),
  message: null,
  registrationErrors: null,
});

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case LOGIN:
    case LOGIN_SUCCESS:
      return getInitialState();
    case LOGIN_FAIL:
    case LOGOUT:
      return {
        ...getInitialState(),
        message: action.payload.message,
      };
    case REGISTRATION:
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        registrationErrors: null,
      };
    case REGISTRATION_FAIL:
      return {
        ...state,
        registrationErrors: action.payload,
      };
    default:
      return state;
  }
}
