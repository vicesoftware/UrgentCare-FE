import React from 'react'
import './VisitsArchive.css'
import { Row, Col } from 'react-bootstrap'
import FormControl from 'react-bootstrap/FormControl'
import InputGroup from 'react-bootstrap/InputGroup'

export default function VisitsSearch() {
	return (
		<>
			<div className='container-fluid'>
				<Row>
					<Col xl={3}>
						<InputGroup className='mb-10'>
							<FormControl
								className='search-control'
								type='text'
								placeholder='Search Patients'
							/>
						</InputGroup>
					</Col>

					<Col xl={3}>
						<InputGroup className='mb-10'>
							<FormControl
								className='calender-input '
								type='text'
								placeholder='ALL Time'
							></FormControl>
						</InputGroup>
					</Col>
				</Row>
			</div>
		</>
	)
}
