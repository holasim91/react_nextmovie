
export const initialState = {
  myMovies:[{
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
  },]
,}
  
const dummyData = {
  id:2,
  content:'더미데이터 입니다',
  User:{
      id:1,
      nickname:'숑이'
  },
  Images:[],
  Comments:[]

}

  
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "LOAD_MY_MOVE":
        return {
          ...state,
          isLoggedIn: true,
          user: action.data,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  