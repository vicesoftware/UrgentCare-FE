import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Table from '../../widgets/Table'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchDetails } from './visitsArchives.asyncActions'
import { selectPatientDetails } from './visitsArchives.selector'

const PatientDetailsTable = () => {
	const history = useHistory()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDetails())
	})

	const patientDetails = useSelector(selectPatientDetails)

	const completeButton = (status) => {
		switch (status) {
			case 'IN_PROGRESS':
				return (
					<Button
						size='md'
						className='f-14 font-weight-bold'
						variant='outline-danger'
					>
						In Progress
					</Button>
				)
			case 'IN_WAITING':
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

	const viewButton = (id) => (
		<Button
			id='viewButton'
			size='md'
			className='font-weight-normal btn-light align-right'
			onClick={() => history.push(`/nurse/visit/${id}`)}
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
			dataField: 'status',
			text: 'status',
			formatter: completeButton,
			sort: true,
		},

		{
			dataField: 'id',
			text: '',
			formatter: viewButton,
			classes: 'align-item-right',
		},
	]

	return (
		<div className='border-4'>
			<Table keyField='id' columns={columns} data={patientDetails} />
		</div>
	)
}

export default PatientDetailsTable
