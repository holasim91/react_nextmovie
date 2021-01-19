import React from 'react';
import styled from 'styled-components';
import AppLayout from '../Components/AppLayout';

const DetailWrapper = styled.div`
  background-color: yellow;
  width: 800px;
`;

const MovieTitleWrapper = styled.div`
  padding-top: 50px;
  font-size: 56px;
  font-weight: bold; 
`;
const OriginalTitleWrapper = styled.div`
    font-size: 28px;
    color: #767676;
    font-weight: bold; 

`;
const StyledP = styled.div`
  font-size: 20px;
  &p{

  }
`;
const DescWrapper = styled.div`
  font-size: 20px;
  display: inline-block;
`;
const DetailInfoWrapper = styled.div`
    background-color: darkcyan;
    height: 500px;
    width: 450px;
    float: left;
`;
const PosterWrapper = styled.div`
    background-color: tomato;
    height: 500px;
    width: 314px;
    display: inline-block;

`;
const tmp = () => (
  <AppLayout>
    <DetailWrapper>
      <MovieTitleWrapper>Guardians of the Galaxy</MovieTitleWrapper>
      <OriginalTitleWrapper>Guardians of the Galaxy</OriginalTitleWrapper>
      <DetailInfoWrapper>
        <StyledP>
          <strong>ReleaseDate:</strong> 2020-01-13
        </StyledP>
        <StyledP>
          <strong>GENRES:</strong>Fantasy, Action, Adventure
        </StyledP>
        <StyledP>
          <strong>Score: </strong>8.3
        </StyledP>
        <StyledP>
          <strong>Status:</strong> Released
        </StyledP>
      </DetailInfoWrapper>
      <PosterWrapper>
        <img
          style={{ width: '224px', height: '320px' }}
          src="https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg"
          alt="wonder"
        />

      </PosterWrapper>
      <DescWrapper>
        <strong>Description</strong>
        <br />
        <p>
          사랑의 힘으로 시련을 딛고 진정한 슈퍼히어로로 거듭난 원더 우먼 다이애나
          프린스(갤 가돗)는 고고학자로서 인간들 사이에서 조용히 살고 있다.
          다이애나의 마음 한편엔 세상을 떠난 연인 스티브 트레버(크리스 파인)의
          빈자리가 여전하다. 그녀의 주변이 어수선해지기 시작한 건 동료
          바바라(크리스틴 위그)가 관리 중이던 고대 유물을 수상한 석유 부자 맥스
          로드(페드로 파스칼)에게 맡기고서부터. 사람들의 소원을 들어주는 대가로
          그들에게서 가장 소중한 것을 앗아가는 빌런이 세상을 어지럽히기 시작하고,
          다이애나의 앞엔 거짓말처럼 죽었던 스티브가 나타나는데...
        </p>
      </DescWrapper>
    </DetailWrapper>
  </AppLayout>
);

export default tmp;
