import React from 'react'
import TableDashboard from './TableDashboard'
import SearchBoard from './SearchBoard'
import { Button, Alert, Row, Col } from 'react-bootstrap'

export default function Dashboard() {
	return (
		<div>
			<Alert variant='danger'>
				<Row>
					<Col lg={1} xl={10}>
						<span className='f-12 text-white font-weight-bold hind'>
							Action Required: Please Complete the Discharge Note for Kaylie
							Meek
						</span>
					</Col>
					<Col lg={1} xl={1}>
						<Button variant='light'>Complete Now</Button>
					</Col>
				</Row>
			</Alert>
			<SearchBoard />
			<TableDashboard />
		</div>
	)
}
