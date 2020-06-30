import React from 'react'
import { Card, Button } from 'react-bootstrap'
import classNames from 'classnames'
import { PROVIDER_VISIT_ITEM_STATUS } from './providerVisitItem.constants'
export default function RightPanel({ status }) {
	return (
		<>
			{status === PROVIDER_VISIT_ITEM_STATUS.STATUS_IN_PROGRESS ? (
				<>
					<Button
						className='btn btn-primary-custom mb-2 btn-block'
						variant='danger'
					>
						End Visit
					</Button>
					<Button
						className='btn btn-primary-custom mb-30 btn-block'
						variant='warning'
					>
						Release Visit
					</Button>
				</>
			) : (
				<>
					<Button
						className='btn btn-primary-custom mb-2 btn-block'
						variant='warning'
					>
						Edit Discharge Note
					</Button>
					<Button className='btn btn-primary-custom mb-30 btn-block'>
						Email Discharge Note
					</Button>
					<Button className='btn btn-danger mb-30 btn-block'>
						Download Discharge Note
					</Button>
				</>
			)}

			<Card className='border-0 shadow-sm mb-30'>
				<Card.Body className='px-20 py-15'>
					<Card.Text className='d-flex f-14'>
						<div className='flex-fill'>
							<strong className='opacity-50'>Visit Status</strong>
						</div>
						<div className='flex-fill'>
							<span
								className={classNames(
									'status-sign d-inline-block rounded-circle mr-2'
								)}
							></span>
							<span>{status}</span>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}
