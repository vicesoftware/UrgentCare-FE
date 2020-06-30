import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Modal, { showModal } from '../../widgets/modal'
import Button from 'react-bootstrap/Button'

const RequestVisitModal = ({ onClose }) => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(showModal())
	})

	const footer = (
		<>
			<Button className='btn-lg btn-primary-custom' variant='primary'>
				Next
			</Button>
			<Button className='btn-small' variant='light' onClick={onClose}>
				Cancel
			</Button>
		</>
	)
	return (
		<Modal title='Request Visit' reset={onClose} footer={footer}>
			<div className='wizard d-flex text-center mt-3 mb-10'>
				<div className='step flex-fill position-relative active'>
					<h5 className='f-14 font-weight-bold'>Confirm Campus</h5>
					<span className='d-inline-flex align-items-center justify-content-center position-relative rounded-circle f-12'>
						1
					</span>
				</div>
				<div className='step flex-fill position-relative'>
					<h5 className='f-14 font-weight-bold'>Confirm Student</h5>
					<span className='d-inline-flex align-items-center justify-content-center position-relative rounded-circle f-12'>
						2
					</span>
				</div>
				<div className='step flex-fill position-relative'>
					<h5 className='f-14 font-weight-bold'>Visit Details</h5>
					<span className='d-inline-flex align-items-center justify-content-center position-relative rounded-circle f-12'>
						3
					</span>
				</div>
			</div>
		</Modal>
	)
}

export default RequestVisitModal
