import { createSlice } from '@reduxjs/toolkit'
import * as asyncActions from './nurseVisitsArchive.asyncActions'

const initialState = {
	nurseVisits: [],
}
const slice = createSlice({
	name: 'nurseVisitsArchive',
	initialState,

	extraReducers: {
		[asyncActions.fetchNurseVisits.fulfilled]: (state, action) => {
			state.nurseVisits = action.payload
		},
	},
})
export default slice
export const { name, actions, reducer } = slice
