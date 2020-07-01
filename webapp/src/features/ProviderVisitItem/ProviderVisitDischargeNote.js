import React from 'react'
import { Card } from 'react-bootstrap'

const ProviderVisitDischargeNote = () => {
	const dischargeData = {
		schoolExcuseSelection: 'Patient may return to school Today',
		nurseAfterVisitSummary:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
		providerAfterVisitSummary:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
	}

	return (
		<Card className='shadow-sm border-0 mb-20'>
			<Card.Body className='p-20'>
				<Card.Text>
					<Card.Title as='h3' className='lh-25 f-18  font-weight-bold mb-10'>
						Discharge Notes
					</Card.Title>

					<p className='f-12 font-semi-bold mb-20'>
						<span className='status-sign bg-primary d-inline-block rounded-circle mr-2'></span>
						{dischargeData.schoolExcuseSelection}
					</p>
					<div>
						<h4 className='text-light f-14 font-weight-bold lh-25 mb-2'>
							Provider After Visit Summary
						</h4>
						<p className='f-14 mb-0'>{dischargeData.nurseAfterVisitSummary}</p>
					</div>

					<hr className='my-25' />
					<div className=''>
						<h4 className='text-light f-14 font-weight-bold lh-25 mb-10'>
							Nurse After Visit Summary
						</h4>
						<p className='f-14 mb-20'></p>
						{dischargeData.providerAfterVisitSummary}
					</div>
				</Card.Text>
			</Card.Body>
		</Card>
	)
}

export default ProviderVisitDischargeNote
