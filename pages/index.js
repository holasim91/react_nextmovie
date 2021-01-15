import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../Components/AppLayout';
import Movies from '../Components/Movies';
import { LOAD_POPULAR_MOVIES_REQUEST } from '../reducers/movie';

const Home = () => {
  const dispatch = useDispatch();
  const { movieList, fetchPopularMoviesLoading, hasMoreMovies } = useSelector(
    (state) => state.movie,
  );
  const [page, setPage] = useState(2); // 스크롤링할 때마다 1씩 증가
  useEffect(() => {
    dispatch({ type: LOAD_POPULAR_MOVIES_REQUEST, data: 1 });
  }, []);

  useEffect(() => {
    function onScroll() {
      if (
        // eslint-disable-next-line max-len
        window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 600
      ) {
        if (hasMoreMovies && !fetchPopularMoviesLoading) {
          dispatch({
            type: LOAD_POPULAR_MOVIES_REQUEST,
            data: { page },
          });
        }
        setPage((prev) => prev + 1);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll); // 메모리 누적 방지
    };
  }, [page, fetchPopularMoviesLoading]);
  return (
    <AppLayout>
      <h1>Popular Movies</h1>
      <Movies moviedata={movieList} />
    </AppLayout>
  );
};

export default Home;
