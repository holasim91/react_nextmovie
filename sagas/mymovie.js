import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { LOAD_MY_MOVIE_FAILURE, LOAD_MY_MOVIE_REQUEST, LOAD_MY_MOVIE_SUCCESS } from '../reducers/mymovie';


function* loadMyMovie(action){
    try {
        yield delay(1000);
        yield put({
          type: LOAD_MY_MOVIE_SUCCESS,
          data: action.data,
        });
      } catch (err) {
        yield put({
          type: LOAD_MY_MOVIE_FAILURE,
          data: err.response.data,
        });
      }
}


function* watchLoadMyMovie() {
    yield takeLatest(LOAD_MY_MOVIE_REQUEST, loadMyMovie);
  }
  
export default function* myMovieSaga() {
    yield all([fork(watchLoadMyMovie)]);
  }
  