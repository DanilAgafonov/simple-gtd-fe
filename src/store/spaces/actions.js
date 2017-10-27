export const LOAD_SPACES = 'LOAD_SPACES';
export const LOAD_SPACES_SUCCESS = 'LOAD_SPACES_SUCCESS';
export const LOAD_SPACES_FAIL = 'LOAD_SPACES_FAIL';

export function loadSpaces() {
  return {
    type: LOAD_SPACES,
    meta: {
      thunk: true,
    },
  };
}

export function loadSpacesSuccess(payload, thunk) {
  return {
    type: LOAD_SPACES_SUCCESS,
    payload,
    meta: {
      thunk,
      entities: 'spaces',
    },
  };
}

export function loadSpacesFail(thunk) {
  return {
    type: LOAD_SPACES_FAIL,
    error: true,
    meta: {
      thunk,
    },
  };
}
