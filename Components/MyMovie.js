import { Card, List } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

const MyMovie = ({ mymovies }) => {
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={mymovies}
    renderItem={(item) => (
      <List.Item>
        <Card
          hoverable
          style={{ width: '240px' }}
          cover={(
            <img
              alt={item.title}
              src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
            />
          )}
        >
          <Card.Meta title={item.title} />
        </Card>
      </List.Item>
    )}
  />;
};

MyMovie.propTypes = {
  mymovies: PropTypes.object.isRequired,
};

export default MyMovie;
