import { createSlice } from '@reduxjs/toolkit'
const initialState = {
	selectedVisitId: '',
	selectedProviderDashboardModal: null,
}
const slice = createSlice({
	name: 'providerdashboard',
	initialState,
	reducers: {
		saveSelectedVisitId(state, action) {
			state.selectedVisitId = action.payload
		},
		setSelectedProviderDashboardModal(state, action) {
			state.selectedProviderDashboardModal = action.payload
		},
	},
	extraReducers: {},
})
export default slice
export const { name, actions, reducer } = slice
