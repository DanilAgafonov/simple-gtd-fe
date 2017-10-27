import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_SPACES,
  loadSpacesSuccess,
  loadSpacesFail,
} from './actions';

function* loadSpaces(spacesApi, { meta: { thunk } }) {
  try {
    const { data } = yield call([spacesApi, 'getAll']);
    yield put(loadSpacesSuccess(data, thunk));
  } catch (error) {
    yield put(loadSpacesFail(thunk));
  }
}

export default function* ({ apis: { spaces } }) {
  yield all([
    yield takeEvery(LOAD_SPACES, loadSpaces, spaces),
  ]);
}
