import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Modal, { hideModal, showModal } from '../../widgets/modal'
import { actions } from '../DashboardProvider/dashboardProvider.slice'
import { Button, Col, ListGroup } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { selectVisitId } from '../DashboardProvider/dashboardProvider.selector'
const { setSelectedModal } = actions

const DashboardProviderModal = () => {
	const history = useHistory()
	const id = useSelector(selectVisitId)
	const dispatch = useDispatch()
	const resetModal = () => dispatch(setSelectedModal(null))

	useEffect(() => {
		dispatch(showModal())
	})

	const handleClose = () => {
		dispatch(hideModal())
		resetModal()
	}

	const mockPatientData = [
		{
			title: 'Date of Birth',
			descripition: 'April 5, 1988',
		},
		{
			title: 'Birth Sex',
			descripition: 'Male',
		},
		{
			title: 'Allergies',
			descripition: 'Peanuts Seasonal',
		},
		{
			title: 'Known Medications',
			descripition: 'Flonase',
		},
		{
			title: 'Known Conditions',
			descripition: 'N/A',
		},
		{
			title: 'Reason for Visit',
			descripition: 'Nausea',
		},
		{
			title: 'Additional Notes',
			descripition: 'N/A',
		},
	]

	const mockCheckUpData = [
		{
			vitalSign: 'Body Temprature',
			value: 98.5 + 'F',
		},
		{
			vitalSign: 'Weight',
			value: 145 + 'LBS/' + 65.7 + 'KG',
		},
		{
			vitalSign: 'Pulse rate',
			value: 70 + 'BPM',
		},
		{
			vitalSign: 'Pulse OX',
			value: 95 + '%',
		},
		{
			vitalSign: 'Respiration Rate',
			value: 15,
		},
		{
			vitalSign: 'Blood Pressure',
			value: 120 / 80,
		},
	]

	const footer = (
		<>
			<Button
				type='button'
				variant='success'
				onClick={() => history.push(`/provider/visit/${id}`)}
			>
				Claim Visit
			</Button>

			<Button
				type='button'
				variant='light'
				class='btn btn-light btn-small'
				data-dismiss='modal'
				onClick={handleClose}
			>
				Cancel
			</Button>
		</>
	)
	return (
		<Modal title='Visit Details' reset={resetModal} footer={footer}>
			<div className='row mb-30'>
				<div className='col-md-6'>
					<h4 className='font-weight-bold card-title gotham lh-25 d-block mb-1 f-16'>
						Cody Miles
					</h4>
					<ListGroup variant='flush' as='ul' className='mb-30'>
						{mockPatientData.map((each) => (
							<ListGroup.Item
								key={each.descripition}
								as='li'
								className='border-0 p-0 row no-gutters f-14 lh-25 mb-1'
							>
								<Col md={7}>
									<strong className='opacity-50'>{each.title}</strong>
								</Col>
								<Col md={5}>
									<span> {each.descripition}</span>
								</Col>
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
				<div className='col-md-6'>
					<h4 className='font-weight-bold card-title gotham lh-25 d-block mb-1 f-16'>
						Patient Vital Signs
					</h4>
					<ListGroup variant='flush' as='ul' className='mb-0'>
						{mockCheckUpData.map((each) => (
							<ListGroup.Item
								key={each.value}
								as='li'
								className='border-0 p-0 row no-gutters f-14 lh-25 mb-1'
							>
								<Col md={7}>
									<strong className='opacity-50'>{each.vitalSign}</strong>
								</Col>
								<Col md={5}>
									<span> {each.value}</span>
								</Col>
							</ListGroup.Item>
						))}
					</ListGroup>
				</div>
			</div>

			<div className='row f-14 lh-25 mb-1 align-items-center'>
				<div className='col-md-3'>
					<strong className=''>Additional Notes:</strong>
				</div>
				<div className='col-md-9 pl-md-4'>
					<span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et
						mauris et magna consequat hendrerit vitae sed tellus. Quisque
						imperdiet euismod scelerisque. Nulla vulputate magna porta massa
						lobortis,
					</span>
				</div>
			</div>
		</Modal>
	)
}

export default DashboardProviderModal
