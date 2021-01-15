/* eslint-disable react/prop-types */
import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import useInput from '../hooks/useInput';
import { ADD_COMMENT_REQUEST } from '../reducers/movie';

const CommentForm = ({ detail }) => {
  const dispatch = useDispatch();
  const { addCommentDone, addCommentLoading } = useSelector((state) => state.movie);
  const id = useSelector((state) => state.user.me?.id);
  const [commentText, onChangeCommentText, setCommentText] = useInput('');

  useEffect(() => {
    if (addCommentDone) {
      setCommentText('');
    }
  }, [addCommentDone]);

  const onSubmitComment = useCallback(() => {
    dispatch({
      type: ADD_COMMENT_REQUEST,
      data: { content: commentText, userId: id, movieId: detail.id },
    });
  }, [commentText, id]);
  return (
    <Form onFinish={onSubmitComment}>
      <Form.Item style={{ position: 'relative', margin: 0 }}>
        <Input.TextArea
          rows={4}
          value={commentText}
          onChange={onChangeCommentText}
        />
        {id ? (
          <Button
            style={{
              position: 'absolute',
              right: 0,
              bottom: -40,
              zIndex: 9999,
            }}
            type="primary"
            htmlType="submit"
            loading={addCommentLoading}
          >
            등록
          </Button>
        ) : (
          // eslint-disable-next-line no-alert
          <>{alert('댓글등록은 로그인을 하세요')}</>
        )}
      </Form.Item>
    </Form>
  );
};

CommentForm.propTypes = {
  detail: PropTypes.object.isRequired,
};

export default CommentForm;
