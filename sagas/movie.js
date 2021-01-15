import { all, call, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';
import axios from 'axios';
import {
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
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
      movieInfo: result.data,
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

// function addCommentAPI(data) {
//   return axios.post(`/api/post/${data.postId}/comment`, data);
// }

function* addComment(action) {
  try {
    // const result = yield call(addCommentAPI, action.data);
    yield delay(1000);
    yield put({
      type: ADD_COMMENT_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_COMMENT_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchMovieDetail() {
  yield takeLatest(LOAD_MOVIE_DETAIL_REQUEST, movieDetail);
}

function* watchPopularMovies() {
  yield throttle(2000, LOAD_POPULAR_MOVIES_REQUEST, popularMovies);
}

function* watchAddComment() {
  yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* movieSaga() {
  yield all([fork(watchMovieDetail), fork(watchPopularMovies), fork(watchAddComment)]);
}
