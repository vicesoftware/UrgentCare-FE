import VisitArchive from './VisitsArchive'
import * as selectors from './visitArchives.selector'
import slice from './visitArchives.slice'
import * as asyncActions from './visitArchives.asyncActions'
export const {
	name,

	reducer,
} = slice
export const { fetchDetails } = asyncActions
export const { selectPatientDetails } = selectors

export default VisitArchive
