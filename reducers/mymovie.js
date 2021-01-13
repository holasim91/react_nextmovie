import produce from 'immer';

export const initialState = {
  myMovies: [],
  loadMyMoviesLoading: false,
  loadMyMoviesDone: false,
  loadMyMoviesError: null,
};

export const LOAD_MY_MOVIES_REQUEST = 'LOAD_MY_MOVIES_REQUEST';
export const LOAD_MY_MOVIES_SUCCESS = 'LOAD_MY_MOVIES_SUCCESS';
export const LOAD_MY_MOVIES_FAILURE = 'LOAD_MY_MOVIES_FAILURE';

const dummyMyMovie = (data) => ({
  ...data,
  id: 1,
  nickname: 'Dummy',
  myMovies: [
    {
      id: 1,
      movie_id: 761053,
      title: "Gabriel's Inferno Part III",
      poster_path: '/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg',
      isWatched: false,
    },
    {
      id: 2,
      movie_id: 278,
      title: 'The Shawshank Redemption',
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      isWatched: true,
    },
    {
      id: 3,
      movie_id: 238,
      title: 'The Godfather',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      isWatched: false,
    },
    {
      id: 4,
      movie_id: 496243,
      title: 'Parasite',
      poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      isWatched: true,
    },
  ],
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_MY_MOVIES_REQUEST:
      draft.loadMyMoviesLoading = true;
      draft.loadMyMoviesDone = false;
      draft.loadMyMoviesError = null;
      break;
    case LOAD_MY_MOVIES_SUCCESS:
      draft.loadMyMoviesLoading = false;
      draft.loadMyMoviesDone = true;
      draft.loadMyMoviesError = null;
      draft.myMovies = dummyMyMovie(action.data);
      break;
    case LOAD_MY_MOVIES_FAILURE:
      draft.loadMyMoviesLoading = false;
      draft.loadMyMoviesDone = false;
      draft.loadMyMoviesError = action.error;
      break;

    default:
      break;
  }
});

export default reducer;
