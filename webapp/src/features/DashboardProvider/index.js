import DashboardProvider from './DashboardProvider'
import * as selectors from './dashboardProvider.selector'
import slice from './dashboardProvider.slice'
export const { name, actions, reducer } = slice
export const { selectVisitId } = selectors
export const { selectModal } = selectors
export default DashboardProvider
