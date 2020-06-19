import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Image from 'react-bootstrap/Image'
import { useSelector, useDispatch } from 'react-redux'
import { selectShowModal } from './modal.selectors'
import { actions } from './modal.slice'
import Icons from '../../assets/icons'
import './Modal.css'

const { hideModal } = actions

export default function UrgentCareModal({
	children,
	header,
	footer,
	title,
	reset,
	size = 'lg',
}) {
	const show = useSelector(selectShowModal)
	const dispatch = useDispatch()

	const handleClose = () => {
		dispatch(hideModal())
		if (reset) reset()
	}
	return (
		<Modal
			show={show}
			onHide={handleClose}
			dialogClassName='modal-dialog-centered'
			size={size}
		>
			<Modal.Header className='border-0'>
				{header || (
					<Modal.Title className='f-16 font-weight-bold lh-30'>
						{title}
					</Modal.Title>
				)}
				<button
					className='close p-0 d-flex align-items-center'
					onClick={handleClose}
				>
					<span className='font-weight-bold f-14  mr-2'>Cancel</span>
					<Image src={Icons.closeIcon} alt='close' width='25' />
				</button>
			</Modal.Header>
			<Modal.Body className='py-0'>{children}</Modal.Body>
			<Modal.Footer className='justify-content-start border-0'>
				{footer}
			</Modal.Footer>
		</Modal>
	)
}
