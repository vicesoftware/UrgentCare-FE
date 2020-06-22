import React from 'react'
import './VisitsArchive.css'
import { Button, Card, Form } from 'react-bootstrap'

export default function VisitsSearch() {
	return (
		<>
			<Card className='shadow-sm border-0 mb-25'>
				<Card.Body className='p-20'>
					<Card.Title className='font-weight-bold gotham lh-25 d-block mb-20 f-18'>
						Search Visits
					</Card.Title>
					<Form.Group className='mb-10'>
						<Form.Control
							className='search-control'
							type='text'
							placeholder='Search Patients'
							onChange={(ev) => console.log(ev.target.value)}
						/>
					</Form.Group>
					<Form.Group className='mb-10'>
						<Form.Control
							className='calender-input'
							type='text'
							placeholder='May 1, 2020 - May 26, 2020'
							onChange={(ev) => console.log(ev.target.value)}
						/>
					</Form.Group>
					<Button className='btn-primary-custom' variant='primary'>
						Search
					</Button>
				</Card.Body>
			</Card>
		</>
	)
}
