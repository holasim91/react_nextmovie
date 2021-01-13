import produce from 'immer';

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  changeNicknameLoading: false, // 닉변경 시도
  changeNicknameDone: false,
  changeNicknameError: null,
  addMyMovieLoading: false, // 회원가입 시도
  addMyMovieDone: false,
  addMyMovieError: null,  
  removeMyMovieLoading: false, // 회원가입 시도
  removeMyMovieDone: false,
  removeMyMovieError: null,  
  me: null, // 자신의 정보
  signUpData: {},
  loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const ADD_MY_MOVIES_REQUEST = 'ADD_MY_MOVIES_REQUEST';
export const ADD_MY_MOVIES_SUCCESS = 'ADD_MY_MOVIES_SUCCESS';
export const ADD_MY_MOVIES_FAILURE = 'ADD_MY_MOVIES_FAILURE';

export const REMOVE_MY_MOVIES_REQUEST = 'REMOVE_MY_MOVIES_REQUEST';
export const REMOVE_MY_MOVIES_SUCCESS = 'REMOVE_MY_MOVIES_SUCCESS';
export const REMOVE_MY_MOVIES_FAILURE = 'REMOVE_MY_MOVIES_FAILURE';


export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

const dummyUser = (data) => ({
  ...data,
  id: 1,
  nickname: "Dummy",
  myMovies: [
    {
      id:1,
      movie_id:761053,
      title:"Gabriel's Inferno Part III",
      poster_path: "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
      isWatched:false,
  },
  {
      id:2,
      movie_id: 278,
      title: "The Shawshank Redemption",
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      isWatched:true,
  },
  {
      id:3,
      movie_id:238,
      title: "The Godfather",
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      isWatched:false,
  },
  {
      id:4,
      movie_id:496243,
      title: "Parasite",
      poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      isWatched:true,
  }
  ],
});


const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case LOG_IN_REQUEST:
        draft.logInLoading = true;
        draft.logInDone = false;
        draft.logInError = null;
        break;
      case LOG_IN_SUCCESS:
        draft.logInLoading = false;
        draft.logInDone = true;
        draft.me = dummyUser(action.data);
        break;
      case LOG_IN_FAILURE:
        draft.logInLoading = false;
        draft.logInDone = false;
        draft.logInError = action.error;
        break;
      case LOG_OUT_REQUEST:
        draft.logOutLoading = true;
        draft.logOutDone = false;
        draft.logOutError = null;
        break;
      case LOG_OUT_SUCCESS:
        draft.logOutLoading = false;
        draft.logOutDone = true;
        draft.logOutError = null;
        draft.me = null;
        break;
      case LOG_OUT_FAILURE:
        draft.logOutLoading = false;
        draft.logOutDone = false;
        draft.logOutError = action.error;
        break;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        break;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        break;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        break;
      case CHANGE_NICKNAME_REQUEST:
        draft.changeNicknameLoading = true;
        draft.changeNicknameError = null;
        draft.changeNicknameDone = false;
        break;
      case CHANGE_NICKNAME_SUCCESS:
        draft.changeNicknameLoading = false;
        draft.changeNicknameDone = true;
        draft.me.nickname = action.data;
        break;
      case CHANGE_NICKNAME_FAILURE:
        draft.changeNicknameLoading = false;
        draft.changeNicknameError = action.error;
        break;
      case ADD_MY_MOVIES_REQUEST:
        draft.addMyMoviesLoading = true;
        draft.addMyMoviesDone = false;
        draft.addMyMoviesError = null;
        break;
      case ADD_MY_MOVIES_SUCCESS:
        draft.addMyMoviesLoading = false;
        draft.addMyMoviesDone = true;
        draft.addMyMoviesError = null;
        draft.me.myMovies.unshift(dummyMyMovie(action.data)) 
        break;
      case ADD_MY_MOVIES_FAILURE:
        draft.addMyMoviesLoading = false;
        draft.addMyMoviesDone = false;
        draft.addMyMoviesError = action.error;
        break;
      case REMOVE_MY_MOVIES_REQUEST:
        draft.removeMyMoviesLoading = true;
        draft.removeMyMoviesDone = false;
        draft.removeMyMoviesError = null;
        break;
      case REMOVE_MY_MOVIES_SUCCESS:
        draft.removeMyMoviesLoading = false;
        draft.removeMyMoviesDone = true;
        draft.removeMyMoviesError = null;
        break;
      case REMOVE_MY_MOVIES_FAILURE:
        draft.removeMyMoviesLoading = false;
        draft.removeMyMoviesDone = false;
        draft.removeMyMoviesError = action.error;
        break;
      default:
        break;
    }
  });

export default reducer;
