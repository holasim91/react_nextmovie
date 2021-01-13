import React from 'react';
import { Comment, Tooltip, List } from 'antd';
import moment from 'moment';
import CommentForm from './CommentForm';

const data = [
  {
    nickname: '하이',
    content: (
      <p>
        영화 이거 너무 노잼이에여
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(1, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
  {
    nickname: '방구',
    content: (
      <p>
        원더우먼 짱 멋있어요!!
      </p>
    ),
    datetime: (
      <Tooltip title={moment().subtract(2, 'days').format('YYYY-MM-DD HH:mm:ss')}>
        <span>{moment().subtract(2, 'days').fromNow()}</span>
      </Tooltip>
    ),
  },
];

const Comments = () => (
  <div>
    <List
      header={`${data.length} 개의 댓글`}
      itemLayout="horizontal"
      dataSource={data}
      renderItem={(item) => (
        <li>
          <Comment
            author={item.nickname}
            content={item.content}
            datetime={item.datetime}
          />
        </li>
      )}
    />
    <CommentForm />
  </div>
);

export default Comments;
