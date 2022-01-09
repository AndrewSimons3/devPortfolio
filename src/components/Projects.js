import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<ProjectsWrapper id="Projects">
			<Header>
        <Inner>
          <span></span>
					<p>Projects</p>
					<span></span>
				</Inner>
				<Title>My Portfolio</Title>
			</Header>
		</ProjectsWrapper>
	);
};

const ProjectsWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-bottom: 20rem;
  
`;

const Header = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 3rem;

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

export default Projects;
