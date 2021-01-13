/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Comment, Avatar, Form, Button, List, Input } from 'antd';
import moment from 'moment';

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
      <Input.TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item>
      <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
        Add Comment
      </Button>
    </Form.Item>
  </>
);

const CommentForm = () => {
  const [value, setValue] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e) => { setValue(e.target.value); };
  const handleSubmit = () => { console.log('Submitted'); };
  return (
    <div>
      <Comment
        avatar={(
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="Han Solo"
          />
          )}
        content={(
          <Editor
            onChange={onChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
          )}
      />
    </div>
  );
};
export default CommentForm;
