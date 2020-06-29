import NurseVisitArchive from './NurseVisitArchive'
import * as selectors from './visitsArchives.selector'
import slice from './visitsArchives.slice'
import * as asyncActions from './visitsArchives.asyncActions'
export const {
	name,

	reducer,
} = slice
export const { fetchDetails } = asyncActions
export const { selectPatientDetails } = selectors

export default NurseVisitArchive
