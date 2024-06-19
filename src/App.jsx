//import { useState } from 'react'
import './App.css';

import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiFillFacebook, AiFillTikTok, AiFillInstagram } from 'react-icons/ai';

import FindJob from './FindJob';
import AddOffert from './AddOffert';

import logo from './images/Logo.png';
import background from './images/background.png';

function App() {
	return (
		<IconContext.Provider value={{ color: 'white', size: '29px' }}>
			<Router>
				<div className='app'>
					<div className='top-footer'>
						<div className='media-icons'>
							<AiFillFacebook />
							<AiFillInstagram />
							<AiFillTikTok />
						</div>
					</div>
					<div className='menu'>
						<div className='logo'>
							<img src={logo} alt='Logo' />
						</div>
						<div className='menu-items'>
							<ul>
								<li>
									<NavLink
										to='/find-job'
										className={(navData) =>
											navData.isActive ? 'active-style' : 'none'
										}>
										find employee
									</NavLink>
								</li>
								<li>
									<NavLink
										to='/add-offert'
										className={(navData) =>
											navData.isActive ? 'active-style' : 'none'
										}>
										send application
									</NavLink>
								</li>
							</ul>
						</div>
					</div>
					<div className='content'>
						<Routes>
							<Route path='/find-job' element={<FindJob />} />
							<Route path='/add-offert' element={<AddOffert />} />
						</Routes>
					</div>
				</div>
			</Router>
		</IconContext.Provider>
	);
}

export default App;
