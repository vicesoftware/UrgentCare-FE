import slice from './dashboardProvider.slice'

export const selectSlice = (state) => state[slice.name]
export const selectVisitId = (state) => selectSlice(state).selectedVisitId
export const selectModal = (state) => selectSlice(state).selectedModal
