export const initialState = {
  mymovies: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "숑이",
      },
      Movies: [
        {
          id: 1,
          movie_id: 761053,
          title: "Gabriel's Inferno Part III",
          poster_path: "/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg",
          isWatched: false,
        },
        {
          id: 2,
          movie_id: 278,
          title: "The Shawshank Redemption",
          poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
          isWatched: true,
        },
        {
          id: 3,
          movie_id: 238,
          title: "The Godfather",
          poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
          isWatched: false,
        },
        {
          id: 4,
          movie_id: 496243,
          title: "Parasite",
          poster_path: "/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
          isWatched: true,
        },
      ],
    },
  ],
  loadMyMovieLoading: false,
  loadMyMovieDone: false,
  loadMyMovieError: null,
};

export const LOAD_MY_MOVIE_REQUEST = "LOAD_MY_MOVIE_REQUEST";
export const LOAD_MY_MOVIE_SUCCESS = "LOAD_MY_MOVIE_SUCCESS";
export const LOAD_MY_MOVIE_FAILURE = "LOAD_MY_MOVIE_FAILURE";

export const loadMyMovieAction = (data) => ({
  type: LOAD_MY_MOVIE_REQUEST,
  data,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MY_MOVIE_REQUEST:
      return {
        ...state,
        loadMyMovieLoading: true,
        loadMyMovieDone: false,
        loadMyMovieError: null,
      };
    case LOAD_MY_MOVIE_SUCCESS:
      return {
        ...state,
        loadMyMovieLoading: false,
        loadMyMovieDone: true,
        loadMyMovieError: null,
        myMovie: [...state.myMovies], // 새게시물이 위로 올라가기 위해 앞에다가 추가한다
      };
    case LOAD_MY_MOVIE_FAILURE:
      return {
        ...state,
        loadMyMovieLoading: false,
        loadMyMovieDone: false,
        loadMyMovieError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
