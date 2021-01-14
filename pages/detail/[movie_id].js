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
  const { movieDetail, detailComments, fetchMovieDetailLoading } = useSelector(
    (state) => state.movie,
  );
  let fullComments;
  useEffect(() => {
    dispatch({ type: LOAD_MOVIE_DETAIL_REQUEST, data: movie_id });
    // dispatch({ type: LOAD_COMMENT_REQUEST, data: movie_id });
  }, [movie_id]);

  if (fetchMovieDetailLoading) {
    return <Loading />;
  }
  if (!detailComments) {
    fullComments = [];
  } else {
    fullComments = detailComments.Comments;
  }
  return (
    <AppLayout>
      <Detail detail={movieDetail} comments={fullComments} key={movie_id} />
    </AppLayout>
  );
};

export default Post;
