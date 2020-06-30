import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next'
import './Table.css'

const Table = ({ columns, data = [], keyField }) => {
	return (
		<BootstrapTable
			bordered={false}
			keyField={keyField}
			data={data}
			columns={columns}
			wrapperClasses='table-responsive mb-25'
			rowClasses='text-table-data'
			headerClasses='column-header'
			classes='font-weight-normal f-14 table-striped'
		/>
	)
}

export default Table
