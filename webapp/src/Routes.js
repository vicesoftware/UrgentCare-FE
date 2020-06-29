import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import NurseVisitArchive from './features/NurseVisitArchive'
import Settings from './features/Settings/Settings'
import NurseVisitItem from './features/NurseVisitItem'
export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/settings'>
				<Settings />
			</PageRoute>
			<PageRoute path='/nurse/visit/:id'>
				<NurseVisitItem />
			</PageRoute>
			<PageRoute path='/nurse/visit'>
				<NurseVisitArchive />
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
