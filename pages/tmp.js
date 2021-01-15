import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import AppLayout from '../Components/AppLayout';

const DetailWrapper = styled.div`
  background-color: yellow;
  padding-right: 300px;
`;

const MovieTitleWrapper = styled.strong`
  padding-top: 50px;
  font-size: 56px;
`;

const ReleaseDateWrapper = styled.div`
  font-size: 20px;
`;
const GenresWrapper = styled.div`
  font-size: 20px;
`;
const DescWrapper = styled.div`
  font-size: 20px;
`;

const tmp = () => (
  <AppLayout>
    <DetailWrapper>
      <MovieTitleWrapper>Guardians of the Galaxy</MovieTitleWrapper>
      <Row>
        <ReleaseDateWrapper>
          <strong>ReleaseDate</strong>
          <br />
          2020-01-13
        </ReleaseDateWrapper>
        <GenresWrapper>
          <strong>GENRES</strong>
          <br />
          Fantasy, Action, Adventure
        </GenresWrapper>
        <img
          style={{ width: '224px', height: '320px' }}
          src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
          alt="wonder"
        />
      </Row>
      <DescWrapper>
        <strong>Description</strong>
        <br />
        사랑의 힘으로 시련을 딛고 진정한 슈퍼히어로로 거듭난 원더 우먼 다이애나
        프린스(갤 가돗)는 고고학자로서 인간들 사이에서 조용히 살고 있다.
        다이애나의 마음 한편엔 세상을 떠난 연인 스티브 트레버(크리스 파인)의
        빈자리가 여전하다. 그녀의 주변이 어수선해지기 시작한 건 동료
        바바라(크리스틴 위그)가 관리 중이던 고대 유물을 수상한 석유 부자 맥스
        로드(페드로 파스칼)에게 맡기고서부터. 사람들의 소원을 들어주는 대가로
        그들에게서 가장 소중한 것을 앗아가는 빌런이 세상을 어지럽히기 시작하고,
        다이애나의 앞엔 거짓말처럼 죽었던 스티브가 나타나는데...
      </DescWrapper>
    </DetailWrapper>
  </AppLayout>
);

export default tmp;
