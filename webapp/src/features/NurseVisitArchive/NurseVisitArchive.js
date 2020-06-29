import React from 'react'
import VisitsSearch from './VisitsSearch'

import PatientDetailsTable from './PatientDetailsTable'

export default function NurseVisitArchive() {
	return (
		<div className=''>
			<div className='container-fluid '>
				<VisitsSearch />

				<PatientDetailsTable />
			</div>
		</div>
	)
}
