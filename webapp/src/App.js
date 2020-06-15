import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './widgets/NavBar'
import Routes from './Routes'
import './app.css'
import NotificationPopup from './infrastructure/notificationPopup'

function App() {
	return (
		<Router>
			<NavBar />
			<div className='page  bg-light'>
				<NotificationPopup />
				<Routes />
			</div>
		</Router>
	)
}

export default App
