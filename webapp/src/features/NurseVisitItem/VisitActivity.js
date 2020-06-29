import React from 'react'
import { Col, Card, ListGroup } from 'react-bootstrap'
import './NurseVisitItem.css'

const VisitActivity = () => {
	var date = new Date()
	var fullTime = date.toLocaleString('en-US', {
		hour: 'numeric',
		minute: 'numeric',
		hour12: true,
	})

	const mockActivity = [
		{
			time: fullTime,
			activity: 'Provider Perscribed Tylenol',
		},
		{
			time: fullTime,
			activity: 'Visit Resumed by Nurse',
		},
		{
			time: fullTime,
			activity: 'Visit Paused by Nurse',
		},
		{
			time: fullTime,
			activity: 'Test Added by Provider',
		},
		{
			time: fullTime,
			activity: '1 Visit Started',
		},
	]
	return (
		<Card className='shadow-sm border-0 mb-30'>
			<Card.Body className='p-20'>
				<Card.Title className='font-weight-bold gotham lh-25 d-block mb-10 f-18'>
					Visit Activity
				</Card.Title>
				<ListGroup variant='flush' as='ul'>
					{mockActivity.map((each) => (
						<ListGroup.Item
							key={each.activity}
							as='li'
							className='border-0 p-0 row no-gutters f-14 lh-25 mb-1'
						>
							<Col md={3}>
								<strong className='opacity-50'>{each.time}</strong>
							</Col>
							<Col md={9}>
								<span> {each.activity}</span>
							</Col>
						</ListGroup.Item>
					))}
				</ListGroup>
			</Card.Body>
		</Card>
	)
}

export default VisitActivity
