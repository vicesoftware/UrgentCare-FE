import React from 'react'
import { Card, Button } from 'react-bootstrap'
const activeItem = (param) => {
	switch (param) {
		case 'IN_PROGRESS':
			return (
				<span className='status-sign bg-success d-inline-block rounded-circle mr-2'></span>
			)
		case 'IN_WAITING':
			return (
				<span className='status-sign bg-warning d-inline-block rounded-circle mr-2'></span>
			)
		default:
			return (
				<span className='status-sign bg-primary d-inline-block rounded-circle mr-2'></span>
			)
	}
}
export default function RightPanel({
	endVisit,
	releaseVisit,
	edit,
	email,
	download,
	cancel,
	status,
}) {
	return (
		<>
			{endVisit && (
				<Button
					className='btn btn-primary-custom mb-2 btn-block'
					variant='danger'
				>
					{endVisit}
				</Button>
			)}
			{releaseVisit && (
				<Button
					className='btn btn-primary-custom mb-30 btn-block'
					variant='warning'
				>
					{releaseVisit}
				</Button>
			)}
			{edit && (
				<Button
					className='btn btn-primary-custom mb-2 btn-block'
					variant='warning'
				>
					{edit}
				</Button>
			)}
			{email && (
				<Button className='btn btn-primary-custom mb-30 btn-block'>
					{email}
				</Button>
			)}
			{download && (
				<Button className='btn btn-primary-custom mb-30 btn-block'>
					{download}
				</Button>
			)}
			{cancel && (
				<Button className='btn btn-danger mb-30 btn-block'>{cancel}</Button>
			)}
			<Card className='border-0 shadow-sm mb-30'>
				<Card.Body className='px-20 py-15'>
					<Card.Text className='d-flex f-14'>
						<div className='flex-fill'>
							<strong className='opacity-50'>Visit Status</strong>
						</div>
						<div className='flex-fill'>
							{activeItem('IN_PROGRESS')}
							<span>{status}</span>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}
