import React from 'react'
import { Row, Col } from 'react-bootstrap'
import UserInformations from './UserInformations'
import UpdatePassword from './UpdatePassword'
const Settings = () => (
	<Row>
		<Col lg={4} xl={5}>
			<UserInformations />
		</Col>
		<Col lg={4} xl={5}>
			<UpdatePassword />
		</Col>
	</Row>
)

export default Settings
