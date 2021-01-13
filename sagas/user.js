// import axios from 'axios';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
  // LOAD_MY_MOVIES_FAILURE,
  // LOAD_MY_MOVIES_REQUEST,
  // LOAD_MY_MOVIES_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
} from '../reducers/user';

// function loginAPI(data) {
//   return axios.post("/api/login", data);
// }

function* login(action) {
  try {
    // const result = yield call(loginAPI, action.data) //call(함수 이름, 매개변수)
    yield delay(1000);
    yield put({
      type: LOG_IN_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}
// function logoutAPI(){
//     return axios.post('/api/logout')
// }

function* logout() {
  try {
    yield delay(1000);
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
      error: err.response.data,
    });
  }
}

// function signupAPI(data) {
//   return axios.post("/api/signup", data);
// }

// function loadMyMovieAPI(){
//     return axios.post('/api/logout')
// }

// function* loadMyMovie() {
//   try {
//     yield delay(1000);
//     yield put({
//       type: LOAD_MY_MOVIES_SUCCESS,
//       data: action.data
//     });
//   } catch (err) {
//     yield put({
//       type: LOAD_MY_MOVIES_FAILURE,
//       error: err.response.data,
//     });
//   }
// }



function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, login);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logout);
}

// function* watchMyMovie() {
//   yield takeLatest(LOAD_MY_MOVIES_REQUEST, loadMyMovie)
// }

export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchLogOut), 
    // fork(watchMyMovie)
  ]);
}
