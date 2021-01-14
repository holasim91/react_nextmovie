import { Card, List } from 'antd';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_MOVIES_REQUEST } from '../reducers/mymovie';

const MyMovie = ({ me }) => {
  const dispatch = useDispatch();
  const { myMovies } = useSelector((state) => state.mymovie);
  if (!me) {
    return null;
  }
  useEffect(() => {
    dispatch({
      type: LOAD_MY_MOVIES_REQUEST,
      data: { userId: me.id },
    });
  }, []);
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={myMovies}
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
    />
  );
};

MyMovie.propTypes = {
  me: PropTypes.object.isRequired,
};

export default MyMovie;
