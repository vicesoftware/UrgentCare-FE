import NurseVisit from './NurseVisit'
import * as selectors from './nurseVisit.selectors'
import slice from './nurseVisit.slice'
export const { name, reducer } = slice
export const { selectModal } = selectors
export default NurseVisit
