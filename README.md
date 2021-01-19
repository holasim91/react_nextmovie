# MOVIE APP BY REACT

 1. Movie Detail 페이지 디자인 -> 네이버영화 참고
 2. 영화API변경 => themoviedb
 3. 장르 ->https://developers.themoviedb.org/3/movies/get-movie-details 이게 답이다..(완료)
 4. movieData를 만들고 Home화면을 외부 API를 받는 방식이 아닌 임의로 만든 데이터를 fetching하는 거로 바꿔야함(toWatchList를 위하여)
 5. https://github.com/kyungyoonha/react_mission1_todoList 참고하기
 6. https://github.com/Louis-jk/MovieApp 참고


# 추가예정
 1. 무한스크롤 or 페이지네이션
 3. 찜(ToWatchList에서 볼 수 있음)(ing...)
 4. Loading Circle
 5. 내 소개 페이지
 6. Detail 디자인
 8. 반응형
 9. Detail 속 comment



# ISSUE
 1. 찜하기 기능 -> 각 카드가 맵이라 하나 누르면 다 바뀜
 2. 최초로 댓글을 등록 할때 터짐. 이유 분석중
     1. 최초 detail페이지 들어갈때 LOAD_MOVIE_DETAIL을 날려서 영화의 정보와 해당 영화의 댓글정보를 불러옵니다(detailComments).
     2. 만약 댓글이 없다면 빈배열을 -> moviedetail을 읽어올 때 Comments 객체를 추가하..
     => 해결!! 댓글을 불러 올떄 댓글이 없는경우 더미데이터에 해당 영화임을 찾기위한 영화의 아이디, 그리고 댓글은 빈 배열로 넣어 줬다.
 3. 무한스크롤 작동시 스크롤이 맨 위로감
 4. 다른 페이지에서 이동시 최초 있던 movieList에 다시 데이터를 fetchig해서 중복으로 누적문제 


# 오늘 한 것
  1. My Movie 동적처리
  2. airbnb 적용으로 인해 들어갈 수가 없는 페이지 복구
  3. Detail Comment 동적처리
  4. 댓글 추가

# 오늘 할 것
  1. 
  2. 찜 추가 제거
  4. Detail 디자인하는데 포스터 디자인 -> https://ant.design/components/image/#header
  5. 
  6. 
  

  

# 내일 할 것
  1. 댓글 수정, 삭제 기능
  2. 로그인이 아닐시 댓글폼 뜨지 않게
  3. CSS 다듬기?
  

# Redux Thunk
    리덕스의 미들웨어(미들웨어는 리덕스의 기능을 향상시켜주는 것)
    리덕스가 비동기 액선을 디스패치 할 수 있도록 해준다.
    Thunk는 지연된 함수라는 뜻
  
# Thunk vs Saga
  Thunk는 짧은 대신에 딜레이 같은 것을 줘야할 때 JS로 기능을 자신이 만들어야한다
  그러나 Saga는 딜레이 기능을 지원하는등 암튼 편의기능 많음. 암튼 많음

# CSS in JS
  css in js의 가장 큰 장점은 js를 활용해 css를 작성할 수 있고, 기존 css를 작성했을 때 생겼던 선택자의 충돌을 막을 수 있다는 거에요

  기존에는 충돌이 일어나지 않도록 BEM 등과 같은 네이밍 컨벤션을 지정해서 각 스타일이 충돌나지 않도록 했는데, 그렇게 복잡하게 하지 않아도 된다는 거죠. 그리고 벤더 프리픽스가 자동으로 붙어있어서 이에 대한 고려도 필요하지 않아요. 또한, css를 테스트하기에도 더 용이하고요
 
  다만, 단점으로는 css in css 방식보다 느려요. 그래서 규모가 큰 프로젝트를 진행한다면 css in js로 유지보수의 장점을 가져가고, 규모가 매우 작다면 css in css로 간단히 작업하는 게 좋다고 생각해요 