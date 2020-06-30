import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import NurseVisitsArchive from './features/NurseVisitsArchive'
import Settings from './features/Settings'
import NurseVisitItem from './features/NurseVisitItem'
import DashboardProvider from './features/DashboardProvider'
import ProviderVisitItem from './features/ProviderVisitItem'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/provider/visit/:id'>
				<ProviderVisitItem />
			</PageRoute>
			<PageRoute path='/dashboard'>
				<DashboardProvider />
			</PageRoute>
			<PageRoute path='/settings'>
				<Settings />
			</PageRoute>
			<PageRoute path='/nurse/visits/:id'>
				<NurseVisitItem />
			</PageRoute>
			<PageRoute path='/nurse/visits'>
				<NurseVisitsArchive />
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
