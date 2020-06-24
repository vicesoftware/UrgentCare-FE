import { createSlice } from '@reduxjs/toolkit'
// import * as asyncActions from './userContext.asynActions'
const initialState = {
	isAuthenticated: null,
	user: {},
	jwtToken: '',
	isLoadingToken: false,
}
const slice = createSlice({
	name: 'userContext',
	initialState,
	reducers: {
		setIsAuthenticated(state, action) {
			state.isAuthenticated = action.payload
		},
		setUser(state, action) {
			state.user = action.payload
		},
		setJwtToken(state, action) {
			state.jwtToken = action.payload
		},
	},
})

export default slice

export const { name, actions, reducer } = slice
