import React from 'react'
import { Row, Col, Card, Button, Image, Accordion } from 'react-bootstrap'
import Icons from '../../assets/icons'
import classNames from 'classnames'

const ProviderVisitItemCardInProgress = () => {
	const providerOrderStatus = (status) => {
		switch (status) {
			case 'Negative':
				return 'outline-danger'
			case 'Incomplete':
				return 'outline-warning'
			default:
				return 'outline-success'
		}
	}
	const patientDiagnosisData = [
		{
			eventKey: '0',
			type: 'test',
			title: 'Step Test',
			providerstatus: 'Complete',
			providerOrderDescripition:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident',
			documentAdministrationContent: '',
		},
		{
			eventKey: '1',
			title: 'Perform Covid Test',
			type: 'test',
			providerstatus: 'Negative',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			followUpInstructionContent:
				'The following instructions will be appended to your provider note',
		},
		{
			eventKey: '2',
			type: 'medication',
			title: 'Perscribed: Tylenol, 650 mg',
			providerstatus: 'Complete',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			eventKey: '3',
			type: 'medication',
			title: 'Perscribed: Tylenol, 650 mg',
			providerstatus: 'InComplete',
			providerOrderDescripition:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			documentAdministrationContent:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
		{
			eventKey: '4',
			type: 'medication',
			title: 'Perscribed: Erythromycin, 333 mg',
			providerstatus: 'Incomplete',
			providerOrderDescripition:
				'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.',
			documentAdministrationContent: '',
		},
	]

	return (
		<Card className='border-0  mb-20 bg-light'>
			{patientDiagnosisData.map((each) => (
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
									<span
										className={classNames(
											'status-sign d-inline-block rounded-circle mr-2',
											{
												'bg-primary': each.title === 'Step Test',
											}
										)}
									></span>
									{each.title}
								</h4>
								<Button
									variant={providerOrderStatus(each.providerstatus)}
									className='f-14 font-weight-bold btn-sm ml-md-auto mr-20'
								>
									{each.providerstatus}
								</Button>
							</Col>
							<Accordion.Toggle
								className='btn-expand f-14 btn-auto p-0 font-weight-bold d-flex align-items-center text-light'
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
										Provider Orders
									</h4>
									<p className='f-14 mb-0'>{each.providerOrderDescripition}</p>

									<hr className='my-25' />

									<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
										{each.documentAdministrationContent !== ''
											? 'Document Administration'
											: 'Please Provide Document Administration'}
									</h4>
									<p className='f-14 mb-20'>
										{each.documentAdministrationContent}
									</p>

									{each.followUpInstructionContent ? (
										<hr className='my-25' />
									) : (
										''
									)}
									{each.followUpInstructionContent ? (
										<>
											<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
												Follow-up Instructions
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
									{each.type === 'medication' ? (
										<>
											<Button variant='warning'>Edit Order</Button>{' '}
											<Button variant='danger'>Remove Order</Button>
										</>
									) : (
										<Button variant='warning'>Save</Button>
									)}
								</Card.Body>
							</Accordion.Collapse>
						</Row>
					</Accordion>
				</Card.Body>
			))}
		</Card>
	)
}

export default ProviderVisitItemCardInProgress
