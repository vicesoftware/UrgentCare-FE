import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Table from '../../widgets/Table'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchNurseVisits } from './nurseVisitsArchive.asyncActions'
import { selectNurseVisits } from './nurseVisitsArchive.selectors'
import { NURSE_VISITS_STATUS } from './nurseVisitsArchive.constants'

const NurseVisitsTable = () => {
	const history = useHistory()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchNurseVisits())
	})

	const nurseVisits = useSelector(selectNurseVisits)

	const visitsStatusFormatter = (status) => {
		switch (status) {
			case NURSE_VISITS_STATUS.IN_PROGRESS:
				return (
					<Button
						size='md'
						className='f-14 font-weight-bold'
						variant='outline-danger'
					>
						In Progress
					</Button>
				)
			case NURSE_VISITS_STATUS.WAITING:
				return (
					<Button
						size='md'
						className='f-14 font-weight-bold'
						variant='outline-warning'
					>
						Waiting
					</Button>
				)
			default:
				return (
					<Button
						size='md'
						className='f-14 font-weight-bold'
						variant='outline-success'
					>
						Complete
					</Button>
				)
		}
	}

	const viewButtonFormatter = (id) => (
		<Button
			id='viewButton'
			size='md'
			className='font-weight-normal btn-light align-right'
			onClick={() => history.push(`/nurse/visits/${id}`)}
		>
			View
		</Button>
	)

	const columns = [
		{ dataField: 'patientName', text: 'Patient Name', sort: true },

		{
			dataField: 'Campus',
			text: 'Campus',
			sort: true,
		},
		{
			dataField: 'State',
			text: 'State',
			sort: true,
		},

		{
			dataField: 'visitReason',
			text: 'Visit Reason',
			sort: true,
		},
		{
			dataField: 'Language',
			text: 'Language',
			sort: true,
		},
		{
			dataField: 'TotalTime',
			text: 'Total Time',

			sort: true,
		},
		{
			dataField: 'status', // TODO all other table headings are in upperCase
			text: 'status',
			formatter: visitsStatusFormatter,
			sort: true,
		},

		{
			dataField: 'id',
			text: '',
			formatter: viewButtonFormatter,
			classes: 'align-item-right',
		},
	]

	return (
		<div className='border-4'>
			<Table keyField='id' columns={columns} data={nurseVisits} />
		</div>
	)
}

export default NurseVisitsTable
