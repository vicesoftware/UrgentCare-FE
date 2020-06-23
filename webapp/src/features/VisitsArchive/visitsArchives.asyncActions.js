import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

const mockDetails = [
	{
		patientName: 'Cody Miles',
		visitDate: 'May 26, 2020',
		visitReason: 'Nausea',
	},
	{
		patientName: 'Johnny Walker	',
		visitDate: 'May 26, 2020',
		visitReason: 'Nausea',
	},
	{
		patientName: 'Jesse Pinkman	',
		visitDate: 'May 26, 2020',
		visitReason: 'Nausea',
	},
	{
		patientName: 'Sarah Daniels	',
		visitDate: 'May 26, 2020',
		visitReason: 'Nausea',
	},
	{
		patientName: 'Johnny Walker	',
		visitDate: 'May 26, 2020',
		visitReason: 'Nausea',
	},
	{
		patientName: 'Jesse Pinkman	',
		visitDate: 'May 26, 2020',
		visitReason: 'Nausea',
	},
]

export const fetchDetails = createAsyncThunk(
	'visitArchives/fetchDetails',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: `api/analytics/`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load data for cards. Please try again later.',
			stubSuccess: mockDetails,
			...thunkArgs,
		})
)
