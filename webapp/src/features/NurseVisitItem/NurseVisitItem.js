import React from 'react'
import { Row, Col } from 'react-bootstrap'
import NurseVisitItemLeftPanel from './NurseVisitItemLeftPanel'
import VisitActivity from './VisitActivity'
import NurseVisitItemComplete from './NurseVisitItemComplete'
import NurseVisitItemProgress from './NurseVisitItemProgress'
import NurseVisitItemWaiting from './NurseVisitItemWaiting'
import RightPanel from './RightPanel'
import DischargeNotes from './DischargeNotes'
import NurseVisitProviderOrders from './ProviderOrder'

const NurseVisitMiddle = (status) => {
	switch (status) {
		case 'IN_PROGRESS':
			return (
				<>
					<NurseVisitProviderOrders />
					<NurseVisitItemProgress />
				</>
			)
		case 'IN_WAITING':
			return (
				<>
					<NurseVisitItemWaiting />
				</>
			)

		default:
			return (
				<>
					<DischargeNotes />
					<NurseVisitItemComplete />
				</>
			)
	}
}

const NurseVisitNew = (status) => {
	switch (status) {
		case 'IN_PROGRESS':
			return <RightPanel cancel='End visit ' status='In progress' />

		case 'IN_WAITING':
			return <RightPanel cancel='Cancel visit Request' status='Waiting' />
		default:
			return (
				<RightPanel
					edit='Edit Discharge Note '
					email='Email Discharge Note'
					download='Download Discharge Note'
					status='complete'
				/>
			)
	}
}

const NurseVisitItem = () => {
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
					{NurseVisitMiddle('IN_PROGRESS')}
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					{NurseVisitNew('IN_PROGRESS')}
				</Col>
			</Row>
		</div>
	)
}

export default NurseVisitItem
