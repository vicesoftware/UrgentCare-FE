import { combineReducers } from 'redux'
import * as busyIndicator from './widgets/busyIndicator'
import * as modal from './widgets/modal'
import * as pendingRequest from './infrastructure/pendingRequest'
import * as notificationPopup from './infrastructure/notificationPopup'
import * as httpCache from './infrastructure/httpCache'
import * as NurseVisit from './features/NurseVisit'
import * as VisitsArchive from './features/VisitsArchive'

export default combineReducers({
	[busyIndicator.name]: busyIndicator.reducer,
	[modal.name]: modal.reducer,
	[pendingRequest.name]: pendingRequest.reducer,
	[notificationPopup.name]: notificationPopup.reducer,
	[httpCache.name]: httpCache.reducer,
	[NurseVisit.name]: NurseVisit.reducer,
	[VisitsArchive.name]: VisitsArchive.reducer,
})
