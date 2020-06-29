import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import moment from 'moment/moment'
import { Form, Button } from 'react-bootstrap'

const CustomDatePicker = ({
	date,
	setDate,
	placeholder,
	hasRangeSelector = false,
	handleClose,
}) => {
	const [startDate, setStartDate] = useState(undefined)
	const [endDate, setEndDate] = useState(undefined)
	const [selectionComplete, toggleSelectionComplete] = useState(false)
	const [datePickerRef, setDatePickerRef] = useState(false)
	const handleDateChange = (date) => {
		if (hasRangeSelector) {
			if (!selectionComplete && !startDate) {
				setStartDate(date)
			}
			if (!selectionComplete && startDate && !endDate) {
				setEndDate(date)
				setDate(
					`${moment(startDate).format('ll')} - ${moment(date).format('ll')}`
				)
				toggleSelectionComplete(true)
			}
			if (selectionComplete && startDate && endDate) {
				setStartDate(date)
				setEndDate(undefined)

				toggleSelectionComplete(false)
			}
		} else {
			setDate(date.toString())
		}
	}
	const CustomInput = ({ onClick }) => (
		<Form.Control
			type='text'
			defaultValue={date}
			className='calender-input'
			placeholder='Feb 1 - Feb 28, 2020'
			onClick={onClick}
		/>
	)
	const closeDatePicker = () => {
		handleClose(startDate, endDate)
		datePickerRef.setOpen(false)
	}
	return (
		<DatePicker
			showPopperArrow={false}
			onChange={handleDateChange}
			selectsEnd={Boolean(startDate)}
			startDate={startDate}
			endDate={endDate}
			shouldCloseOnSelect={!hasRangeSelector}
			customInput={<CustomInput />}
			ref={(r) => setDatePickerRef(r)}
			popperModifiers={{
				preventOverflow: {
					enabled: true,
				},
			}}
		>
			{hasRangeSelector && (
				<Button
					className='btn-block'
					variant='primary'
					size='lg'
					type='button'
					onClick={closeDatePicker}
				>
					Save
				</Button>
			)}
		</DatePicker>
	)
}
export default CustomDatePicker
