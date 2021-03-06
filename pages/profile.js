import React, { useEffect } from 'react';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import AppLayout from '../Components/AppLayout';
import NicknameEditForm from '../Components/NicknameEditForm';

const profile = () => {
  const { me } = useSelector((state) => state.user);
  useEffect(() => {
    if (!(me)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | Sims Movie</title>
      </Head>
      <NicknameEditForm />
    </AppLayout>
  );
};

export default profile;
