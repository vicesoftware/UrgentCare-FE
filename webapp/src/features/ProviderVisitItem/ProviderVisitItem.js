import React from 'react'
import ProviderVisitItemLeftPanel from './ProviderVisitItemLeftPanel'
import ProviderVisitItemCenterPanelInProgress from './ProviderVisitItemCenterPanelInProgress'
import { Row, Col } from 'react-bootstrap'
import ProviderVisitItemRightPanel from './ProviderVisitItemRightPanel'
import ProviderVisitItemCenterPanelComplete from './ProviderVisitItemCenterPanelComplete'
import { PROVIDER_VISIT_ITEM_STATUS } from './providerVisitItem.constants'
const ProviderVisitItem = () => {
	const status = PROVIDER_VISIT_ITEM_STATUS.STATUS_COMPLETE
	return (
		<div className='container-fluid'>
			<Row>
				<Col
					xl={{ span: 3, order: 1 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 2 }}
				>
					<ProviderVisitItemLeftPanel />
				</Col>
				<Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
					{status === PROVIDER_VISIT_ITEM_STATUS.STATUS_IN_PROGRESS ? (
						<ProviderVisitItemCenterPanelInProgress />
					) : (
						<ProviderVisitItemCenterPanelComplete />
					)}
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<ProviderVisitItemRightPanel status={status} />
				</Col>
			</Row>
		</div>
	)
}
export default ProviderVisitItem
