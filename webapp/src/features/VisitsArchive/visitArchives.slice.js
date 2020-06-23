import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './visitArchives.asyncActions'

const initialState = {
	patientDetails: [],
}

const slice = createSlice({
	name: 'visitArchives',
	initialState,

	extraReducers: {
		[asyncActions.fetchDetails.fulfilled]: (state, action) => {
			state.patientDetails = action.payload
		},
	},
})
export default slice
export const { name, actions, reducer } = slice
