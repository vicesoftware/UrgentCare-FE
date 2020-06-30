import React from 'react'
import { Row, Col, Card, Accordion } from 'react-bootstrap'
const DischargeNotes = () => {
	const mockDischargeNotes = [
		{
			schoolExcuseSelection: 'Patient may return to school Today',
			providerAfterVisitSummary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
			nurseAfterVisitSummary:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
		},
	]
	return (
		<Card className='border-0  mb-20 bg-light'>
			<Card.Body className='p-20 shadow-sm mb-4 rounded bg-white'>
				<h3 className='lh-25 f-18  font-weight-bold mb-10'>Discharge Notes</h3>
				<Accordion>
					<Row className='align-items-center d-flex justify-content-between'>
						<Col md={9} className='f-12 font-semi-bold mb-20'>
							<span className='status-sign bg-primary d-inline-block rounded-circle mr-2'></span>
							{mockDischargeNotes.schoolExcuseSelection}
						</Col>
						<Accordion.Collapse className='col-12'>
							<Card.Body className='p-0'>
								<div className=''>
									<div>
										<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
											Provider After Visit Summary
										</h4>
										<p className='f-14 mb-0'>
											{mockDischargeNotes.providerAfterVisitSummary}
										</p>
									</div>
									<hr className='my-25' />
									<div>
										<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
											Nurse After Visit Summary
										</h4>
										<p className='f-14 mb-20'>
											{mockDischargeNotes.nurseAfterVisitSummary}
										</p>
									</div>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Row>
				</Accordion>
			</Card.Body>
		</Card>
	)
}
export default DischargeNotes
