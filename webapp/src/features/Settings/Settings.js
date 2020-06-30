import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import UserInformation from './UserInformation'
import UpdatePassword from './UpdatePassword'
const Settings = () => (
	<Container fluid>
		<Row>
			<Col lg={4} xl={5}>
				<UserInformation />
			</Col>
			<Col lg={4} xl={5}>
				<UpdatePassword />
			</Col>
		</Row>
	</Container>
)

export default Settings
