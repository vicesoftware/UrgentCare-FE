import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import VisitsArchive from './features/VisitsArchive'
import VisitsProvider from './features/VisitsProvider'
import Settings from './features/Settings/Settings'
import DashboardProvider from './features/DashboardProvider'
import ProviderVisitItem from './features/ProviderVisitItem'
import NurseVisit from './features/NurseVisit'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/visit'>
				<NurseVisit />
			</PageRoute>
			<PageRoute path='/provider/visit/:id'>
				<ProviderVisitItem />
			</PageRoute>
			<PageRoute path='/dashboard/Provider'>
				<DashboardProvider />
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
