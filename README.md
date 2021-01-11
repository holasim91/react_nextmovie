# MOVIE APP BY REACT

 1. Movie Detail 페이지 디자인 -> 네이버영화 참고
 2. 영화API변경 => themoviedb
 3. 장르 ->https://developers.themoviedb.org/3/movies/get-movie-details 이게 답이다..(완료)
 4. movieData를 만들고 Home화면을 외부 API를 받는 방식이 아닌 임의로 만든 데이터를 fetching하는 거로 바꿔야함(toWatchList를 위하여)
 5. https://github.com/kyungyoonha/react_mission1_todoList 참고하기
 6. https://github.com/Louis-jk/MovieApp 참고


# 추가예정
 1. 무한스크롤 or 페이지네이션
 2. ToWatchList (ing..)
 3. 찜(ToWatchList에서 볼 수 있음)(ing...)
 4. Loading Circle
 5. 내 소개 페이지
 6. Detail 디자인
 7. CSS ->  Styled-Components로 이식
 8. 반응형
 9. Detail 속 comment



# ISSUE
 1. 보고싶은 영화에 담기 기능(찜 기능)을 추가하려면 DB를 만들지 않는 이상 힘들지 않을까 싶다. 
    ->  내가 임의로 만든 데이터애(DB에 저장되지 않은)
 2. 찜영화 데이터를 따로뺀다? 만다?

# 오늘 한 것
  1. Redux saga 도입
  2. 
  3. 

# 오늘 할 것
  1. 각 아이디에 PK를 만들어서 그 아이디에 해당하는 데이터를 끌어올 수 있게 하자(이건 DB인데?)
  2. 리뷰 컨텐츠도 만들어서 shortId로 id를 만들어보자 
  3. 

  

# 내일 할 것
  1. 

# Redux Thunk
    리덕스의 미들웨어(미들웨어는 리덕스의 기능을 향상시켜주는 것)
    리덕스가 비동기 액선을 디스패치 할 수 있도록 해준다.
    Thunk는 지연된 함수라는 뜻
  
# Thunk vs Saga
  Thunk는 짧은 대신에 딜레이 같은 것을 줘야할 때 JS로 기능을 자신이 만들어야한다
  그러나 Saga는 딜레이 기능을 지원하는등 암튼 편의기능 많음. 암튼 많음

