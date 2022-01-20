import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Hero = () => {
	return (
		<Container id='Hero'>
			<HeroWrapper>
				<HeroTextWrapper>
					<p>Hi there 👋 my name is</p>
					<Title>Andrew Simons</Title>
					<h3>Front End Developer 🧑‍💻</h3>
					<Summary>
						I’m a professional Front End Developer with a focus in Javascript &
						React based in Austin, TX.
					</Summary>
					<Link
						className='li'
						activeClass='active'
						to='Contact'
						spy={true}
						smooth={true}
						offset={-50}
						duration={1000}
					>
						<ButtonContainer>
							<a className="btn btn--green btn--animate" href="#">Hire Me</a>
						</ButtonContainer>
					</Link>
				</HeroTextWrapper>
				<HeroImageWrapper>
					<img src='../images/AndrewMoji.png' alt='' />
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
	padding: 0 0 20px 20px;
	animation: moveInLeft 2s ease-out;

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
		width: 22rem;
	}

	@media (max-width: 850px) {
		display: flex;
		justify-content: center;
		flex-direction: column;
		align-items: center;
		text-align: center;
		width: 100%;
	}

	@keyframes moveInLeft {
		0% {
			opacity: 0;
			transform: translateX(-10rem);
		}


		100% {
			opacity: 1;
			transform: translate(0);
		}
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

const ButtonContainer = styled.div`
	border-radius: 100px;
	border: none;
	background-color: #81b29a;
	width: 132px;

	.btn:link,
	.btn:visited {
		text-decoration: none;
		color: #fff;
		padding: 1rem 2rem;
		display: inline-block;
		border-radius: 100px;
		transition: all 0.2s;
	}

	.btn:hover {
		transform: translateY(-3px);
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
	}

	.btn:active {
		transform: translateY(-1px);
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
	}

	.btn--green {
		background-color: #81b29a;
		color: #fff;
	}

	.btn::after {
		content: '';
		display: inline-block;
		z-index: -1;
	}

	.btn--green::after {
		background-color: #81b29a;
	}

	.btn:hover::after {
		transform: scaleX(1.4) scaleY(1.6);
		opacity: 0;
		box-shadow: 0 1rem 0.5rem rgba(0, 0, 0, 0.2);
	}
`;

const HeroImageWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	animation: moveInBottom 2s ease-out;
	img {
		width: 500px;
		height: 500px;
		border-radius: 25px;
	}

	

	

	@media (max-width: 1515px) {
		img {
			height: 400px;
			width: 400px;
		}
	}

	@media (max-width: 1250px) {
		img {
			height: 300px;
			width: 300px;
		}
	}

	@keyframes moveInBottom {
		0% {
			opacity: 0;
			transform: translateY(3rem);
		}

		100% {
			opacity: 1;
			transform: translate(0);
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

	@media (max-width: 850px) {
		font-size: 3rem;
		line-height: 1.25;
		margin-bottom: 1rem;
	}
`;


export default Hero;
