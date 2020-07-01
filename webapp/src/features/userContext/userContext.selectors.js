import slice from './userContext.slice'

export const selectSlice = (state) => state[slice.name]

export const selectUserContext = (state) => selectSlice(state)

export const selectIsAuthenticated = (state) =>
	selectSlice(state).isAuthenticated
export const selectUser = (state) => selectSlice(state).user

export const getJwtToken = (state) => selectSlice(state).jwtToken
