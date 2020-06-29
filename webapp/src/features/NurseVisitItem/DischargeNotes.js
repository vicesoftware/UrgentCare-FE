import React from 'react'
import { Row, Col, Card, Accordion } from 'react-bootstrap'

const DischargeNotes = () => {
	const dischargeData = [
		{
			title: 'Discharge Notes',
			dischargeStatus: 'Patient may return to school Today',
			providerAfterVisitSummary: 'Provider After Visit Summary',
			providerAfterVisitSummaryDescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			nurseAfterVisitSummary: 'Nurse After Visit Summary',
			nurseAfterVisitSummarydescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	]
	return (
		<Card className='border-0  mb-20 bg-light'>
			{dischargeData.map((each) => (
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
							</Col>
							<Col md={9} className='f-12 font-semi-bold mb-20'>
								<span className='status-sign bg-primary d-inline-block rounded-circle mr-2'></span>
								{each.dischargeStatus}
							</Col>

							<Accordion.Collapse eventKey={each.eventKey} className='col-12'>
								<Card.Body className='p-0'>
									<div className=''>
										<div>
											<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
												{each.providerAfterVisitSummary}
											</h4>
											<p className='f-14 mb-0'>
												{each.providerAfterVisitSummaryDescription}
											</p>
										</div>

										<hr className='my-25' />

										<div>
											<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
												{each.nurseAfterVisitSummary}
											</h4>
											<p className='f-14 mb-20'>
												{each.nurseAfterVisitSummarydescription}
											</p>
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
export default DischargeNotes
