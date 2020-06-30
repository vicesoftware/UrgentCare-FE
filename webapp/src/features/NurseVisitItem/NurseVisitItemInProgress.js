import React from 'react'
import { Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap'
import Icons from '../../assets/icons'

const NurseVisitItemInProgress = () => {
	const mockData = [
		{
			eventKey: '0',
			title: ' Tylenol, 650 mg',
			orderStatus: 'InComplete',
			providerOrderDescripition:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
			documentAdministration: 'Please Provide Administration Documentation:',
			documentAdministrationContent: '',
		},
		{
			eventKey: '1',
			title: 'Erythromycin, 333 mg',
			orderStatus: 'InComplete',
			providerOrderDescripition:
				' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere feugiat odio, eget rhoncus ipsum sollicitudin eu. Nulla nibh nisi, pellentesque id placerat sit amet, lacinia nec ex. Proin non congue massa..',
			documentAdministration: 'Please Provide Administration Documentation:',
			documentAdministrationContent: '',
		},
		{
			eventKey: '2',
			title: 'Ethanol, 650 mg',
			orderStatus: 'Complete',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			documentAdministration: 'Document Administration',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			eventKey: '3',
			title: 'Covid Teat',
			orderStatus: 'Complete',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			documentAdministration: 'Document Administration',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	]
	return (
		<>
			<Row className='mb-20'>
				<Col sm={12}>
					<h3 className='lh-45 f-18 font-weight-bold mb-4 mb-sm-0'>
						Provider Orders
					</h3>
				</Col>
			</Row>
			<Card className='border-0  mb-20 bg-light'>
				{mockData.map((each) => (
					<Card.Body
						className='p-20 shadow-sm mb-4 rounded bg-white'
						key={each.title}
					>
						<Accordion defaultActiveKey='0'>
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
											each.orderStatus === 'Complete'
												? 'outline-success'
												: 'outline-warning'
										}
										className='f-14 font-weight-bold btn-sm ml-md-auto mr-20'
									>
										{each.orderStatus}
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
										<div className=''>
											<div>
												<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
													Provider Orders
												</h4>
												<p className='f-14 mb-0'>
													{each.providerOrderDescripition}
												</p>
											</div>

											<hr className='my-25' />

											<div>
												<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
													{each.documentAdministration}
												</h4>
												<p className='f-14 mb-20'>
													{each.documentAdministrationContent}
												</p>
											</div>
											{each.statusBtnText === 'InComplete' ? (
												<>
													<Button className='mr-2' variant='warning'>
														Complete Order
													</Button>
													<Button variant='warning'>Decline Order</Button>
												</>
											) : (
												<Button
													className='btn-primary-custom'
													variant='primary'
												>
													Edit Note
												</Button>
											)}
										</div>
									</Card.Body>
								</Accordion.Collapse>
							</Row>
						</Accordion>
					</Card.Body>
				))}
			</Card>
		</>
	)
}
export default NurseVisitItemInProgress
