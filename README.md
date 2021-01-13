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
 2. 영화는 영화saga에서만 다루고 싶은데 mymovie는 user가 찜한 영화 리스트이니까 user saga에서 다루어야 하는건가? 만약 DB와 통신했다면 새로문 테이블을 하나 팠을듯?

# 오늘 한 것
  1. 
  2. 
  3. 

# 오늘 할 것
  1. 닉네임 변경
  2. 찜 추가 제거
  3. Detail Comment
  4. Detail 디자인하는데 포스터 디자인 -> https://ant.design/components/image/#header
  5. 프로필 접속시 경고창 분석 후 조치
  6. 회원가입 로그인했을 때 리다이렉트 조치
  

  

# 내일 할 것
  1. 
  2. 
  3. 
  

# Redux Thunk
    리덕스의 미들웨어(미들웨어는 리덕스의 기능을 향상시켜주는 것)
    리덕스가 비동기 액선을 디스패치 할 수 있도록 해준다.
    Thunk는 지연된 함수라는 뜻
  
# Thunk vs Saga
  Thunk는 짧은 대신에 딜레이 같은 것을 줘야할 때 JS로 기능을 자신이 만들어야한다
  그러나 Saga는 딜레이 기능을 지원하는등 암튼 편의기능 많음. 암튼 많음

