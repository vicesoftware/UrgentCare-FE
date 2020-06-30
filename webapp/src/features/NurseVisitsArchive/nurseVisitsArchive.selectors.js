import slice from './nurseVisitsArchive.slice'

export const selectSlice = (state) => state[slice.name]
export const selectNurseVisits = (state) => selectSlice(state).nurseVisits
