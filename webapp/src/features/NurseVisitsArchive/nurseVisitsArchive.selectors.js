import slice from './nurseVisitsArchive.slice'

// TODO return a default value
export const selectSlice = (state) => state[slice.name]
export const selectNurseVisits = (state) => selectSlice(state).patientDetails
