export const LOAD_SPACES = 'LOAD_SPACES';
export const LOAD_SPACES_SUCCESS = 'LOAD_SPACES_SUCCESS';
export const LOAD_SPACES_FAIL = 'LOAD_SPACES_FAIL';

export const LOAD_SPACE = 'LOAD_SPACE';
export const LOAD_SPACE_SUCCESS = 'LOAD_SPACE_SUCCESS';
export const LOAD_SPACE_FAIL = 'LOAD_SPACE_FAIL';

export const CREATE_SPACE = 'CREATE_SPACE';
export const CREATE_SPACE_SUCCESS = 'CREATE_SPACE_SUCCESS';
export const CREATE_SPACE_FAIL = 'CREATE_SPACE_FAIL';

export const DELETE_SPACE = 'DELETE_SPACE';
export const DELETE_SPACE_SUCCESS = 'DELETE_SPACE_SUCCESS';
export const DELETE_SPACE_FAIL = 'DELETE_SPACE_FAIL';

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

export function createSpace(name) {
  return {
    type: CREATE_SPACE,
    payload: {
      name,
    },
    meta: {
      thunk: true,
    },
  };
}

export function createSpaceSuccess(payload, thunk) {
  return {
    type: CREATE_SPACE_SUCCESS,
    payload,
    meta: {
      thunk,
      entities: 'spaces',
    },
  };
}

export function createSpaceFail(thunk) {
  return {
    type: CREATE_SPACE_FAIL,
    error: true,
    meta: {
      thunk,
    },
  };
}

export function deleteSpace(id) {
  return {
    type: DELETE_SPACE,
    payload: {
      id,
    },
    meta: {
      thunk: true,
    },
  };
}

export function deleteSpaceSuccess(id, thunk) {
  return {
    type: DELETE_SPACE_SUCCESS,
    payload: {
      id,
    },
    meta: {
      thunk,
    },
  };
}

export function deleteSpaceFail(thunk) {
  return {
    type: DELETE_SPACE_FAIL,
    error: true,
    meta: {
      thunk,
    },
  };
}

