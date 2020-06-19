import React from 'react'
import { Row, Col, Button, Card } from 'react-bootstrap'
import VisitActivity from './VisitActivity'
import PatientBasicCheckUp from './PatientBasicCheckUp'
import DischargeNote from './DischargeNote'
import ProviderOrders from './ProviderOrders'
import './VisitsProvider.css'

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
					<Button className='btn btn-primary mb-2 btn-block'>
						Email Discharge Note
					</Button>
					<Button className='btn btn-primary btn-block mb-30'>
						Download Discharge Note
					</Button>
					<Card className='border-0 shadow-sm mb-30'>
						<Card.Body className='px-20 py-15'>
							<Card.Text className='d-flex f-14'>
								<div className='flex-fill'>
									<strong className='opacity-50'>Visit Status</strong>
								</div>
								<div className='flex-fill'>
									<span className='status-sign bg-primary d-inline-block rounded-circle mr-2'></span>
									<span>Complete</span>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	)
}

export default VisitsProvider
