import TokenService from 'services/token';
import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './actions';

const getInitialState = () => ({
  isAuthenticated: !!TokenService.getToken(),
  message: null,
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
    default:
      return state;
  }
}
