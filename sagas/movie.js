import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  LOAD_MOVIE_DETAIL_FAILURE,
  LOAD_MOVIE_DETAIL_REQUEST,
  LOAD_MOVIE_DETAIL_SUCCESS,
  LOAD_POPULAR_MOVIES_FAILURE,
  LOAD_POPULAR_MOVIES_REQUEST,
  LOAD_POPULAR_MOVIES_SUCCESS,
} from '../reducers/movie';

const API_KEY = '3e7a66c4d6dbae8f867aa285509a095d';

function movieDetailAPI(data) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${data}?api_key=${API_KEY}&language=en-US`,
  );
}

function* movieDetail(action) {
  try {
    const result = yield call(movieDetailAPI, action.data);
    yield put({
      type: LOAD_MOVIE_DETAIL_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MOVIE_DETAIL_FAILURE,
      error: err.response.data,
    });
  }
}

function popularMoviesAPI(data) {
  return axios.get(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${data.page}`,
  );
}

function* popularMovies(action) {
  try {
    const result = yield call(popularMoviesAPI, action.data);
    console.log(result);
    yield put({
      type: LOAD_POPULAR_MOVIES_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_POPULAR_MOVIES_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchMovieDetail() {
  yield takeLatest(LOAD_MOVIE_DETAIL_REQUEST, movieDetail);
}

function* watchPopularMovies() {
  yield takeLatest(LOAD_POPULAR_MOVIES_REQUEST, popularMovies);
}

export default function* movieSaga() {
  yield all([fork(watchMovieDetail), fork(watchPopularMovies)]);
}
