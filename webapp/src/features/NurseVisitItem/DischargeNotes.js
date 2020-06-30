import React from 'react'
import { Row, Col, Card, Accordion } from 'react-bootstrap'
const DischargeNotes = () => {
	const mockData = [
		{
			schoolExcuseSelection: 'Patient may return to school Today',
			providerAfterVisitSummaryDescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			nurseAfterVisitSummarydescription:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	]
	return (
		<Card className='border-0  mb-20 bg-light'>
			{mockData.map((mockDischargeNotes) => (
				<Card.Body
					className='p-20 shadow-sm mb-4 rounded bg-white'
					key={mockDischargeNotes.title}
				>
					<Accordion>
						<Row className='align-items-center d-flex justify-content-between'>
							<Col
								md={9}
								className='mb-4 mb-md-0 d-flex justify-content-between'
							>
								<h4 className='col-xs-12 f-16 font-weight-bold mb-0'>
									Discharge Notes
								</h4>
							</Col>
							<Col md={9} className='f-12 font-semi-bold mb-20'>
								<span className='status-sign bg-primary d-inline-block rounded-circle mr-2'></span>
								{mockDischargeNotes.schoolExcuseSelection}
							</Col>

							<Accordion.Collapse
								eventKey={mockDischargeNotes.eventKey}
								className='col-12'
							>
								<Card.Body className='p-0'>
									<div>
										<div>
											<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
												Provider After Visit Summary
											</h4>
											<p className='f-14 mb-0'>
												{
													mockDischargeNotes.providerAfterVisitSummaryDescription
												}
											</p>
										</div>

										<hr className='my-25' />

										<div>
											<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
												Nurse After Visit Summary
											</h4>
											<p className='f-14 mb-20'>
												{mockDischargeNotes.nurseAfterVisitSummarydescription}
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
