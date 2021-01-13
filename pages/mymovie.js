import React, { useEffect } from 'react'
import  Router  from 'next/router';
import { useSelector } from 'react-redux';
import AppLayout from '../Components/AppLayout'
import MyMovie from '../Components/MyMovie';

const mymovie = () => {
    const { me } = useSelector((state) => state.user);

    useEffect(() => {
        if (!(me)) {
            console.log('Back!!')
          Router.push('/');
        }
      }, [me]);
   
    return (
        <AppLayout>
            <h1>MY Movies</h1>
            <MyMovie mymovies={me.myMovies}/>
        </AppLayout>
    )
}

export default mymovie
