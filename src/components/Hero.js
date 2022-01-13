import React from 'react';
import styled from 'styled-components';

const Hero = () => {
	return (
		<Container>
			<HeroWrapper>
				<HeroTextWrapper>
					<p>Hi there 👋 </p>
					<Title>Andrew Simons</Title>
					<h3>Front End Developer  </h3>
					<Summary>
						I’m a professional Front End Developer with a focus in Javascript & React
						based in Austin, TX.
					</Summary>
					<Button>Hire Me</Button>
				</HeroTextWrapper>
				<HeroImageWrapper>
					<img src='../images/AndrewMoji.png' alt=''/>
				</HeroImageWrapper>
			</HeroWrapper>
		</Container>
	);
};

const Container = styled.div`
	margin-bottom: 15rem;
	width: 100%;

	@media (max-width: 400px) {
		margin-bottom: 5rem;
	}
`;

const HeroWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	align-items: center;
	position: relative;
	margin: 2% 12% 0 12%;

	@media (max-width: 850px) {
		justify-content: center;
	}
`;

const HeroTextWrapper = styled.div`
	width: 55%;
	overflow: hidden;
	padding-bottom: 10px;

	p {
		text-transform: uppercase;
		margin-bottom: 1rem;
		color: #3d405b;
	}

	h3 {
		font-weight: 700;
		font-size: 1.2rem;
		line-height: 2.1rem;
		color: #81b29a;
		margin-bottom: 1rem;
		text-transform: uppercase;
	}

	${
		'' /* @media (max-width: 1450px) {
		width: 40rem;
	} */
	}

	@media (max-width: 1050px) {
		width: 20rem;
	}

	@media (max-width: 850px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
	}
`;

const Summary = styled.div`
	font-style: normal;
	font-weight: 400;
	font-size: 1.2rem;
	line-height: 1.9rem;
	color: #3d405b;
	margin-bottom: 1rem;
`;

const Button = styled.button`
	width: 200px;
	text-decoration: none;
	padding: 20px;
	border-radius: 50px;
	border: none;
	background-color: #81b29a;
	color: #fff;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	&:hover {
		background-color: #6c9c85;
		transition: 0.3s ease;
	}
`;

const HeroImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		width: 500px;
		height: 500px;
		border-radius: 25px;
	}

	@media (max-width: 768px) {
		img {
			display: none;
		}
	}

	@media (max-width: 850px) {
		
	}

	@media (max-width: 1515px) {
		img {
			height: 300px;
			width: 300px;
		}
	}

	@media (max-width: 1250px) {
		img {
			height: 300px;
			width: 300px;
		}
	}
`;

const Title = styled.h1`
	font-style: normal;
	font-weight: 700;
	font-size: 5.2rem;
	line-height: 6rem;
	margin-bottom: 1.6rem;
	color: #3d405b;

	@media (max-width: 1050px) {
		font-size: 4.4rem;
	}

	@media (max-width: 768px) {
		font-size: 3rem;
		line-height: 1.25;
		margin-bottom: 1rem;
	}
`;


export default Hero;
