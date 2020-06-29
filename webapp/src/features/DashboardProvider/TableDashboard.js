import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from './dashboardProvider.slice'
import { selectModal } from './dashboardProvider.selector'
import { DASHBOARD_PROVIDER_MODAL } from '../DashboardProviderModal/dashboardProvider.constants'
import getDashboardProviderModal from '../DashboardProviderModal/index'
import Button from 'react-bootstrap/Button'
import Table from '../../widgets/Table'
const { saveSelectedVisitId, setSelectedModal } = actions

const TableDashboard = () => {
	const selectedModal = useSelector(selectModal)

	const dispatch = useDispatch()

	const mockDetails = [
		{
			patientName: 'Cody Miles',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'Complete',
			id: 'aaaa-bbbb-cccc-0001',
		},
		{
			patientName: 'Johnny Walker	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'In Progress',
			id: 'aaaa-bbbb-cccc-0002',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'In Progress',
			id: 'aaaa-bbbb-cccc-0003',
		},
		{
			patientName: 'Sarah Daniels	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'Complete',
			id: 'aaaa-bbbb-cccc-0004',
		},
		{
			patientName: 'Johnny Walker	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'Complete',
			id: 'aaaa-bbbb-cccc-0005',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'In Progress',
			id: 'aaaa-bbbb-cccc-0006',
		},
		{
			patientName: 'Sarah Daniels	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'Complete',
			id: 'aaaa-bbbb-cccc-0007',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'In Progress',
			id: 'aaaa-bbbb-cccc-0008',
		},
		{
			patientName: 'Jesse Pinkman	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'Complete',
			id: 'aaaa-bbbb-cccc-0009',
		},
		{
			patientName: 'Johnny Walker	',
			campus: 'GISD',
			state: 'Texas',
			visitReason: 'Headache',
			language: 'English',
			totalTime: '00:01:21',
			status: 'In Progress',
			id: 'aaaa-bbbb-cccc-0010',
		},
	]
	const statusFormatter = (status) => (
		<Button
			variant={status === 'In Progress' ? 'outline-danger' : 'outline-success'}
			className='f-14 font-weight-bold btn-sm ml-md-auto mr-20'
		>
			{status}
		</Button>
	)

	const viewFormatter = (id) => {
		return (
			<Button
				id='viewButton'
				size='md'
				className='font-weight-normal btn-light align-right'
				onClick={() => {
					dispatch(saveSelectedVisitId(id))
					dispatch(
						setSelectedModal(DASHBOARD_PROVIDER_MODAL.CANCEL_CLAIM_REQUEST)
					)
				}}
			>
				View
			</Button>
		)
	}

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
			text: 'Visit Status',
			formatter: statusFormatter,
			sort: true,
		},
		{
			dataField: 'id',
			text: '',
			formatter: viewFormatter,
			classes: 'align-item-right',
		},
	]

	return (
		<>
			{selectedModal && getDashboardProviderModal(selectedModal)}
			<div className='border-4'>
				<Table keyField='id' columns={columns} data={mockDetails} />
			</div>
		</>
	)
}

export default TableDashboard
