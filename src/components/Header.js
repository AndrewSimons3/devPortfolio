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
					<button>Download CV</button>
				</ul>
			</Nav>
		</Container>
	);
}

const Container = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

`

const Nav = styled.nav`
	width: 90%;
	height: 100px;
	display: flex;
	align-items: center;
	padding: 2rem;
	border-radius: 100px;
	z-index: 100;
	background-color: #fff;
	box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
	position: fixed;

	ul {
    width: 100%;
		display: flex;
    justify-content: flex-end;
		flex-direction: row;
		list-style-type: none;
	}

	a {
		text-decoration: none;
	}
`;

export default Header;
