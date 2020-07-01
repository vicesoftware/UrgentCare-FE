import React from 'react'
import ClaimVisitRequestModel from './ClaimVisitRequestModel'
import { PROVIDER_DASHBOARD_MODEL } from './providerDashboardModel.constants'

const getProviderDashboardModal = (modalName) => {
	switch (modalName) {
		case PROVIDER_DASHBOARD_MODEL.CLAIM_VISIT_REQUEST:
			return <ClaimVisitRequestModel />

		default:
			return null
	}
}

export default getProviderDashboardModal
