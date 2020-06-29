import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import UserInformations from './UserInformations'
import UpdatePassword from './UpdatePassword'

const Settings = () => (
	<Container fluid>
		<Row>
			<Col md={6}>
				<UserInformations />
			</Col>
			<Col md={6}>
				<UpdatePassword />
			</Col>
		</Row>
	</Container>
)

export default Settings
