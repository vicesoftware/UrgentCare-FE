import ProviderDashboard from './ProviderDashboard'
import * as selectors from './providerDashboard.selector'
import slice from './providerDashboard.slice'
export const { name, actions, reducer } = slice
export const {
	selectSelectedVisitId,
	selectSelectedProviderDashboardModal,
} = selectors
export default ProviderDashboard
