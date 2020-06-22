import React from 'react'
import { Row, Col } from 'react-bootstrap'
import VisitActivity from './VisitActivity'
import PatientBasicCheckUp from './PatientBasicCheckUp'
import DischargeNote from './DischargeNote'
import ProviderOrders from './ProviderOrders'
import './VisitsProvider.css'
import VisitStatus from './VisitStatus'

const VisitsProvider = () => {
	return (
		<div className='container-fluid'>
			<Row>
				<Col
					xl={{ span: 3, order: 1 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 2 }}
				>
					<PatientBasicCheckUp />
					<VisitActivity />
				</Col>
				<Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
					<DischargeNote />
					<ProviderOrders />
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<VisitStatus
						email='Email Discharge Note'
						download='Download Discharge Note'
						status='Complete'
					/>
				</Col>
			</Row>
		</div>
	)
}

export default VisitsProvider
