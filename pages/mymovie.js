import React, { useEffect } from 'react';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import AppLayout from '../Components/AppLayout';
import MyMovie from '../Components/MyMovie';
import { LOAD_MY_MOVIES_REQUEST } from '../reducers/mymovie';

const mymovie = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { myMovies } = useSelector((state) => state.mymovie);
  useEffect(() => {
    if (!(me)) {
      // eslint-disable-next-line no-alert
      alert('로그인 해주세요');
      Router.push('/');
    }
  }, [me && me.id]);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_MOVIES_REQUEST,
      data: me.id,
    });
  }, []);
  return (
    <AppLayout>
      <h1>MY Movies</h1>
      <MyMovie mymovies={myMovies.myMovies} />
    </AppLayout>
  );
};

export default mymovie;
