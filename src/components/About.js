import React from 'react';
import styled from 'styled-components';

const About = () => {
	return (
		<AboutWrapper id='About'>
			<ImageContainer>
				<img src='../images/Andrew.jpeg' alt='Andrew' />
			</ImageContainer>
			<SummaryContainer>
				<Who>
					<span></span>
					<p>Who I am</p>
					<span></span>
				</Who>
				<AboutTitle>About Me</AboutTitle>
				<p>
					I’m Andrew Simons, a professional and talented Front End Developer. I
					am passionate about building creative designs and solving problems.
				</p>
				<br></br>
				<p>
					I develop websites with HTML, CSS, JavaScript, and React. I have
					experience using various technologies such as Node, Firebase, MongoDB,
					Redux, and more.
				</p>
				<br></br>
				<p>
					A passionate and driven individual, I pride myself on being a lifelong
					learner and applying my skills to produce the best results.
				</p>
				<ButtonContainer>
					<a
						className='btn btn--green btn--animated'
						href='https://github.com/AndrewSimons3/Resume/blob/master/Andrew%20Simons%20Resume.pdf'
						target='_blank'
						rel='noreferrer'
					>
						Resume
					</a>
				</ButtonContainer>
			</SummaryContainer>
		</AboutWrapper>
	);
};

const AboutWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-bottom: 15rem;

	img {
		border-radius: 20px;
		height: 500px;
		width: 400px;
	}

	@media (max-width: 768px) {
		margin-bottom: 5rem;
		img {
			height: 375px;
			width: 300px;
		}
	}
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 10px;
	margin-right: 2rem;

	img {
		box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}

	@media (max-width: 768px) {
		margin-right: 0;
		margin-bottom: 4rem;
	}
`;

const SummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	max-width: 20rem;
	overflow: hidden;
	padding-bottom: 10px;

	p {
		color: #3d405b;
		font-weight: 400;
		margin-right: 7px;
		font-size: 16px;
	}

	@media (max-width: 798px) {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;

		Button {
			margin-top: 2rem;
		}
	}
`;

const Who = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.4rem;
	p {
		color: #81b29a;
		font-weight: 400;
		font-size: 2.4rem;
		margin: 0 7px;
		font-size: 18px;
	}

	span {
		display: inline-block;
		width: 5rem;
		height: 0.1rem;
		background: #81b29a;
	}
`;

const AboutTitle = styled.h3`
	color: #3d405b;
	margin-bottom: 1.4rem;
	font-weight: 700;
	font-size: 2rem;
`;

const ButtonContainer = styled.div`
	border-radius: 100px;
	border: none;
	background-color: #81b29a;
	width: 132px;
	margin: 20px 0 80px 0px;
	font-weight: 300;

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
		box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
	}

	.btn:active {
		transform: translateY(-1px);
		box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.2);
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

export default About;
