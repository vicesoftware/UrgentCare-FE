import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import VisitsArchive from './features/VisitsArchive'
export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/'>
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
