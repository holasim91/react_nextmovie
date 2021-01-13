import { Card, List, Tooltip } from 'antd';
import { HeartTwoTone, PlusCircleTwoTone } from '@ant-design/icons';
import Link from 'next/link';
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Loading from './Loading';

const Movies = ({ moviedata }) => {
  const [liked, setLiked] = useState(false);
  const { fetchPopularMoviesLoading } = useSelector((state) => state.movie);
  const { me } = useSelector((state) => state.user);
  const onToggleLike = useCallback(() => {
    if (me) {
      setLiked((prev) => !prev);
    } else {
      // eslint-disable-next-line no-alert
      alert('찜기능은 로그인을 해주세요!');
      // 모달로 대체
    }
  });
  if (fetchPopularMoviesLoading) {
    return <Loading />;
  }
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={moviedata}
      renderItem={(item) => (
        <List.Item>
          <Card
            hoverable={false}
            style={{ width: '240px' }}
            cover={(
              <img
                alt={item.title}
                src={`https://image.tmdb.org/t/p/w500${item.poster_path}`}
              />
              )}
            actions={[
              <>
                <Link
                  href="/detail/[id]"
                  as={`detail/${item.id}`}
                  loading={fetchPopularMoviesLoading}
                >
                  <a>
                    <Tooltip placement="left" title="더보기">
                      <PlusCircleTwoTone />
                    </Tooltip>
                  </a>
                </Link>
              </>,
              liked ? (
                <a>
                  <Tooltip placement="right" title="찜취소">
                    <HeartTwoTone
                      twoToneColor="#eb2f96"
                      key="heart"
                      onClick={onToggleLike}
                    />
                  </Tooltip>
                </a>
              ) : (
                <a>
                  <Tooltip placement="right" title="찜하기">
                    <HeartTwoTone key="heart" onClick={onToggleLike} />
                  </Tooltip>
                </a>
              ),
            ]}
          >
            <Card.Meta
              title={item.title}
              description={<div>개봉일자: {item.release_date}</div>}
            />
          </Card>
        </List.Item>
      )}
    />
  );
};

Movies.propTypes = {
  moviedata: PropTypes.array.isRequired,
};

export default Movies;
