export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_FAIL = 'CREATE_TASK_FAIL';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';

export const DELETE_TASK = 'DELETE_TASK';
export const DELETE_TASK_SUCCESS = 'DELETE_TASK_SUCCESS';
export const DELETE_TASK_FAIL = 'DELETE_TASK_FAIL';

export function createTask(payload) {
  return {
    type: CREATE_TASK,
    payload,
    meta: {
      thunk: true,
    },
  };
}

export function createTaskFail(thunk) {
  return {
    type: CREATE_TASK_FAIL,
    meta: {
      thunk,
    },
    error: true,
  };
}

export function createTaskSuccess(payload, thunk) {
  return {
    type: CREATE_TASK_SUCCESS,
    payload,
    meta: {
      thunk,
      entities: 'tasks',
    },
  };
}

export function deleteTask(id, spaceId) {
  return {
    type: DELETE_TASK,
    payload: {
      id,
      spaceId,
    },
    meta: {
      thunk: true,
    },
  };
}

export function deleteTaskFail(thunk) {
  return {
    type: DELETE_TASK_FAIL,
    meta: {
      thunk,
    },
    error: true,
  };
}

export function deleteTaskSuccess(id, thunk) {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: {
      id,
    },
    meta: {
      thunk,
    },
  };
}
