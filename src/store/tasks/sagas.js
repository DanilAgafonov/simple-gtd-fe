import { put, takeEvery, call, all, select } from 'redux-saga/effects';
import { loadSpaceSuccess } from 'store/spaces/actions';
import {
  CREATE_TASK,
  DELETE_TASK,
  createTaskSuccess,
  createTaskFail,
  deleteTaskSuccess,
  deleteTaskFail,
} from './actions';

function* createFlow(
  tasksService,
  {
    payload,
    meta: { thunk },
  },
) {
  try {
    const response = yield call([tasksService, 'create'], payload);
    yield put(createTaskSuccess(response.data, thunk));
    yield put(loadSpaceSuccess({
      id: payload.space_id,
      tasks: [
        ...(yield select(state => state.entities.spaces[payload.space_id].tasks)),
        response.data.id,
      ],
    }));
  } catch (error) {
    yield put(createTaskFail(thunk));
  }
}

function* deleteFlow(tasksService, { payload: { id, spaceId }, meta: { thunk } }) {
  try {
    yield call([tasksService, 'deleteTask'], id);
    yield put(deleteTaskSuccess(id, thunk));
    yield put(loadSpaceSuccess({
      id: spaceId,
      tasks: (yield select(state => state.entities.spaces[spaceId].tasks))
        .filter(tid => +tid !== +id),
    }));
  } catch (error) {
    yield put(deleteTaskFail(thunk));
  }
}

export default function* ({ apis: { tasks } }) {
  yield all([
    yield takeEvery(CREATE_TASK, createFlow, tasks),
    yield takeEvery(DELETE_TASK, deleteFlow, tasks),
  ]);
}
