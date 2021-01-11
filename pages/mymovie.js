import React from 'react'
import { useSelector } from 'react-redux';
import AppLayout from '../Components/AppLayout'
import MyMovie from '../Components/MyMovie'

const mymovie = () => {
    const { mymovies } = useSelector((state) => state.mymovie);
    console.log(mymovies)
    return (
        <AppLayout>
            <h1>MY Movies</h1>
            <MyMovie mymovies={mymovies}/>
        </AppLayout>
    )
}

export default mymovie
