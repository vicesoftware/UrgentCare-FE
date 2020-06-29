import React from 'react'
import { Row, Col, FormControl, InputGroup } from 'react-bootstrap'
import './VisitsSearch.css'

const VisitsSearch = () => (
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
						placeholder='All Time'
					></FormControl>
				</InputGroup>
			</Col>
		</Row>
	</div>
)

export default VisitsSearch
