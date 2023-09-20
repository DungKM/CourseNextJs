'use client'
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary">
      <Container>
      <Link className='navbar-brand'  href={'/'}> Home
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          
            <Link className='nav-link'  href={'/facebook'}>
              Facebook
            </Link>
            <Link className='nav-link'  href={'/tiktok'}>
              Tiktok
            </Link>
            <Link className='nav-link'  href={'/admin'}>
              
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;