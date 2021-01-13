import produce from 'immer';

export const initialState = {
    movieList:[],
    movieDetail:[],
    myMovies:[
        {user_id: 1,
        }
    ],
    fetchPopularMoviesLoading: false, // 초기 영화 불러오기
    fetchPopularMoviesDone: false,
    fetchPopularMoviesError: null,
    fetchMovieDetailLoading: false, // 영화 상세정보 불러오기
    fetchMovieDetailDone: false,
    fetchMovieDetailError: null,
    loadMyMoviesLoading:false,
    loadMyMoviesDone:false,
    loadMyMoviesError:null,
}

export const LOAD_POPULAR_MOVIES_REQUEST = 'LOAD_POPULAR_MOVIES_REQUEST';
export const LOAD_POPULAR_MOVIES_SUCCESS = 'LOAD_POPULAR_MOVIES_SUCCESS';
export const LOAD_POPULAR_MOVIES_FAILURE = 'LOAD_POPULAR_MOVIES_FAILURE';

export const LOAD_MOVIE_DETAIL_REQUEST = 'LOAD_MOVIE_DETAIL_REQUEST';
export const LOAD_MOVIE_DETAIL_SUCCESS = 'LOAD_MOVIE_DETAIL_SUCCESS';
export const LOAD_MOVIE_DETAIL_FAILURE = 'LOAD_MOVIE_DETAIL_FAILURE';



const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch(action.type){
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

        default:
            break;        
    }
})

export default reducer;