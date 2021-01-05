import React from "react";
import PropTypes from "prop-types";
import "antd/dist/antd.css";
import Head from "next/head";
import { createGlobalStyle } from "styled-components";
import wrapper from "../store/configureStore";

//pages내의 공통적인 것을 처리하기위한 곳

const GlobalStyle = createGlobalStyle`
  body{
    background: #e9ecef;
  }
`;

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Sim's Movie</title>
      </Head>
      <GlobalStyle />
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
