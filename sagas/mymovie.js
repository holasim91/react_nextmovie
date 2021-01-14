import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { LOAD_MY_MOVIES_FAILURE, LOAD_MY_MOVIES_REQUEST, LOAD_MY_MOVIES_SUCCESS } from '../reducers/mymovie';

function* loadMyMovie(action) {
  try {
    yield delay(1000);
    yield put({
      type: LOAD_MY_MOVIES_SUCCESS,
      data: {
        userId: action.data.userId,
      },
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_MOVIES_FAILURE,
      data: err.response.data,
    });
  }
}

function* watchLoadMyMovie() {
  yield takeLatest(LOAD_MY_MOVIES_REQUEST, loadMyMovie);
}

export default function* myMovieSaga() {
  yield all([fork(watchLoadMyMovie)]);
}
