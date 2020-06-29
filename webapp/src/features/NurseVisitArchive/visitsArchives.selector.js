import slice from './visitsArchives.slice'

export const selectSlice = (state) => state[slice.name]
export const selectPatientDetails = (state) => selectSlice(state).patientDetails
