import {
  LOAD_SPACES_SUCCESS,
  LOAD_SPACES,
} from './actions';

const getInitialState = () => ({
  list: [],
});

export default function (state = getInitialState(), action) {
  switch (action.type) {
    case LOAD_SPACES:
      return getInitialState();
    case LOAD_SPACES_SUCCESS:
      return {
        ...getInitialState(),
        list: action.payload,
      };
    default:
      return state;
  }
}
