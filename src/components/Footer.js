import React from 'react';
import styled from 'styled-components';

const Footer = () => {
	return (
		<Container>
			<div className='logo-container'>
				<img src='../images/AndrewSimonsLogo.png' alt='Logo' />
			</div>
			<div className='text-container'>
				<p>Copyright &copy; 2022</p>
			</div>
			<div className='social-container'>
				<div className='img-container'>
					<a
						href='https://www.linkedin.com/in/andrew-simons3/'
						target='_blank'
						rel='noreferrer'
					>
						<img
							className='linkedin'
							src='../images/linkedin-logo.svg'
							alt='linkedin'
						/>
					</a>
				</div>
				<div className='img-container'>
					<a
						href='https://twitter.com/andrewmsimons'
						target='_blank'
						rel='noreferrer'
					>
						<img
							className='twitter '
							src='../images/twitter-logo.svg'
							alt='twitter'
						/>
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

	.linkedin {
		filter: invert(28%) sepia(69%) saturate(1847%) hue-rotate(177deg)
			brightness(99%) contrast(101%);
	}

	.twitter {
		filter: invert(41%) sepia(90%) saturate(749%) hue-rotate(159deg)
			brightness(106%) contrast(105%);
	}

	@media (max-width: 768px) {
		.logo-container img {
			width: 50px;
			height: 35px;
		}

		.social-container img {
			width: 35px;
			height: 35px;
		}

    p {
      font-size: 14px;
      font-weight: 300;
    }
	}
`;

export default Footer;
