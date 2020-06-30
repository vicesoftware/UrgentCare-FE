import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import NurseVisitItemLeftPanel from './NurseVisitItemLeftPanel'
import VisitActivity from './VisitActivity'
import NurseVisitItemCompleted from './NurseVisitItemCompleted'
import NurseVisitItemInProgress from './NurseVisitItemInProgress'
import NurseVisitItemWaiting from './NurseVisitItemWaiting'
import { NURSE_VISITS_ITEM_STATUS } from './NurseVisitItem.constants'
import RightPanel from './RightPanel'
import { useParams } from 'react-router'

// const activeStatus = NURSE_VISITS_ITEM_STATUS.COMPLETE

const NurseVisitItem = () => {
	const { id } = useParams()
	const getStatus = () => {
		switch (id) {
			case 'aa95-ffff-5555':
				return NURSE_VISITS_ITEM_STATUS.WAITING
			case 'afd2-223r-67rt':
				return NURSE_VISITS_ITEM_STATUS.IN_PROGRESS
			default:
				return NURSE_VISITS_ITEM_STATUS.COMPLETE
		}
	}

	const getNurseVisitMiddlePanel = (status) => {
		switch (status) {
			case NURSE_VISITS_ITEM_STATUS.IN_PROGRESS:
				return <NurseVisitItemInProgress />
			case NURSE_VISITS_ITEM_STATUS.WAITING:
				return <NurseVisitItemWaiting />
			default:
				return <NurseVisitItemCompleted />
		}
	}
	return (
		<Container fluid>
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
					{getNurseVisitMiddlePanel(getStatus())}
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<RightPanel status={getStatus()} />
				</Col>
			</Row>
		</Container>
	)
}
export default NurseVisitItem
