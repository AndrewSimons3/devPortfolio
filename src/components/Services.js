import React from 'react';
import styled from 'styled-components';

const Services = () => {
	return (
		<ServicesWrapper id='Services'>
			<Header>
				<Inner>
					<span></span>
					<p>What I do</p>
					<span></span>
				</Inner>
				<Title>My Services</Title>
			</Header>

			<ServicesCardWrapper>
				<ServicesCard>
					<img
						src='../images/brackets-curly.svg'
						className='filter-red'
						alt='curly brackets'
					/>
					<h3>Web Design</h3>
					<p>
						I use various tools and technologies such as HTML, CSS, Bootstrap,
						Sass, to design attractive, responsive applications.
					</p>
				</ServicesCard>
				<ServicesCard>
					<img
						src='../images/logo-react.svg'
						className='filter-blue'
						alt='react'
					/>
					<h3>Front End Development</h3>
					<p>I am an expert problem solver with a mission of creating the best user experience using JavaScript and React.</p>
				</ServicesCard>
				<ServicesCard>
					<img
						src='../images/note-pencil.svg'
						className='filter-yellow'
						alt='pen'
					/>
					<h3>Management and Leadership</h3>
					<p>Over 5 years of sales, customer service, and operations management experience, I bring strong leadership and business experience.</p>
				</ServicesCard>
			</ServicesCardWrapper>
		</ServicesWrapper>
	);
};

const ServicesWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 12rem;

  @media (max-width: 400px) {
    margin-bottom: 5rem;
  }
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 3rem;

	@media (max-width: 768px) {
		margin-bottom: 1.4rem;
	}

	p {
		color: #81b29a;
		font-weight: 400;
		font-size: 2.4rem;
		margin-right: 7px;
		margin-left: 7px;
		font-size: 18px;
	}

	span {
		display: inline-block;
		width: 5rem;
		height: 0.1rem;
		background: #81b29a;
	}
`;

const Inner = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 1.4rem;
`;

const Title = styled.h3`
	color: #3d405b;
	margin-bottom: 1.4rem;
	font-weight: 700;
	font-size: 2rem;

	@media (max-width: 768px) {
		margin-bottom: 0.5rem;
	}
`;

const ServicesCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const ServicesCard = styled.div`
	background-color: #3d405b;
	color: #f4f1de;
	box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
	border-radius: 0.8rem;
	width: 20rem;
	min-height: 18rem;
	max-width: 100%;
	padding: 1.6rem 4.3rem 2.2rem 3.5rem;
	position: relative;
	margin-bottom: 2.7rem;
	margin-right: 1rem;
	margin-left: 1rem;

  &:hover {
    background: #333655;
    transition: all 0.4s ease-in-out;
}
  }


  h3 {
	font-family: cursive;
	font-size: 1.2rem;
	color: #f4f1de;
	position: relative;
  margin-bottom: 1rem;
}

h3::after {
	position: absolute;
	content: "";
	width: 0%;
	height: 2px;
	background-color: #f4f1de;
	left: 50%;
	bottom: -5px;
	transition: all 0.4s ease-in-out;
}

&:hover h3::after {
	width: 100%;
	left: 0;
}

  p {
    font-weight: 100;
    font-size: 14px;
  }

	img {
		height: 50px;
		width: 50px;
	}

	.filter-blue {
		filter: invert(44%) sepia(90%) saturate(1334%) hue-rotate(160deg)
			brightness(93%) contrast(101%);
	}

	.filter-red {
		filter: invert(18%) sepia(60%) saturate(2383%) hue-rotate(345deg)
			brightness(96%) contrast(93%);
	}

	.filter-yellow {
		filter: invert(76%) sepia(46%) saturate(316%) hue-rotate(353deg)
			brightness(103%) contrast(90%);
	}
`;

export default Services;
