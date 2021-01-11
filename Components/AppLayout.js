import React from "react";
import Link from "next/link";
import { Input, Menu, Row, Col } from "antd";
import styled from "styled-components";
import LoginForm from "./LoginForm";
import { useSelector } from "react-redux";
import UserProfile from "./UserProfile";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const { logInDone, me } = useSelector((state) => state.user);
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">
            <a>Sim's Movie</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <SearchInput />
        </Menu.Item>
        {me ? (
          <Menu.Item>
            <Link href="/mymovie">
              <a>찜</a>
            </Link>
          </Menu.Item>
        ) : (
          <Menu.Item>
            <Link href="/signup">
              <a>회원가입</a>
            </Link>
          </Menu.Item>
        )}
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {me ? <UserProfile /> : <LoginForm />}
        </Col>
        <Col xs={24} md={18}>
          {" "}
          {children}{" "}
        </Col>
        {/* <Col xs={24} md={6}>
          <a
            href="https://github.com/holasim91/react_movie"
            target="_blank"
            rel="noreferrer noopener"
          >
            Made By HyuninSim
          </a>
        </Col> */}
      </Row>
    </div>
  );
};

export default AppLayout;
