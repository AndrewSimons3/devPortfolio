import React from 'react';
import styled from 'styled-components';

const Main = () => {
	return (
		<Container>
			<HeroWrapper>
				<HeroTextWrapper>
					<Summary>Hi there 👋 I'm</Summary>
					<Title>Andrew Simons</Title>
					<Summary>I'm a Front End Developer</Summary>
					<p>
						I’m a professional Front End Developer with a focus in Javascript & React
						based in Austin, TX.
					</p>
				</HeroTextWrapper>
				<HeroImageWrapper>
					<img alt='' />
				</HeroImageWrapper>
			</HeroWrapper>
		</Container>
	);
};

const Container = styled.div`
	max-width: 1200px;
	width: 100%;
`;

const HeroWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	padding-bottom: 7rem;
	position: relative;
	margin: 20% 25px;
`;

const HeroTextWrapper = styled.div`
	max-width: 40%;
	overflow: hidden;
`;

const HeroImageWrapper = styled.div`

`

const Title = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 5.2rem;
	line-height: 6rem;
	margin-bottom: 1.6rem;
	color: #3d405b;
`;

const Summary = styled.p`
	text-transform: uppercase;
}
`;

export default Main;
