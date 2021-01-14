import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../Components/AppLayout';
import MyMovie from '../Components/MyMovie';

const mymovie = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me)) {
      // eslint-disable-next-line no-alert
      alert('로그인 해주세요');
      Router.push('/');
    }
  }, [me && me.id]);

  return (
    <AppLayout>
      <h1>MY Movies</h1>
      <MyMovie me={me} />
    </AppLayout>
  );
};

export default mymovie;
