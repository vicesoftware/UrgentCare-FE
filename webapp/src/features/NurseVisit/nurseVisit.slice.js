import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	selectedModal: null,
}

const slice = createSlice({
	name: 'nurseVisit',
	initialState,
	reducers: {
		setSelectedModal(state, action) {
			state.selectedModal = action.payload
		},
	},

	extraReducers: {},
})
export default slice

export const { name, actions, reducer } = slice
