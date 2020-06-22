import React from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import Table from '../../widgets/Table'

const PatientDetailsTable = () => {
	const history = useHistory()

	const mockDetails = [
		{
			id: 1,
			patientName: 'Cody Miles',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 2,
			patientName: 'Johnny Walker	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 3,
			patientName: 'Jesse Pinkman	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 4,
			patientName: 'Sarah Daniels	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 5,
			patientName: 'Johnny Walker	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 6,
			patientName: 'Jesse Pinkman	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 7,
			patientName: 'Sarah Daniels	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 8,
			patientName: 'Johnny Walker	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 9,
			patientName: 'Jesse Pinkman	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
		{
			id: 10,
			patientName: 'Jesse Pinkman	',
			visitDate: 'May 26, 2020',
			visitReason: 'Nausea',
		},
	]

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
			<Table keyField='id' columns={columns} data={mockDetails} />
		</div>
	)
}

export default PatientDetailsTable
