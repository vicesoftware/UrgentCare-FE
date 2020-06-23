import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import VisitsArchive from './features/VisitsArchive'
import VisitsProvider from './features/VisitsProvider'
import NurseVisit from './features/NurseVisit/NurseVisit'
import Settings from './features/Settings/Settings'

export default function Routes() {
	return (
		<Switch>
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
