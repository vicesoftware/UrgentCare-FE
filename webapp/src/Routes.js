import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Page from './widgets/Page/Page'
import VisitsArchive from './features/VisitsArchive'
import VisitsProvider from './features/VisitsProvider'
import NurseVisit from './features/NurseVisit/NurseVisit'

export default function Routes() {
	return (
		<Switch>
			<PageRoute path='/nurseVisit'>
				<NurseVisit />
			</PageRoute>
			<PageRoute path='/nurseScreen/:patientDetails'>
				<VisitsProvider />
			</PageRoute>
			<PageRoute path='/nurseScreen'>
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
