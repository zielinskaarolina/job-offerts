//logo jeszcze do każdego

import { useState } from 'react';

const offerts = [
	{
		id: 1,
		name: 'Karolina',
		lastName: 'Zielińska',
		position: 'Front end developer',
		phone: '724434777',
		email: 'hejtulola@outlook.com',
		location: 'Warszawa, Polska',
		price: '3000-4000',
		call: 'tel:+724434777',
	},
	{
		id: 2,
		name: 'Jan',
		lastName: 'Kowalski',
		position: 'Back end developer',
		phone: '123456789',
		email: 'jan.kowalski@example.com',
		location: 'Kraków, Polska',
		price: '4000-5000',
		call: "tel:+123456789",
	},
	{
		id: 3,
		name: 'Anna',
		lastName: 'Nowak',
		position: 'Full stack developer',
		phone: '987654321',
		email: 'anna.nowak@example.com',
		location: 'Gdańsk, Polska',
		price: '5000-6000',
		call: "tel:+987654321",
	},
	{
		id: 4,
		name: 'Ania',
		lastName: 'Nowak',
		position: 'Full stack developer',
		phone: '987654321',
		email: 'anna.nowak@example.com',
		location: 'Gdańsk, Polska',
		price: '5000-6000',
		call: "tel:+987654321",
	},
	
];

function FindJob() {
	const [users, setUsers] = useState(offerts);
	const [searchTerm, setSearchTerm] = useState('');

	const handleSearch = (event) => {
		setSearchTerm(event.target.value.toLowerCase());
	};

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchTerm) ||
			user.lastName.toLowerCase().includes(searchTerm) ||
			user.position.toLowerCase().includes(searchTerm) ||
			user.location.toLowerCase().includes(searchTerm) ||
			user.email.toLowerCase().includes(searchTerm)
	);

	return (
		<div className='find-job'>
			<div className='top'>
				<div className='text'>
					<p>
						Whether you are looking for a programmer, data analyst, system
						administrator, or security specialist, our candidate database is at
						your disposal. Find the ideal employee who will help your company
						achieve new successes.
					</p>
				</div>
				<div className='search'>
					<input className='inputOffert' type='text' placeholder='Search...' onChange={handleSearch} />
				</div>
			</div>

			<div className='category-items'>
				<div className='offerts'>
					{filteredUsers.map((user) => (
						<div key={user.id} className='offert'>
							<h2>
								{user.name} {user.lastName}
							</h2>
							<p>Stanowisko: {user.position}</p>
							<p>Telefon: {user.phone}</p>
							<p>E-mail: {user.email}</p>
							<p>Lokacja: {user.location}</p>
							<p>Stawka: {user.price}</p>
							<a href={user.call}>Zadzwoń</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default FindJob;
