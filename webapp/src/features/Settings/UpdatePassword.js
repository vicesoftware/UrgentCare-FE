import React from 'react'
import { Card, Form, Button, Alert, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'
import isEmpty from 'lodash/isEmpty'

const UpdatePassword = () => {
	const validationSchema = Yup.object().shape({
		currentPassword: Yup.string()
			.required('Password is Required')
			.min(8, 'Password must be of length more than 8'),
		newPassword: Yup.string()
			.required('New Password is Required')
			.min(8, 'Password must be of length more than 8'),
		confirmPassword: Yup.string()
			.required('Confirm Password is Required')
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

					<Card className='shadow-sm border-0 mb-25'>
						<Card.Body className='p-20'>
							<Card.Title className='font-weight-bold gotham lh-25 d-block mb-20 f-18'>
								Update Password
							</Card.Title>
							<Form onSubmit={handleSubmit}>
								<Form.Group controlId='currentPassword'>
									<Row>
										<Col md={4}>
											<Form.Label className='f-14 font-weight-bold my-2'>
												Current Password
											</Form.Label>
										</Col>
										<Col md={8}>
											<Form.Control
												type='password'
												name='currentPassword'
												placeholder='Input Password'
												onChange={handleChange}
												onBlur={handleBlur}
												value={values.currentPassword}
												className={classNames({
													error:
														touched.currentPassword && errors.currentPassword,
												})}
											/>

											{touched.currentPassword && errors.currentPassword && (
												<div className='error-message'>
													{errors.currentPassword}
												</div>
											)}
										</Col>
									</Row>
								</Form.Group>
								<Form.Group controlId='newPassword'>
									<Row>
										<Col md={4}>
											<Form.Label className='f-14 font-weight-bold my-2'>
												New Password
											</Form.Label>
										</Col>
										<Col md={8}>
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
												<div className='error-message'>
													{errors.newPassword}
												</div>
											)}
										</Col>
									</Row>
								</Form.Group>
								<Form.Group className='mb-25' controlId='confirmPassword'>
									<Row>
										<Col md={4}>
											<Form.Label className='f-14 font-weight-bold my-2'>
												Confirm New Password
											</Form.Label>
										</Col>
										<Col md={8}>
											<Form.Control
												type='password'
												name='confirmPassword'
												placeholder='Confirm New Password'
												onChange={handleChange}
												value={values.confirmPassword}
												onBlur={handleBlur}
												className={classNames({
													error:
														touched.confirmPassword && errors.confirmPassword,
												})}
											/>
											{touched.confirmPassword && errors.confirmPassword && (
												<div className='error-message'>
													{errors.confirmPassword}
												</div>
											)}
										</Col>
									</Row>
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

export default UpdatePassword
