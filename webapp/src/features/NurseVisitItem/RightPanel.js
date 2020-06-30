import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { NURSE_VISITS_ITEM_STATUS } from './NurseVisitItem.constants'
import classNames from 'classnames'
const RightPanel = ({ status }) => {
	const getNurseVisitRightPanel = (status) => {
		switch (status) {
			case NURSE_VISITS_ITEM_STATUS.IN_PROGRESS:
				return (
					<Button className='btn btn-danger mb-30 btn-block' variant='danger'>
						Cancel Visit Request
					</Button>
				)
			case NURSE_VISITS_ITEM_STATUS.WAITING:
				return (
					<Button className='btn btn-danger mb-30 btn-block' variant='danger'>
						End visit
					</Button>
				)
			default:
				return (
					<>
						<Button
							className='btn btn-primary-custom mb-2 btn-block'
							variant='success'
						>
							Edit Discharge Note
						</Button>
						<Button
							className='btn btn-primary-custom mb-30 btn-block'
							variant='success'
						>
							Email Discharge Note
						</Button>

						<Button className='btn btn-danger mb-30 btn-block' variant='danger'>
							Download Discharge
						</Button>
					</>
				)
		}
	}
	return (
		<Card className='border-0 shadow-sm mb-30'>
			<Card.Body className='px-20 py-15'>
				<Card.Text className='d-flex f-14'>
					<div className='flex-fill'>
						{getNurseVisitRightPanel(status)}

						<div className='d-flex f-14'>
							<div className='flex-fill'>
								<strong className='opacity-50'>Visit Status</strong>
							</div>
							<div className='flex-fill'>
								<span
									className={classNames(
										'status-sign d-inline-block rounded-circle mr-2',
										{
											'bg-danger': status === NURSE_VISITS_ITEM_STATUS.WAITING,
											'bg-success':
												status === NURSE_VISITS_ITEM_STATUS.IN_PROGRESS,
											'bg-primary':
												status === NURSE_VISITS_ITEM_STATUS.COMPLETE,
										}
									)}
								></span>

								<span>{status}</span>
							</div>
						</div>
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
export default RightPanel
