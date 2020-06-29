import React from 'react'
import NurseVisitProviderOrders from './ProviderOrder'
import NurseVisitItemProgress from './NurseVisitItemProgress'

const CenterPanelProgress = () => {
	return (
		<>
			<NurseVisitProviderOrders />
			<NurseVisitItemProgress />
		</>
	)
}
export default CenterPanelProgress
