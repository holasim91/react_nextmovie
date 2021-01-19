/* eslint-disable react/no-array-index-key */
import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Comment, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { MessageOutlined } from '@ant-design/icons';
import CommentForm from './CommentForm';

const DetailWrapper = styled.div`
  width: 800px;
  background: #FFF;
  padding: 10px;
`;
const MovieTitleWrapper = styled.div`
  padding-top: 50px;
  font-size: 56px;
  font-weight: bold;
  margin-bottom: -22px;
`;
const OriginalTitleWrapper = styled.div`
    font-size: 28px;
    color: #767676;
    font-weight: bold; 

`;
const StyledP = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
  strong{
    font-size: 24px;
  }

`;
const DescWrapper = styled.div`
  font-size: 20px;
  display: inline-block;
`;
const DetailInfoWrapper = styled.div`
    height: 500px;
    width: 450px;
    float: left;
    padding-top: 25px;
`;
const PosterWrapper = styled.div`
    height: 500px;
    width: 314px;
    display: inline-block;
    img{
      width: 314px;
    }

`;
const CommentToggleWrapper = styled.div`
  color: #5f5c5f;
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
  const gernesArray = [];
  detail.genres.map((genre) => (gernesArray.push(genre.name)));
  return (
    <div>
      <DetailWrapper>
        <MovieTitleWrapper>{detail.title}</MovieTitleWrapper>
        <OriginalTitleWrapper>{detail.original_title}</OriginalTitleWrapper>
        <DetailInfoWrapper>
          <StyledP><strong>ReleaseDate:</strong> {detail.release_date}</StyledP>
          <StyledP><strong>Score:</strong> {detail.vote_average}</StyledP>
          <StyledP>
            <strong>Genres:</strong> {gernesArray.join(' ')}
          </StyledP>
          <StyledP><strong>Status:</strong> {detail.status}</StyledP>

        </DetailInfoWrapper>
        <PosterWrapper>
          <img
            // style={{ width: '314px' }}
            src={`https://image.tmdb.org/t/p/w500/${detail.poster_path}`}
            alt={detail.title}
            title={detail.title}
          />
        </PosterWrapper>
        <DescWrapper>
          <strong>Description:</strong>
          {detail.overview}
        </DescWrapper>
        <CommentToggleWrapper>
          <MessageOutlined style={{ fontSize: '40px' }} key="message" onClick={onToggleComment} />
          Comment
        </CommentToggleWrapper>
      </DetailWrapper>
      {commentFormOpened && (
      <div style={{ width: '800px' }}>
        <CommentForm detail={detail} />
        <List
          header={`${comments.Comments ? comments.Comments.length : 0}개의 댓글`}
          itemLayout="horizontal"
          dataSource={comments.Comments || []}
          renderItem={(item) => (
            <li>
              <Comment
                author={item.nickname}
                avatar={<Avatar>{`${item.nickname ? item.nickname[0] : ''} `}</Avatar>}
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
  comments: PropTypes.array,
};

Detail.defaultProps = {
  comments: [],
};

export default Detail;
