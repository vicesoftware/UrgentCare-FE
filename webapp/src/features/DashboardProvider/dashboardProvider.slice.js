import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	selectedVisitId: '',
	selectedModal: null,
}
const slice = createSlice({
	name: 'dashboardProvider',
	initialState,
	reducers: {
		saveSelectedVisitId(state, action) {
			state.selectedVisitId = action.payload
		},
		setSelectedModal(state, action) {
			state.selectedModal = action.payload
		},
	},
	extraReducers: {},
})
export default slice
export const { name, actions, reducer } = slice
