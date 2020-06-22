import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actions } from '../NurseVisit/nurseVisit.slice'
import { selectModal } from '../NurseVisit/nurseVisit.selectors'
import { NURSE_VISIT_MODAL } from '../NurseVisitModal/nurseVisit.constants'
import { Card, Button } from 'react-bootstrap'
import getNurseVisitModal from '../NurseVisitModal/index'
const { setSelectedModal } = actions

const VisitStatus = ({ email, download, cancel, status }) => {
	const selectedModal = useSelector(selectModal)
	const dispatch = useDispatch()

	return (
		<>
			{selectedModal && getNurseVisitModal(selectedModal)}

			{email && (
				<Button className='btn btn-primary-custom mb-2 btn-block'>
					{email}
				</Button>
			)}
			{download && (
				<Button className='btn btn-primary-custom mb-30 btn-block'>
					{download}
				</Button>
			)}
			{cancel && (
				<Button
					className='btn btn-danger mb-30 btn-block'
					onClick={() => {
						dispatch(setSelectedModal(NURSE_VISIT_MODAL.CANCEL_VISIT_REQUEST))
					}}
				>
					{cancel}
				</Button>
			)}
			<Card className='border-0 shadow-sm mb-30'>
				<Card.Body className='px-20 py-15'>
					<Card.Text className='d-flex f-14'>
						<div className='flex-fill'>
							<strong className='opacity-50'>Visit Status</strong>
						</div>
						<div className='flex-fill'>
							<span
								className={
									(cancel ? 'bg-warning' : 'bg-primary') +
									' status-sign d-inline-block rounded-circle mr-2'
								}
							></span>
							<span>{status}</span>
						</div>
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default VisitStatus
