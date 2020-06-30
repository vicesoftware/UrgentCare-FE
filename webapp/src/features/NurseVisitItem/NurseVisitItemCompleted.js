import React from 'react'
import DischargeNotes from './DischargeNotes'
import NurseVisitProviderOrders from './ProviderOrder'
import NurseVisitItemComplete from './NurseVisitItemPanelComplete'
const NurseVisitItemCompleted = () => (
	<>
		<DischargeNotes />
		<NurseVisitProviderOrders />
		<NurseVisitItemComplete />
	</>
)
export default NurseVisitItemCompleted
