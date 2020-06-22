import slice from './nurseVisit.slice'

export const selectSlice = (state) => state[slice.name]

export const selectModal = (state) => selectSlice(state).selectedModal
