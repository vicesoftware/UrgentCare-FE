import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { NURSE_VISITS_ITEM_STATUS } from './NurseVisitItem.constants'
import classNames from 'classnames'
const RightPanel = ({ status }) => {
<<<<<<< HEAD
	const getNurseVisitRightPanel = (status) => {
=======
	const NurseVisitRightPanel = (status) => {
>>>>>>> 071d8209bc3635c7f02e5f5fbf9db007e811be72
		switch (status) {
			case NURSE_VISITS_ITEM_STATUS.IN_PROGRESS:
				return (
					<Button className='btn btn-danger mb-30 btn-block' variant='danger'>
						cancel visit request
					</Button>
				)
<<<<<<< HEAD
=======

>>>>>>> 071d8209bc3635c7f02e5f5fbf9db007e811be72
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
<<<<<<< HEAD
=======

>>>>>>> 071d8209bc3635c7f02e5f5fbf9db007e811be72
	return (
		<Card className='border-0 shadow-sm mb-30'>
			<Card.Body className='px-20 py-15'>
				<Card.Text className='d-flex f-14'>
					<div className='flex-fill'>
<<<<<<< HEAD
						{getNurseVisitRightPanel()}
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
=======
						{NurseVisitRightPanel()}

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
>>>>>>> 071d8209bc3635c7f02e5f5fbf9db007e811be72
						</div>
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}
export default RightPanel
