import React, { useState, useEffect, useContext } from 'react'
import createAuth0Client from '@auth0/auth0-spa-js'
import { actions } from './features/userContext/userContext.slice'
import {
	selectIsAuthenticated,
	selectUser,
} from './features/userContext/userContext.selectors'
import { useSelector, useDispatch } from 'react-redux'

const { setIsAuthenticated, setUser, setJwtToken } = actions
const DEFAULT_REDIRECT_CALLBACK = () =>
	window.history.replaceState({}, document.title, window.location.pathname)

export const Auth0Context = React.createContext()
export const useAuth0 = () => useContext(Auth0Context)

export const Auth0Provider = ({
	children,
	onRedirectCallback = DEFAULT_REDIRECT_CALLBACK,
	...initOptions
}) => {
	const [auth0Client, setAuth0] = useState()
	const dispatch = useDispatch()
	const isAuthenticated = useSelector(selectIsAuthenticated)
	const user = useSelector(selectUser)

	useEffect(() => {
		const initAuth0 = async () => {
			const auth0FromHook = await createAuth0Client(initOptions)
			setAuth0(auth0FromHook)
			if (
				window.location.search.includes('code=') &&
				window.location.search.includes('state=')
			) {
				const { appState } = await auth0FromHook.handleRedirectCallback()
				onRedirectCallback(appState)
			}
			const isAuthenticated = await auth0FromHook.isAuthenticated()
			debugger
			dispatch(setIsAuthenticated(isAuthenticated))
			if (isAuthenticated) {
				debugger
				const user = await auth0FromHook.getUser()
				const token = await auth0FromHook.getTokenSilently()
				dispatch(setJwtToken(token))
				dispatch(setUser(user))
			}
		}
		initAuth0()
		// eslint-disable-next-line
	}, [])

	const handleRedirectCallback = async () => {
		await auth0Client.handleRedirectCallback()
		const user = await auth0Client.getUser()
		dispatch(setIsAuthenticated(true))
		dispatch(setUser(user))
	}

	return (
		<Auth0Context.Provider
			value={{
				isAuthenticated,
				user,
				handleRedirectCallback,
				getIdTokenClaims: (...p) => auth0Client.getIdTokenClaims(...p),
				loginWithRedirect: (...p) => auth0Client.loginWithRedirect(...p),
				getTokenSilently: (...p) => auth0Client.getTokenSilently(...p),
				getTokenWithPopup: (...p) => auth0Client.getTokenWithPopup(...p),
				logout: (...p) => auth0Client.logout(...p),
			}}
		>
			{children}
		</Auth0Context.Provider>
	)
}
