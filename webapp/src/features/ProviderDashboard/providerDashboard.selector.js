import slice from './providerDashboard.slice'

export const selectSlice = (state) => state[slice.name]
export const selectselectedVisitId = (state) =>
	selectSlice(state).selectedVisitId
export const selectSelectedProviderDashboardModal = (state) =>
	selectSlice(state).selectedProviderDashboardModal
