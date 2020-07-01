import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import VisitsArchive from './features/VisitsArchive'
import VisitsProvider from './features/VisitsProvider'
import ProviderDashboard from './features/ProviderDashboard'
import ProviderVisitItem from './features/ProviderVisitItem'
import ProviderVisitAddMedication from './features/ProviderVisitItem/ProviderVisitAddMedication'
import ProviderVisitAddTest from './features/ProviderVisitItem/ProviderVisitAddTest'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/provider/visit/:id'>
				<ProviderVisitItem />
			</PageRoute>
			<PageRoute path='/provider/dashboard'>
				<ProviderDashboard />
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
