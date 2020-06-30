import { createAsyncThunk } from '@reduxjs/toolkit'
import doAsync from '../../infrastructure/doAsync'

const nurseMockVisits = [
	{
		patientName: 'Jesse Pinkman	',
		campus: 'GISD',
		state: 'Texas',
		visitReason: 'Stomach Ache',
		language: 'English',
		totalTime: '00:01:21',
		status: 'Complete',
		id: '6ffc-ed77-94fa',
	},
	{
		patientName: 'Johnny Walker	',
		campus: 'GISD',
		state: 'Texas',
		visitReason: 'Headache',
		language: 'English',
		totalTime: '00:01:21',
		id: '6ffc-ed77-94fa',
	},
	{
		patientName: 'Jesse Pinkman	',
		campus: 'GISD',
		state: 'Texas',
		visitReason: 'Stomach Ache',
		language: 'English',
		totalTime: '00:01:21',
		id: '6ffc-ed77-94fa',
	},
	{
		patientName: 'Jesse Miles	',
		campus: 'GISD',
		state: 'Texas',
		visitReason: 'Head Ache',
		language: 'English',
		totalTime: '00:01:21',
		status: 'Waiting',
		id: 'aa95-ffff-5555',
	},
	{
		patientName: 'Jesse Miles	',
		campus: 'GISD',
		state: 'Texas',
		visitReason: 'Head Ache',
		language: 'English',
		totalTime: '00:01:21',
		status: 'In Progress',
		id: 'afd2-223r-67rt',
	},
]

export const fetchNurseVisits = createAsyncThunk(
	'nurseVisits/fetch',
	async ({ useCaching, noBusySpinner } = {}, thunkArgs) =>
		await doAsync({
			url: `api/nurse/visits`,
			useCaching,
			noBusySpinner,
			errorMessage: 'Unable to load nurse visits. Please try again later.',
			stubSuccess: nurseMockVisits,
			...thunkArgs,
		})
)
