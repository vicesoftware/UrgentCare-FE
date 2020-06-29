import React from 'react'
import { Card, Image } from 'react-bootstrap'
import IMAGES from '../../assets/images'

const NurseVisitItemWaiting = () => {
	return (
		<div>
			<Card className='border-0 shadow-sm mb-30'>
				<Card.Body className='py-5 text-center waiting-box'>
					<h4 className='font-weight-bold f-18 mb-10 hind'>
						Waiting on Provider to Join…
					</h4>
					<h1 className='font-weight-bold mb-0 hind'>00:00:45</h1>
				</Card.Body>
			</Card>
			<Card className='border-0 shadow-sm mb-30'>
				<Card.Body className='p-20 '>
					<div className='video-container bg-light position-relative'>
						<Image
							className='w-100 img-fluid rounded'
							src={IMAGES.nurseVideo}
							alt='video-content'
						/>
					</div>
				</Card.Body>
			</Card>
		</div>
	)
}

export default NurseVisitItemWaiting
