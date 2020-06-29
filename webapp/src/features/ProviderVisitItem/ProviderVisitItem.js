import React from 'react'
import LeftPanelActivity from './LeftPanelActivity'
import LeftPanelDetails from './LeftPanelDetails'
import CenterPanelInProgress from './CenterPanelInProgress'
import { Row, Col } from 'react-bootstrap'
import RightPanel from './RightPanel'
import CenterPanelComplete from './CenterPanelComplete'
import { PROVIDER_VISIT_ITEM_STATUS } from './providerVisitItem.constants'
export default function ProviderVisit() {
	const status = PROVIDER_VISIT_ITEM_STATUS.STATUS_IN_PROGRESS
	return (
		<div className='container-fluid'>
			<Row>
				<Col
					xl={{ span: 3, order: 1 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 2 }}
				>
					<LeftPanelDetails />
					<LeftPanelActivity />
				</Col>
				<Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
					{status === PROVIDER_VISIT_ITEM_STATUS.STATUS_IN_PROGRESS ? (
						<CenterPanelInProgress />
					) : (
						<CenterPanelComplete />
					)}
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<RightPanel status={status} />
				</Col>
			</Row>
		</div>
	)
}
