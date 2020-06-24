import * as selectors from './userContext.selectors'
import slice from './userContext.slice'

export const { name, reducer } = slice

export const {
	selectIsAuthenticated,
	selectCurrentUserHasPermissions,
	selectUserContext,
} = selectors
