import React, { useState } from 'react';
import styled from 'styled-components';
import { db } from './firebase';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const [loader, setLoader] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection('messages').add({
      name: name,
      email: email,
      phone: phone,
      message: message,
    })
      .then(() => {
        alert('Message has been submitted 👍');
        setLoader(false);
      })
      .catch(error => {
        alert(error.message);
        setLoader(false);
      });

    setName('');
    setPhone('');
    setEmail('');
    setMessage('');
  }

	return (
		<ContactWrapper id='Contact'>
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
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							name='name'
							placeholder='Full Name'
							value={name}
							onChange={(e) => setName(e.target.value)}
						></input>
						<div className='row-2'>
							<input
								type='text'
								name='email'
								placeholder='Email'
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							></input>
							<input
								type='text'
								name='phone'
								placeholder='Phone'
								value={phone}
								onChange={(e) => setPhone(e.target.value)}
							></input>
						</div>
						<textarea
							name='message'
							cols='30'
							rows='10'
              placeholder='Enter your message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
							required
						></textarea>
						<button type='submit' style={{background : loader ? "#ccc" : ""}}>Submit</button>
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
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
`;

const Icons = styled.div`
	.contact-info {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		margin: 0 2rem 4rem 2rem;
	}

	.image-container {
		background-color: #3d405b;
		padding: 10px;
		border-radius: 100px;
		margin-right: 10px;
		border: 2px solid #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
	}

	img {
		height: 40px;
		width: 40px;
		filter: invert(88%) sepia(29%) saturate(128%) hue-rotate(353deg)
			brightness(106%) contrast(91%);
	}

	@media (max-width: 1007px) {
		display: flex;
		justify-content: center;
		align-items: center;

		img {
			width: 25px;
			height: 25px;
		}

		p {
			font-size: 12px;
		}

		@media (max-width: 684px) {
			display: flex;
      align-items: start;
			flex-direction: column;

			.contact-info {
				margin-bottom: 2rem;
			}
		}
	}
`;

const FormContainer = styled.div`
	width: 40rem;
	max-width: 100%;

	@media (max-width: 756px) {
		width: 35rem;
	}

	@media (max-width: 635px) {
		width: 30rem;
	}

	@media (max-width: 550px) {
		width: 25rem;
	}

	@media (max-width: 480px) {
		width: 20rem;
	}

	form {
		@media (max-width: 756px) {
			display: flex;
			justify-content: center;
			flex-direction: column;
			align-items: center;
		}
	}

	input {
		height: 3.6rem;
		display: flex;
		align-items: center;
		padding: 0 2rem;
		margin-bottom: 2rem;
		font-weight: 300;
		font-size: 1.2rem;
		line-height: 1.4rem;
		color: #3d405b;
		box-shadow: 0 0.8rem 0.4rem rgb(51 51 51 / 25%);
		border-radius: 3rem;
		display: block;
		width: 100%;
		border: 1px solid #3d405b;
		font-family: 'Spartan', sans-serif;
	}

	input::placeholder {
		font-weight: 300;
		color: #3d405b;
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

			@media (max-width: 678px) {
				width: 100%;
			}
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

	textarea::placeholder {
		color: #3d405b;
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
		font-weight: 300;
		font-size: 1rem;
		line-height: 1.4rem;
		text-align: center;
		color: #f4f1de;
		border: none;
		transition: all 0.6s ease;
		transition-delay: 0.1s;

		&:hover {
			background: #6c9c85;
			transition: 0.3s ease-in;
		}

		button:focus {
			border: 1px solid #3d405b;
		}

		@media (max-width: 974px) {
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
`;

export default Contact;
