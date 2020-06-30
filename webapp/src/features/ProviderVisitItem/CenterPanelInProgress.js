import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import CardCenterInProgress from './CardCenterInProgress'

const CenterPanelInProgress = () => {
	return (
		<>
			<Row className='mb-20'>
				<Col sm={5}>
					<h3 className='lh-45 f-18 font-weight-bold mb-4 mb-sm-0'>
						Provider Orders
					</h3>
				</Col>
				<Col sm={7}>
					<Button
						className='btn-primary btn btn-big'
						data-toggle='modal'
						data-target='#medication-order-modal'
					>
						Add Medication
					</Button>
					<Button
						className='btn-primary btn btn-big ml-2'
						data-toggle='modal'
						data-target='#test-order-modal'
					>
						Add Test
					</Button>
				</Col>
				<CardCenterInProgress />
			</Row>
		</>
	)
}

export default CenterPanelInProgress
