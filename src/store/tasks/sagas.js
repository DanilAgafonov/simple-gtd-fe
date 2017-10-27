import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  CREATE_TASK,
  createTaskSuccess,
  createTaskFail,
} from './actions';

function* createFlow(
  tasksService,
  {
    payload: text,
    meta: { thunk },
  },
) {
  try {
    const response = yield call([tasksService, 'create'], text);
    yield put(createTaskSuccess(response.data, thunk));
  } catch (error) {
    yield put(createTaskFail('Fail.', thunk));
  }
}

export default function* ({ apis: { tasks } }) {
  yield all([
    yield takeEvery(CREATE_TASK, createFlow, tasks),
  ]);
}
