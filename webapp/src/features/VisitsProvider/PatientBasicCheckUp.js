import React from 'react'
import { Col, Card, ListGroup, Button } from 'react-bootstrap'

const PatientBasicCheckUp = () => {
	const mockPatientData = [
		{
			title: 'Date of Birth',
			descripition: 'April 5, 1988',
		},
		{
			title: 'Biological Sex',
			descripition: 'Male',
		},
		{
			title: 'Height',
			descripition: '5’ 9”',
		},
		{
			title: 'Weight',
			descripition: '170 lbs',
		},
		{
			title: 'Reason for Visit',
			descripition: 'Nausea',
		},
	]

	const mockCheckUpData = [
		{
			vitalSign: 'Body Temprature',
			value: 98.5 + 'F',
		},
		{
			vitalSign: 'Pulse rate',
			value: 70 + 'BPM',
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
	return (
		<Card className='shadow-sm border-0 mb-30'>
			<Card.Body className='p-20'>
				<Card.Title className='font-weight-bold gotham lh-25 d-block mb-10 f-18'>
					Cody Miles
				</Card.Title>
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
				<div className='d-flex align-items-center mb-10'>
					<Card.Title className='font-weight-bold lh-25 mb-0 f-18'>
						Patient Vital Signs
					</Card.Title>
					<Button
						className='btn-link btn f-14 font-weight-bold ml-auto btn-auto p-0'
						variant='btn-link'
					>
						Edit
					</Button>
				</div>
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
			</Card.Body>
		</Card>
	)
}

export default PatientBasicCheckUp
