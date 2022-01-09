import React from 'react';
import styled from 'styled-components';

const About = () => {
	return (
		<Container>
			<AboutWrapper>
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
						I’m Andrew Simons, a professional and talented Front End Developer.
						I am passionate about building creative designs and solving
						problems.
					</p>
					<br></br>
					<p>
						I develop websites with HTML, CSS, JavaScript, and React. I have
						experience using various Front End tools such as Redux. .
					</p>
					<br></br>
					<p>
						Iblafdjs fdsajk fdasjkff fjdks adnfd lsdj slreu fd fdsf fdsf
					</p>
					<Button>Download CV</Button>
				</SummaryContainer>
			</AboutWrapper>
		</Container>
	);
};

const Container = styled.div`
	margin-bottom: 20rem;

	img {
		border-radius: 20px;
		height: 500px;
		width: 400px;
	}
`;

const AboutWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ImageContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 0 10px;
	margin-right: 2rem;
`;

const SummaryContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	max-width: 20rem;
	overflow: hidden;

	p {
		color: #3d405b;
		font-weight: 400;
		margin-right: 7px;
		font-size: 18px;
	}

  Button {
    margin-top: auto;
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
`;



export default About;
