import React from 'react'
import DashboardProviderModal from './DashboardProviderModal'
import { DASHBOARD_PROVIDER_MODAL } from './dashboardProvider.constants'

const getDashboardProviderModal = (modalName) => {
	switch (modalName) {
		case DASHBOARD_PROVIDER_MODAL.CANCEL_CLAIM_REQUEST:
			return <DashboardProviderModal />

		default:
			return null
	}
}

export default getDashboardProviderModal
