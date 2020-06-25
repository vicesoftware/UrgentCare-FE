import React from 'react'
import LeftPanelActivity from './LeftPanelActivity'
import LeftPanelDetails from './LeftPanelDetails'
import CenterPanelInProgress from './CenterPanelInProgress'
import RightPanel from './RightPanel'
export default function ProviderVisit() {
	return (
		<main className=' py-25'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-lg-6 col-xl-3'>
						<LeftPanelDetails />
						<LeftPanelActivity />
					</div>
					<div className='col-lg-12 col-xl-6 video-column'>
						<CenterPanelInProgress />
					</div>
					<div className='col-lg-6 col-xl-3'>
						<RightPanel
							endVisit='End Visit'
							releaseVisit='Release Visit'
							status='In Progress'
						/>
					</div>
				</div>
			</div>
		</main>
	)
}
