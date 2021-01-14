import produce from 'immer';

export const initialState = {
  myMovies: [

  ],
  loadMyMoviesLoading: false,
  loadMyMoviesDone: false,
  loadMyMoviesError: null,
};

const dummyMovies = [{
  id: 1,
  User: {
    userId: 1,
    nickname: 'Dummy',
  },
  myMovies: [
    {
      movie_id: 761053,
      title: "Gabriel's Inferno Part III",
      poster_path: '/fYtHxTxlhzD4QWfEbrC1rypysSD.jpg',
      isWatched: false,
    },
    {
      movie_id: 278,
      title: 'The Shawshank Redemption',
      poster_path: '/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
      isWatched: true,
    },
    {
      movie_id: 238,
      title: 'The Godfather',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      isWatched: false,
    },
    {
      movie_id: 496243,
      title: 'Parasite',
      poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      isWatched: true,
    },
  ],
},
{
  id: 1,
  User: {
    userId: 2,
    nickname: 'Dummy2',
  },
  myMovies: [
    {
      movie_id: 238,
      title: 'The Godfather',
      poster_path: '/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
      isWatched: false,
    },
    {
      movie_id: 496243,
      title: 'Parasite',
      poster_path: '/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
      isWatched: true,
    },
  ],
}];

export const LOAD_MY_MOVIES_REQUEST = 'LOAD_MY_MOVIES_REQUEST';
export const LOAD_MY_MOVIES_SUCCESS = 'LOAD_MY_MOVIES_SUCCESS';
export const LOAD_MY_MOVIES_FAILURE = 'LOAD_MY_MOVIES_FAILURE';

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
      draft.myMovies = dummyMovies.find(
        (v) => v.User.userId === action.data.userId,
      ).myMovies;
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

//       draft.myMovies = draft.myMovies.filter((v) => v.User.userId === action.data.userId)
