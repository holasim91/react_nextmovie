import produce from 'immer';
import shortId from 'shortid';

export const initialState = {
  movieList: [],
  movieDetail: [],
  detailComments: [],
  hasMoreMovies: true,
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

export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

const genDummyComment = (data) => ({
  userId: shortId.generate(),
  date: '2021-01-15',
  content: data.content,
  nickname: 'CommnetDummy',
});

const DummyComments = [
  {
    movieId: 464052,
    Comments: [
      { userId: 1,
        nickname: '하이',
        content: '솔직히 좀 노잼....',
        date: '2021-01-15',
      },
      { userId: 2,
        nickname: '철쭉',
        content: '킬링타임으로는 딱이었어여!!',
        date: '2021-01-11',
      },
    ],
  },
  {
    movieId: 508442,
    Comments: [
      { userId: 1,
        nickname: '하이',
        content: '인생 영화였습니다.. 제이미폭스 짱!',
        date: '2020-12-25',
      },
      { userId: 2,
        nickname: '방구',
        content: '내일 2회차 달려욘!!',
        date: '2021-01-03',
      },
    ],
  },
];

function findComments(data) {
  const comments = DummyComments.find((v) => v.movieId === data);
  if (comments === undefined) {
    DummyComments.unshift({ movieId: data, Comments: [] });
    const first = DummyComments.find((v) => v.movieId === data);
    return first;
  }
  return comments;
}

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
      // draft.movieList = action.data.results.concat(draft.movieList);
      draft.movieList = draft.movieList.concat(action.data.results);
      draft.hasMoreMovies = draft.movieList.length <= 200; // 임시로 막아둔 것
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
      draft.movieDetail = action.movieInfo;
      draft.detailComments = findComments(action.movieInfo.id);
      break;
    case LOAD_MOVIE_DETAIL_FAILURE:
      draft.fetchMovieDetailLoading = false;
      draft.fetchMovieDetailDone = false;
      draft.fetchMovieDetailError = action.error;
      break;
    case ADD_COMMENT_REQUEST:
      draft.addCommentLoading = true;
      draft.addCommentDone = false;
      draft.addCommentError = null;
      break;
    case ADD_COMMENT_SUCCESS:
      // eslint-disable-next-line no-case-declarations
      const current = draft.detailComments;
      current.Comments.unshift(genDummyComment(action.data));
      draft.addCommentLoading = false;
      draft.addCommentDone = true;
      break;
    case ADD_COMMENT_FAILURE:
      draft.addCommentLoading = false;
      draft.addCommentDone = false;
      draft.addCommentError = action.error;
      break;
    default:
      break;
  }
});

export default reducer;
