import React from 'react';
import styled from 'styled-components';

const Services = () => {
	return (
		<ServicesWrapper>
			<Header>
				<Inner>
					<p>What I do</p>
					<span></span>
				</Inner>
				<Title>My Services</Title>
			</Header>

			<ServicesCardWrapper>
				<ServicesCard>
					<img src='' />
					<h5>Web Design</h5>
					<p>description of service</p>
				</ServicesCard>
				<ServicesCard>
					<img src='' />
					<h5>Front End Development</h5>
					<p>description of service</p>
				</ServicesCard>
				<ServicesCard>
					<img src='' />
					<h5>Management and Leadership</h5>
					<p>description of service</p>
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
	margin-bottom: 20rem;
`;

const Header = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	margin-bottom: 3rem;

	p {
		color: #81b29a;
		font-weight: 400;
		font-size: 2.4rem;
		margin-right: 7px;
		font-size: 18px;
	}

	span {
		display: inline-block;
		width: 5rem;
		height: 0.3rem;
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
`;

const ServicesCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
`;

const ServicesCard = styled.div`
	background-color:#3D405B;
	box-shadow: 0 1.6rem 2.4rem rgb(0 0 0 / 25%);
	border-radius: 0.8rem;
	width: 20rem;
	min-height: 20rem;
	max-width: 100%;
	padding: 1.6rem 4.3rem 2.2rem 3.5rem;
	position: relative;
	margin-bottom: 2.7rem;
	margin-right: 1rem;
	margin-left: 1rem;
`;

export default Services;
