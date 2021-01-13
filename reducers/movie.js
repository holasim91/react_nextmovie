import produce from 'immer';

export const initialState = {
  movieList: [],
  movieDetail: [],
  fetchPopularMoviesLoading: false, // 초기 영화 불러오기
  fetchPopularMoviesDone: false,
  fetchPopularMoviesError: null,
  fetchMovieDetailLoading: false, // 영화 상세정보 불러오기
  fetchMovieDetailDone: false,
  fetchMovieDetailError: null,
  loadMyMoviesLoading: false,
  loadMyMoviesDone: false,
  loadMyMoviesError: null,
  addCommentLoading: false,
  addCommentDone: false,
  addCommentError: null,
};

export const LOAD_POPULAR_MOVIES_REQUEST = 'LOAD_POPULAR_MOVIES_REQUEST';
export const LOAD_POPULAR_MOVIES_SUCCESS = 'LOAD_POPULAR_MOVIES_SUCCESS';
export const LOAD_POPULAR_MOVIES_FAILURE = 'LOAD_POPULAR_MOVIES_FAILURE';

export const LOAD_MOVIE_DETAIL_REQUEST = 'LOAD_MOVIE_DETAIL_REQUEST';
export const LOAD_MOVIE_DETAIL_SUCCESS = 'LOAD_MOVIE_DETAIL_SUCCESS';
export const LOAD_MOVIE_DETAIL_FAILURE = 'LOAD_MOVIE_DETAIL_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const reducer = (state = initialState, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOAD_POPULAR_MOVIES_REQUEST:
      draft.fetchPopularMoviesLoading = true;
      draft.fetchPopularMoviesDone = false;
      draft.fetchPopularMoviesError = null;
      break;
    case LOAD_POPULAR_MOVIES_SUCCESS:
      draft.fetchPopularMoviesLoading = false;
      draft.fetchPopularMoviesDone = true;
      draft.fetchPopularMoviesError = null;
      draft.movieList = action.data.results.concat(draft.movieList);
      break;
    case LOAD_POPULAR_MOVIES_FAILURE:
      draft.fetchPopularMoviesLoading = false;
      draft.fetchPopularMoviesDone = false;
      draft.fetchPopularMoviesError = action.error;
      break;
    case LOAD_MOVIE_DETAIL_REQUEST:
      draft.fetchMovieDetailLoading = true;
      draft.fetchMovieDetailDone = false;
      draft.fetchMovieDetailError = null;
      break;
    case LOAD_MOVIE_DETAIL_SUCCESS:
      draft.fetchMovieDetailLoading = false;
      draft.fetchMovieDetailDone = true;
      draft.fetchMovieDetailError = null;
      draft.movieDetail = action.data;
      break;
    case LOAD_MOVIE_DETAIL_FAILURE:
      draft.fetchMovieDetailLoading = false;
      draft.fetchMovieDetailDone = false;
      draft.fetchMovieDetailError = action.error;
      break;
    // case ADD_COMMENT_REQUEST:
    //   draft.addCommentLoading = true;
    //   draft.addCommentDone = false;
    //   draft.addCommentError = null;
    //   break;
    // case ADD_COMMENT_SUCCESS:
    //   const movie = draft.mainPosts.find((v) => v.id === action.data.postId);
    //   movie.Comments.unshift(dummyComment(action.data.content));
    //   draft.addCommentLoading = false;
    //   draft.addCommentDone = true;
    //   break;
    // case ADD_COMMENT_FAILURE:
    //   draft.addCommentLoading = false;
    //   draft.addCommentDone = false;
    //   draft.addCommentError = action.error;
    //   break;
    default:
      break;
  }
});

export default reducer;
