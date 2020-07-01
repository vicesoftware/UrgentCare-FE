import React from 'react'
import { Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap'
import Icons from '../../assets/icons'
const ProviderVisitAddMedication = () => {
	const MedicationData = [
		{
			eventKey: '0',
			title: 'Perscribed: Tylenol, 650 mg',
			statusBtnText: 'Complete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			eventKey: '1',
			title: 'Perscribed: Tylenol, 650 mg',
			statusBtnText: 'Incomplete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			eventKey: '3',
			title: 'Perscribed: Erythromycin, 333 mg',
			statusBtnText: 'Incomplete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
		},
	]
	return (
		<Card className='border-0  mb-20 bg-light'>
			{MedicationData.map((each) => (
				<Card.Body
					className='p-20 shadow-sm mb-4 rounded bg-white'
					key={each.title}
				>
					<Accordion>
						<Row className='align-items-center d-flex justify-content-between'>
							<Col
								md={9}
								className='mb-4 mb-md-0 d-flex justify-content-between'
							>
								<h4 className='col-xs-12 f-16 font-weight-bold mb-0'>
									{each.title}
								</h4>
								<Button
									variant={
										each.statusBtnText === 'Incomplete'
											? 'outline-warning'
											: 'outline-success'
									}
									className='f-14 font-weight-bold btn-sm ml-md-auto mr-20'
								>
									{each.statusBtnText}
								</Button>
							</Col>
							<Accordion.Toggle
								className='btn-expand f-14 btn btn-link btn-auto p-0 font-weight-bold d-flex align-items-center text-light'
								variant='link'
								eventKey={each.eventKey}
							>
								More Details
								<Image
									src={Icons.arrowDownIcon}
									alt=''
									className='ml-2'
									width='15'
								></Image>
							</Accordion.Toggle>
							<Accordion.Collapse eventKey={each.eventKey} className='col-12'>
								<Card.Body className='p-0'>
									<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
										{each.providerOrders}
									</h4>
									<p className='f-14 mb-0'>{each.providerOrderDescripition}</p>
									<hr className='my-25' />
									<Button variant='primary'>Edit Order</Button>{' '}
									<Button variant='danger'>Remove Order</Button>
								</Card.Body>
							</Accordion.Collapse>
						</Row>
					</Accordion>
				</Card.Body>
			))}
		</Card>
	)
}
export default ProviderVisitAddMedication
