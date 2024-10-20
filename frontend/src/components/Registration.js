import React, { userState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		username: '',
		password: '',
		phoneNumber: '',
		
	});
	
	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	
	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/api/auth/register', formData);
		  console.log(response.data);
		  alert('Registration successful!');
		} catch (error) {
		  console.error('Error registering user:', error);
		  alert('Registration failed!');
		}
	};
	
	return (
		<form onsubmit={handleSubmit}>
			<h2>Register</h2>
			<div>
				<label>First Name:</label>
				<input
					type="text"
					name="firstName"
					value={formData.firstName}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Last Name:</label>
				<input
					type="text"
					name="lastName"
					value={formData.lastName}
					onChange={handleChange}
					required
				/>
			</div>
			<div>
				<label>Email:</label>
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					required
				/>
			</div>
			
				
		