import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return (
		<Container>
			<Nav>
				<h2>Andrew Simons</h2>
				<ul>
					<li>
						<a href='#'>Home</a>
					</li>
					<li>
						<a href='#'>About</a>
					</li>
					<li>
						<a href='#'>Portfolio</a>
					</li>
					<li>
						<a href='#'>Contacts</a>
					</li>
					<li>
						<a href='#'>Blog</a>
					</li>
					<Button>Download CV</Button>
				</ul>
			</Nav>
			</Container>
	
	);
}

const Container = styled.div`
	display: flex;
	justify-content: center;
`;

const Nav = styled.nav`
	width: 100%;
	height: 100px;
	display: flex;
	align-items: center;
	padding: 2rem;
	border-radius: 100px;
	position: fixed;
	font-size: 18px;

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

		color: #3d405b;
	}
`;

const Button = styled.button`
	text-decoration: none;
	padding: 20px;
	border-radius: 50px;
	border: none;
	background-color: #81b29a;
	color: #fff;
	cursor: pointer;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export default Header;
