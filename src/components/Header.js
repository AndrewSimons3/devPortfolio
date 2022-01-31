import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const Header = () => {
	return (
		<Nav>
			<ImageContainer>
				<img src='../images/AndrewSimonsLogo.png' alt='Logo' />
			</ImageContainer>
			<ul>
				<Link
					className='li'
					activeClass='active'
					to='Hero'
					spy={true}
					smooth={true}
					offset={-50}
					duration={500}
					href='#Home'
				>
					Home
				</Link>
				<Link
					className='li'
					activeClass='active'
					to='About'
					spy={true}
					smooth={true}
					offset={-50}
					duration={1000}
					href='#About'
				>
					About
				</Link>
				<Link
					className='li'
					activeClass='active'
					to='Projects'
					spy={true}
					smooth={true}
					offset={-50}
					duration={1000}
					href='#Projects'
				>
					Portfolio
				</Link>
				<Link
					className='li'
					activeClass='active'
					to='Contact'
					spy={true}
					smooth={true}
					offset={-50}
					duration={1000}
					href='#Contacts'
				>
					Contact
				</Link>
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
			</ul>
		</Nav>
	);
};

const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-start;

	img {
		height: 72px;
		width: 112px;
	}
`;

const Nav = styled.nav`
	width: 100%;
	height: 150px;
	display: flex;
	align-items: center;
	padding: 0 2rem;
	border-radius: 10rem;
	font-size: 18px;
	top: 0;
	left: 0;
	right: 0;
	z-index: 9999;

	ul {
		width: 100%;
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
		list-style-type: none;
		animation: moveInRight 2s ease-out;
	}

	@keyframes moveInRight {
		0% {
			opacity: 0;
			transform: translateX(10rem);
		}

		100% {
			opacity: 1;
			transform: translate(0);
		}
	}

	.li {
		color: #2d2f46;
		padding: 0 15px;
		text-decoration: none;
	}

	@media (max-width: 800px) {
		.li {
			font-size: 16px;
		}

		a {
			width: 100px;
			padding: 10px;
		}
	}

	@media (max-width: 650px) {
		.li {
			display: none;
		}
	}
`;

const ButtonContainer = styled.button`
	border-radius: 100px;
	border: none;
	background-color: #81b29a;

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
		box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
	}

	.btn:active {
		transform: translateY(-1px);
		box-shadow: 0 0.5rem 0.1rem rgba(0, 0, 0, 0.2);
	}

	.btn--green {
		background-color: #81b29a;
		color: #fff;
	}

	.btn::after {
		content: '';
		display: inline-block;
	}

	.btn--green::after {
		background-color: #81b29a;
	}

	.btn:hover::after {
		transform: scaleX(1.4) scaleY(1.6);
		opacity: 0;
	}

	@media (max-width: 800px) {
		.btn:link,
		.btn:visited {
			padding: 1rem 1rem;
		}
	}

`;



export default Header;
