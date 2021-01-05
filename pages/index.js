import React from 'react'
import AppLayout from '../Components/AppLayout'
import Movies from '../Components/Movies'
import { movieData } from '../movieData'



const Home = () => {
    return (
        <AppLayout>
            <h1>Popular Movies</h1>
            {/* {movieData.map((m)=> <Movies key={m.id} title={m.title} poster={m.poster_path} date={m.release_date} id={m.id}/>)} */}
            <Movies moviedata={movieData} />
        </AppLayout>
    )
}

export default Home
