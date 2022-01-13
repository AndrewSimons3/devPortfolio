import React from 'react';
import styled from 'styled-components';

const Contact = () => {
	return (
		<ContactWrapper>
			<Header>
				<Inner>
					<span></span>
					<p>Contact Me</p>
					<span></span>
				</Inner>
				<Title>Get in Touch</Title>
			</Header>
			<ContactBox>
				<Icons>
					<div className='contact-info'>
						<div className='image-container'>
							<img src='../images/location-outline.svg' alt='location'></img>
						</div>
						<p>Austin, TX</p>
					</div>
					<div className='contact-info'>
						<div className='image-container'>
							<img src='../images/call-outline.svg' alt='phone'></img>
						</div>
						<p>512-944-9351</p>
					</div>
					<div className='contact-info'>
						<div className='image-container'>
							<img src='../images/mail-outline.svg' alt='mail'></img>
						</div>
						<p>simdrew07@gmail.com</p>
					</div>
				</Icons>
				<FormContainer>
					<form method='POST'>
						<input type='text' name='name' placeholder='Full Name'></input>
						<div className='row-2'>
							<input type='text' name='email' placeholder='Phone'></input>
							<input type='text' name='phone' placeholder='Email'></input>
						</div>
						<textarea
							name='message'
							id
							cols='30'
							rows='10'
							placeholder='Enter your message'
							required
						></textarea>
						<button type='submit'>Submit</button>
					</form>
				</FormContainer>
			</ContactBox>
		</ContactWrapper>
	);
};

const ContactWrapper = styled.div`
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

const ContactBox = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const Icons = styled.div`
	.contact-info {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin-bottom: 4rem;
		margin-right: 2rem;
	}

	img {
		height: 50px;
		width: 50px;
	}
`;

const FormContainer = styled.div`
	width: 40rem;
	max-width: 100%;

	input {
		height: 3.6rem;
		display: flex;
		align-items: center;
		padding: 0 2rem;
		margin-bottom: 2rem;
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.4rem;
		color: #3d405b;
		box-shadow: 0 0.8rem 0.4rem rgb(51 51 51 / 25%);
		border-radius: 3rem;
		display: block;
		width: 100%;
		border: 1px solid #3d405b;
	}

	input:focus {
		outline: none !important;
		border: 1px solid #3d405b;
		box-shadow: 0 0 10px #3d405b;
	}

	.row-2 {
		display: flex;
		width: 100%;
		justify-content: space-between;
		flex-wrap: wrap;

		input {
			width: 49%;
		}
	}

	textarea {
		border-radius: 1rem;
		padding: 2.2rem 2rem;
		margin-bottom: 2rem;
		font-weight: 400;
		font-size: 1.2rem;
		line-height: 1.4rem;
		color: #3d405b;
		box-shadow: 0 0.8rem 0.4rem rgb(51 51 51 / 25%);
		border-radius: 3rem;
		display: block;
		width: 100%;
		border: 1px solid #3d405b;
		font-family: 'Spartan', sans-serif;
		font-weight: 300;
	}

	textarea:focus {
		outline: none !important;
		border: 1px solid #3d405b;
		box-shadow: 0 0 10px #3d405b;
	}

	button {
		height: 3.6rem;
		width: 14rem;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #81b29a;
		box-shadow: 0 1.6rem 1.6rem rgb(51 51 51 / 25%);
		border-radius: 3rem;
		font-style: normal;
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.4rem;
		text-align: center;
		color: #f4f1de;
		border: none;

		button:active {
			outline: none;
			border: none;
		}

		button:focus {
			outline: 0;
		}

		&:hover {
			background: #6c9c85;
			transition: 0.3s ease-in;
		}
	}
`;

export default Contact;
