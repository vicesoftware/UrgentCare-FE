import React from 'react'
import { Row, Col } from 'react-bootstrap'
import YourInformation from './YourInformation'
import UpdatePassword from './UpdatePassword'
export default function Settings() {
	return (
		<div>
			<Row>
				<Col lg={4} xl={5}>
					<YourInformation />
				</Col>
				<Col lg={4} xl={5}>
					<UpdatePassword />
				</Col>
			</Row>

			<footer className=' py-4'>
				<div className='container-fluid'>
					<span className='opacity-50 f-14'>
						©2020 Urgent Care For Families
					</span>
				</div>
			</footer>
		</div>
	)
}
