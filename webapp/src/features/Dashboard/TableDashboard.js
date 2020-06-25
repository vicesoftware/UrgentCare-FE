import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Table from '../../widgets/Table'
import { useHistory } from 'react-router-dom'

const TableDashboard = () => {
	const history = useHistory()

	const mockDetails = [
		{
			patientName: 'Cody Miles',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '1',
		},
		{
			patientName: 'Johnny Walker	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '2',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '3',
		},
		{
			patientName: 'Sarah Daniels	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '4',
		},
		{
			patientName: 'Johnny Walker	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '5',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '6',
		},
		{
			patientName: 'Sarah Daniels	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '7',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '8',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '9',
		},
		{
			patientName: 'Johnny Walker	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'inProgress',
			id: '10',
		},
	]
	const statusButton = (id) => (
		<Button
			size='md'
			className='f-14 font-weight-bold'
			variant='outline-warning'
			onClick={() => history.push(`provider/${id}`)}
		>
			Complete
		</Button>
	)

	const viewButton = () => (
		<Button
			id='viewButton'
			size='md'
			className='font-weight-normal btn-light align-right'
		>
			View
		</Button>
	)

	const columns = [
		{
			dataField: 'patientName',
			text: 'Patient Name',
			sort: true,
		},
		{
			dataField: 'campus',
			text: 'Campus',
			sort: true,
		},
		{
			dataField: 'state',
			text: 'State',
			sort: true,
		},
		{
			dataField: 'visitReason',
			text: 'Visit Reason',
			sort: true,
		},
		{
			dataField: 'language',
			text: 'Language',
			sort: true,
		},
		{
			dataField: 'totalTime',
			text: 'Total Time',
			sort: true,
		},
		{
			dataField: 'status',
			dataField: 'id',
			text: 'Visit Status',
			formatter: statusButton,
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

export default TableDashboard
