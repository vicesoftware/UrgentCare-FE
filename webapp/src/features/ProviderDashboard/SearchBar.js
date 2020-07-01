import React from 'react'
import { InputGroup, FormControl, Row, Col } from 'react-bootstrap'
const SearchBar = () => (
	<Row>
		<Col lg={2} xl={3}>
			<InputGroup className='mb-10'>
				<FormControl
					className='search-control'
					type='text'
					placeholder='SEARCH PATIENTS'
				/>
			</InputGroup>
		</Col>
		<Col lg={2} xl={3}>
			<InputGroup className='mb-10'>
				<FormControl as='select' size='lg' placeholder='Search Patients'>
					<option>ALL STATES</option>
				</FormControl>
			</InputGroup>
		</Col>
		<Col lg={2} xl={3}>
			<InputGroup className='mb-10'>
				<FormControl as='select' size='lg' placeholder='Search Patients'>
					<option>ALL LANGUAGES</option>
				</FormControl>
			</InputGroup>
		</Col>
		<Col lg={2} xl={3}>
			<InputGroup className='mb-10'>
				<FormControl as='select' size='lg' placeholder='Search Patients'>
					<option>ALL STATUS</option>
				</FormControl>
			</InputGroup>
		</Col>
	</Row>
)
export default SearchBar
