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
  useEffect(() => {
    dispatch({ type: LOAD_MOVIE_DETAIL_REQUEST, data: movie_id });
    // dispatch({ type: LOAD_COMMENT_REQUEST, data: movie_id });
  }, [movie_id]);
  if (fetchMovieDetailLoading) {
    return <Loading />;
  }
  // if (!detailComments) {
  //   console.log('빈배열 props로');
  //   fullComments = [];
  // } else {
  //   fullComments = detailComments.Comments;
  // }
  // console.log('props보내는 댓글, ', fullComments);
  return (
    <AppLayout>
      <Detail detail={movieDetail} comments={detailComments} key={movieDetail.id} />
    </AppLayout>
  );
};

export default Post;
