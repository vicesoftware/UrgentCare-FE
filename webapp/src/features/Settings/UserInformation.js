import React from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import { Formik } from 'formik'
import * as Yup from 'yup'
import classNames from 'classnames'

const UserInformation = () => {
	const validationSchema = Yup.object().shape({
		prefix: Yup.string().required('Prefix is required'),
		name: Yup.string().required('Name is required'),
		email: Yup.string()
			.email('E-mail is invalid')
			.required('E-mail is required'),
		phone: Yup.string()
			.min(10, 'Phone number should be atleast 10 characters')
			.required('Phone number is required'),
	})

	const initialValues = {
		prefix: '',
		name: '',
		credentials: '',
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
				<Card className='shadow-sm border-0 mb-30'>
					<Card.Body className='p-20'>
						<Card.Title className='font-weight-bold gotham lh-25 d-block mb-20 f-18'>
							Your Information
						</Card.Title>
						<Form onSubmit={handleSubmit}>
							<Form.Group controlId='prefix'>
								<Row className='mb-10'>
									<Col md={4}>
										<Form.Label className='f-14 font-weight-bold my-2'>
											Your Prefix
										</Form.Label>
									</Col>
									<Col md={8}>
										<Form.Control
											as='select'
											name='prefix'
											onChange={handleChange}
											onBlur={handleBlur}
											value={values.prefix}
											className={classNames({
												error: touched.prefix && errors.prefix,
											})}
										>
											<option>Select Prefix</option>
											<option value='Mr'>Mr</option>
											<option value='Mrs'>Mrs</option>
											<option value='Ms'>Ms</option>

											{touched.prefix && errors.prefix && (
												<div className='error-message'>{errors.prefix}</div>
											)}
										</Form.Control>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group controlId='name'>
								<Row className='mb-10'>
									<Col md={4}>
										<Form.Label className='f-14 font-weight-bold my-2'>
											Your Name
										</Form.Label>
									</Col>
									<Col md={8}>
										<Form.Control
											type='text'
											name='name'
											placeholder='Full Name'
											onChange={handleChange}
											value={values.name}
											onBlur={handleBlur}
											className={classNames({
												error: touched.name && errors.name,
											})}
										/>
										{touched.name && errors.name && (
											<div className='error-message'>{errors.name}</div>
										)}
									</Col>
								</Row>
							</Form.Group>
							<Form.Group controlId='credentials'>
								<Row className='mb-10'>
									<Col md={4}>
										<Form.Label className='f-14 font-weight-bold my-2'>
											Your Credentials
										</Form.Label>
									</Col>
									<Col md={8}>
										<Form.Control
											as='select'
											name='credentials'
											onChange={handleChange}
											value={values.credentials}
											onBlur={handleBlur}
											className={classNames({
												error: touched.credentials && errors.credentials,
											})}
										>
											<option>Select Credential</option>
											<option value='Admin'>Admin</option>
											<option value='User'>User</option>
											{/* TODO Need to update with exact credentials */}

											{touched.credentials && errors.credentials && (
												<div className='error-message'>
													{errors.credentials}
												</div>
											)}
										</Form.Control>
									</Col>
								</Row>
							</Form.Group>
							<Form.Group controlId='email'>
								<Row className='mb-10'>
									<Col md={4}>
										<Form.Label className='f-14 font-weight-bold my-2'>
											Your Email Address
										</Form.Label>
									</Col>
									<Col md={8}>
										<Form.Control
											type='text'
											name='email'
											placeholder='Email Address'
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
									</Col>
								</Row>
							</Form.Group>
							<Form.Group controlId='phone'>
								<Row className='mb-10'>
									<Col md={4}>
										<Form.Label className='f-14 font-weight-bold my-2'>
											Your Phone Number
										</Form.Label>
									</Col>
									<Col md={8}>
										<Form.Control
											type='text'
											name='phone'
											placeholder='Phone Number'
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
									</Col>
								</Row>
							</Form.Group>
							<Button variant='secondary' type='submit'>
								Save
							</Button>
						</Form>
					</Card.Body>
				</Card>
			)}
		</Formik>
	)
}

export default UserInformation
