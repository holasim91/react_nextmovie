import { Card, List } from 'antd'
import React from 'react'
import Link from 'next/link';
import { useSelector } from 'react-redux';


const MyMovie = ({mymovies}) => {
    const { me } = useSelector((state) => state.user);
    if(!me){
        return(
            <div>
                로그인을 해주세요
                <Link href='/'>
                <a>뒤로가기</a></Link>
            </div>
        )

    }
    console.log(mymovies)
    return (
        // <List
        //     grid={{ gutter: 16, column: 4 }}
        //     dataSource ={mymovies.Movies}
        //     renderItem={item =>(
        //         <List.Item>
        //         <Card hoverable 
        //         style={{width:'240px'}}
        //         cover={<img alt={item.title}  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />}
        //         >
        //             <Card.Meta title={item.title} />
        //     </Card>
        //     </List.Item>
    
        //     )}
        // >
            
        // </List>   
        <></> 
        )
}

export default MyMovie
