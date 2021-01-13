/* eslint-disable camelcase */
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MOVIE_DETAIL_REQUEST } from '../../reducers/movie';
import AppLayout from '../../Components/AppLayout';
import Detail from '../../Components/Detail';
import Loading from '../../Components/Loading';

const Post = () => {
  const router = useRouter();
  const { movie_id } = router.query;
  const dispatch = useDispatch();
  const { movieDetail, fetchMovieDetailLoading } = useSelector((state) => state.movie);

  useEffect(() => {
    dispatch({ type: LOAD_MOVIE_DETAIL_REQUEST, data: movie_id });
  }, [movie_id]);

  if (fetchMovieDetailLoading) {
    return <Loading />;
  }
  return (
    <AppLayout>
      <Detail detail={movieDetail} key={movie_id} />
    </AppLayout>
  );
};

export default Post;
