import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Table from '../../widgets/Table'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react'
import { fetchDetails } from './visitArchives.asyncActions'
import { selectPatientDetails } from './visitArchives.selector'

const PatientDetailsTable = () => {
	const history = useHistory()

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchDetails())
	})

	const patientDetails = useSelector(selectPatientDetails)

	const completeButton = () => (
		<Button size='md' variant='outline-success f-14 font-weight-bold'>
			Complete
		</Button>
	)

	const viewButton = (id) => (
		<Button
			id='viewButton'
			size='md'
			className='font-weight-normal btn-light align-right'
			onClick={() => history.push(`nurseScreen/${id}`)}
		>
			View
		</Button>
	)

	const columns = [
		{ dataField: 'patientName', text: 'Patient Name', sort: true },
		{
			dataField: 'visitDate',
			text: 'Visit Date',
			sort: true,
		},
		{
			dataField: 'visitReason',
			text: 'Visit Reason',
			sort: true,
		},
		{
			dataField: 'visitStatus',
			text: 'Visit Status',
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
