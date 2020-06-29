import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ProviderCards from './ProviderCards'

const ProviderOrders = () => {
	return (
		<>
			<Row className='mb-20'>
				<Col sm={12}>
					<h3 className='lh-45 f-18 font-weight-bold mb-4 mb-sm-0'>
						Provider Orders
					</h3>
				</Col>
			</Row>
			<ProviderCards />
		</>
	)
}

export default ProviderOrders
