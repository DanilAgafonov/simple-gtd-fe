import { put, takeEvery, call, all } from 'redux-saga/effects';
import {
  LOAD_SPACES,
  LOAD_SPACE,
  loadSpacesSuccess,
  loadSpacesFail,
  loadSpaceSuccess,
  loadSpaceFail,
} from './actions';

function* loadSpaces(spacesApi, { meta: { thunk } }) {
  try {
    const { data } = yield call([spacesApi, 'getAll']);
    yield put(loadSpacesSuccess(data, thunk));
  } catch (error) {
    yield put(loadSpacesFail(thunk));
  }
}

function* loadSpace(spacesApi, { payload: { id }, meta: { thunk } }) {
  try {
    const { data } = yield call([spacesApi, 'getOne'], id);
    yield put(loadSpaceSuccess(data, thunk));
  } catch (error) {
    yield put(loadSpaceFail(thunk));
  }
}

export default function* ({ apis: { spaces } }) {
  yield all([
    yield takeEvery(LOAD_SPACES, loadSpaces, spaces),
    yield takeEvery(LOAD_SPACE, loadSpace, spaces),
  ]);
}
