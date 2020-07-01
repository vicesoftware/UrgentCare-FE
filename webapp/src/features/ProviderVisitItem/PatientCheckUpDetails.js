import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'
const PatientCheckUpDetails = ({ Edit }) => {
	const mockProviderVisitDetails = [
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
	const mockProviderVisitCheckUpData = [
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
	return (
		<Card className='shadow-sm border-0 mb-30'>
			<Card.Body className='p-20'>
				<div className='d-flex align-items-center mb-10'>
					<Card.Title className='font-weight-bold gotham lh-25 d-block mb-10 f-18'>
						Cody Miles
					</Card.Title>
					{Edit}
				</div>
				<ListGroup variant='flush' as='ul' className='mb-30'>
					{mockProviderVisitDetails.map((each) => (
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
					{Edit}
				</div>
				<ListGroup variant='flush' as='ul' className='mb-0'>
					{mockProviderVisitCheckUpData.map((each) => (
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
export default PatientCheckUpDetails
