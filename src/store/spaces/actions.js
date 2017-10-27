export const LOAD_SPACES = 'LOAD_SPACES';
export const LOAD_SPACES_SUCCESS = 'LOAD_SPACES_SUCCESS';
export const LOAD_SPACES_FAIL = 'LOAD_SPACES_FAIL';

export const LOAD_SPACE = 'LOAD_SPACE';
export const LOAD_SPACE_SUCCESS = 'LOAD_SPACE_SUCCESS';
export const LOAD_SPACE_FAIL = 'LOAD_SPACE_FAIL';

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

export function loadSpace(id) {
  return {
    type: LOAD_SPACE,
    payload: {
      id,
    },
    meta: {
      thunk: true,
    },
  };
}

export function loadSpaceSuccess(payload, thunk) {
  return {
    type: LOAD_SPACE_SUCCESS,
    payload,
    meta: {
      thunk,
      entities: 'spaces',
    },
  };
}

export function loadSpaceFail(thunk) {
  return {
    type: LOAD_SPACE_FAIL,
    error: true,
    meta: {
      thunk,
    },
  };
}
