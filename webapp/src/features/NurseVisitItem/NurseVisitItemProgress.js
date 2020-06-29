import React from 'react'
import { Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap'
import Icons from '../../assets/icons'
import classNames from 'classnames'

const NurseVisitItemProgress = () => {
	const mockData = [
		{
			eventKey: '0',
			title: ' Tylenol, 650 mg',
			statusBtnText: 'InComplete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
			documentAdministration: 'Please Provide Administration Documentation:',
			documentAdministrationContent: '',
			actionBtnText: 'Complete Order',
		},
		{
			eventKey: '1',
			title: 'Erythromycin, 333 mg',
			statusBtnText: 'InComplete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam posuere feugiat odio, eget rhoncus ipsum sollicitudin eu. Nulla nibh nisi, pellentesque id placerat sit amet, lacinia nec ex. Proin non congue massa..',
			documentAdministration: 'Please Provide Administration Documentation:',
			documentAdministrationContent: '',
			actionBtnText: 'Complete Order',
		},
		{
			eventKey: '2',
			title: 'Ethanol, 650 mg',
			statusBtnText: 'Complete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			documentAdministration: 'Document Administration',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			actionBtnText: 'Edit now',
		},
		{
			eventKey: '3',
			title: 'Covid Teat',
			statusBtnText: 'Complete',
			providerOrders: 'Provider Orders',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			documentAdministration: 'Document Administration',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			actionBtnText: 'Edit now',
		},
	]
	return (
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
										each.statusBtnText === 'Negative'
											? 'outline-danger'
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
									<div className=''>
										<div>
											<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
												{each.providerOrders}
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

										{each.followUpInstruction ? <hr className='my-25' /> : ''}

										<div>
											{each.followUpInstruction ? (
												<>
													<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
														{each.followUpInstruction}
													</h4>
													<p className='f-14 mb-20'>
														{each.followUpInstructionContent}
													</p>

													<textarea
														className='form-control mb-20'
														id=''
														cols='30'
														rows='4'
														placeholder='Your Instructions…'
													></textarea>
												</>
											) : (
												''
											)}

											<Button
												className={classNames({
													'btn-primary-custom':
														each.actionBtnText === 'Edit now',
												})}
												variant={
													each.actionBtnText === 'Save'
														? 'warning'
														: each.actionBtnText === 'Edit now'
														? 'primary'
														: 'danger'
												}
											>
												{each.actionBtnText}
											</Button>
										</div>
									</div>
								</Card.Body>
							</Accordion.Collapse>
						</Row>
					</Accordion>
				</Card.Body>
			))}
		</Card>
	)
}

export default NurseVisitItemProgress
