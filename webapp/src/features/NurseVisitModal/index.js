import React from 'react'
import CancelVisitRequestModal from './CancelVisitRequestModal'

import { NURSE_VISIT_MODAL } from './nurseVisit.constants'

const getNurseVisitModal = (modalName) => {
	switch (modalName) {
		case NURSE_VISIT_MODAL.CANCEL_VISIT_REQUEST:
			return <CancelVisitRequestModal />

		default:
			return null
	}
}

export default getNurseVisitModal
