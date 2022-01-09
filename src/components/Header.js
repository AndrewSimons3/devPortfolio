import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<Nav>
			<ImageContainer>
				<img src='../images/AndrewSimonsLogo.png' alt='Logo' />
			</ImageContainer>
			<ul>
				<li>
					<a href='#'>Home</a>
				</li>
				<li>
					<a href='#About'>About</a>
				</li>
				<li>
					<a href='#Projects'>Portfolio</a>
				</li>
				<li>
					<a href='#'>Contacts</a>
				</li>
				<li>
					<a href='#'>Blog</a>
				</li>
				<Button>
					<a href='https://github.com/AndrewSimons3/Resume/blob/master/Andrew%20Simons%20Resume.pdf'>
						Resume
					</a>
				</Button>
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
	border-radius: 100px;
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
	}

	li {
		padding: 0 15px;
	}

	a {
		text-decoration: none;
		cursor: pointer;
		color: #3d405b;
	}
`;

const Button = styled.button`
	text-decoration: none;
	padding: 20px;
	width: 150px;
	border-radius: 50px;
	margin-left: 20px;
	border: none;
	background-color: #81b29a;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

	a {
		color: #fff;
	}

	&:hover {
		background-color: #6c9c85;
		transition: 0.3s ease;
	}
`;

export default Header;
