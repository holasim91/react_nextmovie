import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../Components/AppLayout';
import Movies from '../Components/Movies';
import { LOAD_POPULAR_MOVIES_REQUEST } from '../reducers/movie';

const Home = () => {
  const dispatch = useDispatch();
  const { movieList } = useSelector((state) => state.movie);
  const [page, setPage] = useState(1); // 스크롤링할 때마다 1씩 증가
  useEffect(() => {
    dispatch({ type: LOAD_POPULAR_MOVIES_REQUEST, data: { page } });
  }, [page]);
  return (
    <AppLayout>
      <h1>Popular Movies</h1>
      <Movies moviedata={movieList} />
    </AppLayout>
  );
};

export default Home;
