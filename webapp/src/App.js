import React, { useEffect } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import NavBar from './widgets/NavBar'
import Routes from './Routes'
import './app.css'
import NotificationPopup from './infrastructure/notificationPopup'
import Footer from './widgets/Footer'
import { selectIsAuthenticated } from './features/userContext'
import { useAuth0 } from './react-auth0-spa'
import { useSelector } from 'react-redux'

function App() {
	const { loginWithRedirect } = useAuth0()
	const isAuthenticated = useSelector(selectIsAuthenticated)

	useEffect(() => {
		if (isAuthenticated === false) {
			loginWithRedirect({})
		}
	}, [isAuthenticated, loginWithRedirect])
	return (
		isAuthenticated && (
			<Router>
				<NavBar />
				<div className='page bg-light'>
					<NotificationPopup />
					<Routes />
					<Footer />
				</div>
			</Router>
		)
	)
}

export default App
