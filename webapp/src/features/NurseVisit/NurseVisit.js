import React from 'react'
import PatientBasicCheckUp from '../VisitsProvider/PatientBasicCheckUp'
import VisitActivity from '../VisitsProvider/VisitActivity'
import { Button, Col, Row, Container } from 'react-bootstrap'
import ProviderTimer from './ProviderTimer'
import VisitStatus from '../VisitsProvider/VisitStatus'

const NurseVisit = () => {
	const Edit = (
		<Button
			className='btn-link btn f-14 font-weight-bold ml-auto btn-auto p-0'
			variant='btn-link'
		>
			Edit
		</Button>
	)

	return (
		<Container fluid>
			<Row>
				<Col
					xl={{ span: 3, order: 1 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 2 }}
				>
					<PatientBasicCheckUp Edit={Edit} />
					<VisitActivity />
				</Col>
				<Col xl={{ span: 6, order: 2 }} xs={{ span: 12, order: 1 }}>
					<ProviderTimer />
				</Col>
				<Col
					xl={{ span: 3, order: 3 }}
					lg={{ span: 6, order: 2 }}
					xs={{ span: 12, order: 3 }}
				>
					<VisitStatus cancel='Cancel Visit Request' status='Waiting' />
				</Col>
			</Row>
		</Container>
	)
}

export default NurseVisit
