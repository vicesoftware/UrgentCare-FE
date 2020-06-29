import React from 'react'
import VisitsSearch from './VisitsSearch'
import { Row, Col } from 'react-bootstrap'

import PatientDetailsTable from './PatientDetailsTable'

export default function VisitsArchive() {
	return (
		<div className=''>
			<div className='container-fluid '>
				<Row>
					<Col lg={4} xl={3}>
						<VisitsSearch />
					</Col>
					<Col lg={8} xl={9}>
						<PatientDetailsTable />
					</Col>
				</Row>
			</div>
		</div>
	)
}
