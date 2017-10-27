export const CREATE_TASK = 'CREATE_TASK';
export const CREATE_TASK_FAIL = 'CREATE_TASK_FAIL';
export const CREATE_TASK_SUCCESS = 'CREATE_TASK_SUCCESS';

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

