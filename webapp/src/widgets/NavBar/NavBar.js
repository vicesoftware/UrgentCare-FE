import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'
import { LinkContainer } from 'react-router-bootstrap'
import './NavBar.css'
import IMAGES from '../../assets/images'

export default function NavBar() {
	return (
		<Navbar bg='white' expand='lg' className='static-top p-0'>
			<div className='container-fluid'>
				<LinkContainer to='/'>
					<Navbar.Brand className='pt-0 mr-15'>
						<img src={IMAGES.logoCircle} alt='' width='53' />
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle
					aria-controls='basic-navbar-nav'
					className='border-0 text-white'
				/>
				<Navbar.Collapse>
					<Nav className='mr-auto align-items-lg-center '>
						<Nav.Item>
							<LinkContainer to='/nurse/visit'>
								<Nav.Link>Visits</Nav.Link>
							</LinkContainer>
						</Nav.Item>
						<Nav.Item className='px-0 px-md-4'>
							<Button className='btn btn-warning btn-lg' variant='primary'>
								Request Visit
							</Button>
						</Nav.Item>
					</Nav>
					<Nav className='nav-bar-right '>
						<Nav.Item className='px-0 px-md-4'>
							<span className='f-14 px-15 nav-link font-weight-normal'>
								Welcome, Nurse Lisa Smith
							</span>
						</Nav.Item>
						<Nav.Item>
							<LinkContainer to='/settings'>
								<Nav.Link className='d-flex align-items-center'>
									Settings
								</Nav.Link>
							</LinkContainer>
						</Nav.Item>
						<Nav.Item>
							<LinkContainer to='/'>
								<Nav.Link className='d-flex align-items-center'>
									Log out
								</Nav.Link>
							</LinkContainer>
						</Nav.Item>
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	)
}
