import React from 'react'
import ProviderDashboardTable from './ProviderDashboardTable'
import SearchBar from './SearchBar'
import { Button, Alert, Row, Col } from 'react-bootstrap'
const ProviderDashboard = () => (
	<>
		<Alert variant='danger'>
			<Row>
				<Col lg={1} xl={10}>
					<span className='f-12 text-white font-weight-bold hind'>
						Action Required: Please Complete the Discharge Note for Kaylie Meek
					</span>
				</Col>
				<Col lg={1} xl={1}>
					<Button variant='light'>Complete Now</Button>
				</Col>
			</Row>
		</Alert>
		<SearchBar />
		<ProviderDashboardTable />
	</>
)
export default ProviderDashboard
