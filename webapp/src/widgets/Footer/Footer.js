import React from 'react'
export default function Footer() {
	const year = new Date().getFullYear()

	return (
		<footer className=' py-4'>
			<div className='container-fluid'>
				<span className='opacity-50 f-14'>©{year}Urgent Care For Families</span>
			</div>
		</footer>
	)
}
