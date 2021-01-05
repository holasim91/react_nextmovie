import { Button, Card } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { logoutAction } from '../reducers/user'

const UserProfile = () => {
    const dispatch = useDispatch()
    const onLogOut = useCallback(() => {
      dispatch(logoutAction())
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
        <Card.Meta avatar={<Avatar>KE</Avatar>} title="Kero" />
        <Button onClick={onLogOut}>로그아웃</Button>
      </Card>
      )
}

export default UserProfile
