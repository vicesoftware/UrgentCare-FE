import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NurseVisitItemLeftPanel from './NurseVisitItemLeftPanel'
import VisitActivity from './VisitActivity'
import CenterPanelCompleted from './CenterPanelCompleted'
import CenterPanelProgress from './CenterPanelProgress'
import NurseVisitItemWaiting from './NurseVisitItemWaiting'
import { NURSE_VISITS_ITEM_STATUS } from './NurseVisitItem.constants'
import RightPanel from './RightPanel'

const activeStatus = NURSE_VISITS_ITEM_STATUS.COMPLETE

const NurseVisitItem = () => {
	const NurseVisitMiddleItem = (status) => {
		switch (status) {
			case NURSE_VISITS_ITEM_STATUS.IN_PROGRESS:
				return <CenterPanelProgress />
			case NURSE_VISITS_ITEM_STATUS.WAITING:
				return <NurseVisitItemWaiting />

			default:
				return <CenterPanelCompleted />
		}
	}
	return (
		<div className='container-fluid'>
			<Row>
				<Col
					xl={{ span: 3, order: 1 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 2 }}
				>
					<NurseVisitItemLeftPanel />
					<VisitActivity />
				</Col>
				<Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
					{NurseVisitMiddleItem(NURSE_VISITS_ITEM_STATUS.COMPLETE)}
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<RightPanel status={activeStatus} />
				</Col>
			</Row>
		</div>
	)
}

export default NurseVisitItem
