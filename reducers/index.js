import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import movie from './movie';
import mymovie from './mymovie';

// combineReducers
// user와 post에서 export하는 것이 함수이기 때문에 사용

const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log('HYDRATE', action);
        return {
          ...state,
          ...action.payload,
        };
      default:
        return state;
    }
  },
  user,
  movie,
  mymovie,
});

export default rootReducer;
