/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Comment, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { MessageOutlined } from '@ant-design/icons';
import CommentForm from './CommentForm';

const DetailWrapper = styled.div`
  
`;

const Detail = ({ detail, comments }) => {
  // dispatch detail.id
  if (!detail.production_companies) {
    return null;
  }

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <div>
      <div>
        <h1>{detail.title}</h1>
        <h4>Release Date: {detail.release_date}</h4>
        <div>
          production Company:
          {detail.production_companies.map((company, idx) => (company.logo_path ? (
            <img
              key={idx}
              className="logo"
              src={`https://image.tmdb.org/t/p/w500/${company.logo_path}`}
              alt={company.name}
              title={company.name}
              style={{ width: '50px', height: '50px' }}
            />
          ) : (
            <></>
          )))}
        </div>
        <h4>score: {detail.vote_average}</h4>
        <h4 className="genres">
          genres:
          {detail.genres.map((genre, i) => (
            <h3 key={i}>{genre.name}</h3>
          ))}
        </h4>
        <div className="summary">
          <p style={{ fontWeight: 300 }}>Description:</p> {detail.overview}
        </div>
        <h4>status : {detail.status}</h4>
      </div>
      <img
        className="poster"
        src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
        alt={detail.title}
        title={detail.title}
      />
      <div>
        <MessageOutlined style={{ fontSize: '40px' }} key="message" onClick={onToggleComment} />
      </div>
      {commentFormOpened && (
      <div style={{ width: '800px' }}>
        <CommentForm detail={detail} />
        <List
          header={`${comments ? comments.length : 0} 댓글`}
          itemLayout="horizontal"
          dataSource={comments || []}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.nickname}
                avatar={<Avatar>{item.nickname[0]}</Avatar>}
                content={item.content}
              />
            </li>
          )}
        />
      </div>
      )}
    </div>
  );
};

Detail.propTypes = {
  detail: PropTypes.array.isRequired,
  comments: PropTypes.array.isRequired,
};

export default Detail;
