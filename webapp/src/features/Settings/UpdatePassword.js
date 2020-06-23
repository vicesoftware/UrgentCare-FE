import React from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'

export default function UpdatePassword() {
	const validationSchema = Yup.object().shape({
		currentPassword: Yup.string()
			.required('Password is Required')
			.min(8, 'Password must be of length more than 8'),
		newPassword: Yup.string()
			.required('Password is Required')
			.min(8, 'Password must be of length more than 8'),
		confirmPassword: Yup.string()
			.required('Password is Required')
			.min(8, 'Password must be of length more than 8'),
	})

	const initialValues = {
		currentPassword: '',
		newPassword: '',
		confirmPassword: '',
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
								Update Password
							</Card.Title>
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='currentPassword'>
									<Form.Label>Current Password</Form.Label>
									<Form.Control
										type='password'
										name='currentPassword'
										placeholder='Current Password'
										onChange={handleChange}
										onBlur={handleBlur}
										value={values.currentPassword}
										className={classNames({
											error: touched.currentPassword && errors.currentPassword,
										})}
									/>

									{touched.currentPassword && errors.currentPassword && (
										<div className='error-message'>
											{errors.currentPassword}
										</div>
									)}
								</Form.Group>
								<Form.Group controlId='newPassword'>
									<Form.Label>New Password</Form.Label>
									<Form.Control
										type='password'
										name='newPassword'
										placeholder='New Password'
										onChange={handleChange}
										value={values.newPassword}
										onBlur={handleBlur}
										className={classNames({
											error: touched.newPassword && errors.newPassword,
										})}
									/>
									{touched.newPassword && errors.newPassword && (
										<div className='error-message'>{errors.newPassword}</div>
									)}
								</Form.Group>
								<Form.Group className='mb-25' controlId='confirmPassword'>
									<Form.Label>Confirm Password</Form.Label>
									<Form.Control
										type='password'
										name='confirmPassword'
										placeholder='Confirm Password'
										onChange={handleChange}
										value={values.confirmPassword}
										onBlur={handleBlur}
										className={classNames({
											error: touched.confirmPassword && errors.confirmPassword,
										})}
									/>
									{touched.confirmPassword && errors.confirmPassword && (
										<div className='error-message'>
											{errors.confirmPassword}
										</div>
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
