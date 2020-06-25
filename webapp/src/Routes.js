import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import VisitsArchive from './features/VisitsArchive'
import VisitsProvider from './features/VisitsProvider'
import Settings from './features/Settings/Settings'
import Dashboard from './features/Dashboard'
import ProviderVisitItem from './features/ProviderVisitItem'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/provider'>
				<ProviderVisitItem />
			</PageRoute>
			<PageRoute path='/dashboard'>
				<Dashboard />
			</PageRoute>
			<PageRoute path='/settings'>
				<Settings />
			</PageRoute>
			<PageRoute path='/nurse/visit/:id'>
				<VisitsProvider />
			</PageRoute>
			<PageRoute path='/nurse/visit'>
				<VisitsArchive />
			</PageRoute>
		</Switch>
	)
}
function PageRoute({ children, ...rest }) {
	return (
		<Route {...rest}>
			<Page>{children}</Page>
		</Route>
	)
}
