import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<div className='logo-container'>
				<img src='../images/AndrewSimonsLogo.png' alt='Logo' />
			</div>
			<div className='text-container'>
				<p>Copyright & 2022</p>
			</div>
			<div className='social-container'>
				<div className='img-container'>
					<a href='https://www.linkedin.com/in/andrew-simons3/'>
						<img src='../images/linkedin-logo.svg' alt='linkedin' />
					</a>
				</div>
				<div className='img-container'>
					<a href='https://twitter.com/andrewmsimons'>
						<img src='../images/twitter-logo.svg' alt='twitter' />
					</a>
				</div>
			</div>
		</Container>
	);
};

const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1rem 2rem;
	border-top: 1px solid #3d405b;
	color: #3d405b;

	.logo-container img {
		height: 72px;
		width: 112px;
	}

	.social-container {
		display: flex;
		flex-direction: row;
	}

	.social-container img {
		width: 50px;
		height: 50px;
	}
`;

export default Footer;
