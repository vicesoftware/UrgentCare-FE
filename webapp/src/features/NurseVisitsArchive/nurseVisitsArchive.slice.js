import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './nurseVisitsArchive.asyncActions'

const initialState = {
	patientDetails: [],
}

const slice = createSlice({
	name: 'nurseVisitsArchives',
	initialState,

	extraReducers: {
		[asyncActions.fetchNurseVisits.fulfilled]: (state, action) => {
			state.patientDetails = action.payload
		},
	},
})
export default slice
export const { name, actions, reducer } = slice
