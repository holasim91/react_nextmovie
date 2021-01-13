import { all, fork } from 'redux-saga/effects';

import userSaga from './user';
import movieSaga from './movie'

export default function* rootSaga() {
  yield all([fork(userSaga), fork(movieSaga)]);
}
