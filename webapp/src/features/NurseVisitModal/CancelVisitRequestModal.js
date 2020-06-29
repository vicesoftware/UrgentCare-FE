import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from '../NurseVisit/nurseVisit.slice'
import { Button } from 'react-bootstrap'
import Modal, { hideModal, showModal } from '../../widgets/modal'
const { setSelectedModal } = actions

const CancelVisitRequestModal = () => {
	const dispatch = useDispatch()

	const resetModal = () => dispatch(setSelectedModal(null))

	useEffect(() => {
		dispatch(showModal())
	})

	const handleClose = () => {
		dispatch(hideModal())
		resetModal()
	}

	const footer = (
		<>
			<Button className='btn btn-warning btn-lg' onClick={handleClose}>
				Cancel Visit
			</Button>

			<Button className='btn btn-light btn-small' onClick={handleClose}>
				Cancel
			</Button>
		</>
	)
	return (
		<>
			<Modal
				title='Are You Sure You Want to Cancel this Visit?'
				reset={resetModal}
				footer={footer}
				size='sm'
			>
				<p className='f-14 mb-30'>This action cannot be undone.</p>
			</Modal>
		</>
	)
}
export default CancelVisitRequestModal
