import React from 'react';
import styled from 'styled-components';

const Projects = () => {
	return (
		<ProjectsWrapper id='Projects'>
			<Header>
				<Inner>
					<span></span>
					<p>Projects</p>
					<span></span>
				</Inner>
				<Title>My Portfolio</Title>
			</Header>

			<ProjectsCardWrapper>
				<ProjectsCard>
					<CardContainer>
						<h3>Anita's Bakery</h3>
						<p>
							E-commerce bakery app to add baking goods to a cart and submit
							order to a firestore database
						</p>
						<button>View App</button>
						<button>View Github</button>
					</CardContainer>
				</ProjectsCard>
				<ProjectsCard>
					<a href='https://disneyplus-clone-bc172.web.app/'>
						<img src='../images/Disney.png' alt='disney' />
					</a>
				</ProjectsCard>
				<ProjectsCard>
					<a href='https://teslaclone-a521e.web.app/'>
						<img src='../images/Tesla.png' alt='tesla' />
					</a>
				</ProjectsCard>
				<ProjectsCard>
					<a href='https://reacttodolist-e24ff.web.app/'>
						<img src='../images/todo.png' alt='todo' />
					</a>
				</ProjectsCard>
			</ProjectsCardWrapper>
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

const ProjectsCardWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
`;

const ProjectsCard = styled.div`
	background-color: #3d405b;
	background-image: url('../images/Anita.png');
	background-size: cover;
	color: #f4f1de;
	box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
		rgba(0, 0, 0, 0.22) 0px 15px 12px;
	border-radius: 25px;
	width: 30rem;
	min-height: 15rem;
	max-width: 100%;
	position: relative;
	margin-bottom: 2.7rem;
	margin-right: 1rem;
	margin-left: 1rem;


	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 25px;
	}

	@media (max-width: 500px) {
		min-height: 10rem;
		width: 20rem;
	}
`;

const CardContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	opacity: 0;
	border-radius: 25px;

	&:hover {
		opacity: 0.9;
		transition: all 0.6s ease;
		transition-delay: 0.2s;
		background: #3d405b;
		
	}
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
