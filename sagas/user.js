// import axios from 'axios';
import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import {
  CHANGE_NICKNAME_FAILURE,
  CHANGE_NICKNAME_REQUEST,
  CHANGE_NICKNAME_SUCCESS,
  // LOAD_MY_MOVIES_FAILURE,
  // LOAD_MY_MOVIES_REQUEST,
  // LOAD_MY_MOVIES_SUCCESS,
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_FAILURE,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,

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

function signUpAPI() {
  return axios.post('/api/signUp');
}

function* signUp() {
  try {
    // const result = yield call(signUpAPI);
    yield delay(1000);
    yield put({
      type: SIGN_UP_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

// function changeNicknameAPI() {
//   return axios.post('/api/unfollow');
// }

function* changeNickname(action) {
  try {
    // const result = yield call(unfollowAPI);
    yield delay(1000);
    yield put({
      type: CHANGE_NICKNAME_SUCCESS,
      data: action.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHANGE_NICKNAME_FAILURE,
      error: err.response.data,
    });
  }
}

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

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUp);
}

// function* watchMyMovie() {
//   yield takeLatest(LOAD_MY_MOVIES_REQUEST, loadMyMovie)
// }

function* watchChangeNickname() {
  yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn), 
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchChangeNickname),
    // fork(watchMyMovie)
  ]);
}
