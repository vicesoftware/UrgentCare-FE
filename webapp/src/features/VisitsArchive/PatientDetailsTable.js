import React from 'react'
import { Button } from 'react-bootstrap'
import Table from '../../widgets/Table'

export default function PatientDetailsTable() {
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

	const completeButton = () => (
		<Button size='md' variant='outline-success f-14 font-weight-bold'>
			Complete
		</Button>
	)

	const viewButton = () => (
		<Button
			id='viewButton'
			size='md'
			className='font-weight-normal btn-light align-right'
			onClick={() => console.log('button clicked')}
		>
			View
		</Button>
	)

	const columns = [
		{
			dataField: 'patientName',
			text: 'Patient Name',
		},
		{
			dataField: 'visitDate',
			text: 'Visit Date',
		},
		{
			dataField: 'visitReason',
			text: 'Visit Reason',
		},
		{
			dataField: 'visitStatus',
			text: 'Visit Status',
			formatter: completeButton,
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
