import slice from './visitArchives.slice'

export const selectSlice = (state) => state[slice.name]
export const selectPatientDetails = (state) => selectSlice(state).patientDetails
