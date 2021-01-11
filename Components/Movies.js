import { Card, List } from 'antd'
import React from 'react'

const Movies = ({moviedata}) => {
    return (
        <List
            grid={{ gutter: 16, column: 4 }}
            dataSource ={moviedata}
            renderItem={item =>(
                <List.Item>
                <Card hoverable 
                style={{width:'240px'}}
                cover={<img alt={item.title}  src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} />}
                >
                    <Card.Meta title={item.title} description={<div>개봉일자: {item.release_date}</div>} />
            </Card>
            </List.Item>
    
            )}
        >
            
        </List>
    )
    
}

export default Movies
