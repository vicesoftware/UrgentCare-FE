import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import NurseVisitItemLeftPanel from './NurseVisitItemLeftPanel'
import VisitActivity from './VisitActivity'
import NurseVisitItemCompleted from './NurseVisitItemCompleted'
import NurseVisitItemInProgress from './NurseVisitItemInProgress'
import NurseVisitItemWaiting from './NurseVisitItemWaiting'
import { NURSE_VISITS_ITEM_STATUS } from './NurseVisitItem.constants'
import RightPanel from './RightPanel'

const activeStatus = NURSE_VISITS_ITEM_STATUS.COMPLETE

const NurseVisitItem = () => {
	const Edit = (
		<Button
			className='btn-link btn f-14 font-weight-bold ml-auto btn-auto p-0'
			variant='btn-link'
		>
			Edit
		</Button>
	)

	const ViewAll = (
		<Button
			className='btn-link btn f-14 font-weight-bold ml-auto btn-auto p-0'
			variant='btn-link'
		>
			View All
		</Button>
	)

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
					<NurseVisitItemLeftPanel Edit={Edit} />
					<VisitActivity ViewAll={ViewAll} />
				</Col>
				<Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
					{getNurseVisitMiddlePanel(NURSE_VISITS_ITEM_STATUS.COMPLETE)}
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<RightPanel status={activeStatus} />
				</Col>
			</Row>
		</Container>
	)
}
export default NurseVisitItem
