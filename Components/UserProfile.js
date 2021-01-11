import { Button, Card } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logoutRequestAction } from '../reducers/user'

const UserProfile = () => {
    const dispatch = useDispatch()
    const { me, logOutLoading } = useSelector((state) => state.user);
    const onLogOut = useCallback(() => {
      dispatch(logoutRequestAction());
    }, []);
  
    return (
        <Card
        actions={[
          <div key="towatch">
            찜영화
            <br />0
          </div>,
          <div key="review">
            리뷰
            <br />0
          </div>,
        ]}
      >
        <Card.Meta avatar={<Avatar>{me.nickname[0]}</Avatar>} title={me.nickname} />
        <Button onClick={onLogOut} loading={logOutLoading}>
        로그아웃
      </Button>      
      </Card>
      )
}

export default UserProfile
