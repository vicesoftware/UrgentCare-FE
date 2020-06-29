import NurseVisitsArchive from './NurseVisitsArchive'
import * as selectors from './nurseVisitsArchive.selectors'
import slice from './nurseVisitsArchive.slice'
import * as asyncActions from './nurseVisitsArchive.asyncActions'
export const { name, reducer } = slice
export const { fetchNurseVisits } = asyncActions
export const { selectNurseVisits } = selectors

export default NurseVisitsArchive
