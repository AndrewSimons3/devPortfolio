import React from 'react';
import styled from 'styled-components';

const Main = () => {
  return (
		<BgContainer>
						<img src='../images/Andrew.jpeg' />
		</BgContainer>
	);
};

const BgContainer = styled.div`
  img {
    width: 40%;
  }
`;



const Title = styled.h1`
	color: #F4F1DE;
`;

export default Main;
