import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'

// TODO UserInformation - change file name as well
const UserInformations = () => {
	const validationSchema = Yup.object().shape({
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('E-mail is invalid')
			.required('E-mail is required'),
		phone: Yup.string()
			.min(10, 'Phone number should be of atleast 10 characters')
			.required('Phone number is required'),
	})

	const initialValues = {
		name: '',
		email: '',
		phone: '',
	}

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={(values) => {
				alert(JSON.stringify(values, null, 2))
			}}
		>
			{({
				values,
				errors,
				touched,
				handleChange,
				handleBlur,
				handleSubmit,
			}) => (
					<>
						{!isEmpty(errors) && (
							<Alert variant='danger'>Error: All fields need to be correct</Alert>
						)}

						<Card class='shadow-sm border-0 mb-25'>
							<Card.Body class='p-20'>
								<Card.Title className='font-weight-bold gotham lh-25 d-block mb-20 f-18'>
									Your Information
							</Card.Title>
								<Form onSubmit={handleSubmit}>
									<Form.Group controlId='name'>
										<Form.Label>Your Name</Form.Label>
										<Form.Control
											type='text'
											name='name'
											placeholder='Your Name'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.name}
											className={classNames({
												error: touched.name && errors.name,
											})}
										/>

										{touched.name && errors.name && (
											<div className='error-message'>{errors.name}</div>
										)}
									</Form.Group>
									<Form.Group controlId='email'>
										<Form.Label>Your Email</Form.Label>
										<Form.Control
											type='email'
											name='email'
											placeholder='Your Email'
											onChange={handleChange}
											value={values.email}
											onBlur={handleBlur}
											className={classNames({
												error: touched.email && errors.email,
											})}
										/>
										{touched.email && errors.email && (
											<div className='error-message'>{errors.email}</div>
										)}
									</Form.Group>
									<Form.Group className='mb-25' controlId='phone'>
										<Form.Label>Your Phone Number</Form.Label>
										<Form.Control
											type='text'
											name='phone'
											placeholder='your Phone Number'
											id='phone'
											onChange={handleChange}
											value={values.phone}
											onBlur={handleBlur}
											className={classNames({
												error: touched.phone && errors.phone,
											})}
										/>
										{touched.phone && errors.phone && (
											<div className='error-message'>{errors.phone}</div>
										)}
									</Form.Group>
									<Button variant='secondary' type='submit'>
										Save
								</Button>
								</Form>
							</Card.Body>
						</Card>
					</>
				)}
		</Formik>
	)
}

export default UserInformations
