import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Logo from '../header/1.png';

function Header() {
  const [active, setActive] = useState('Home');
  const [isSearchVisible, setIsSearchVisible] = useState(false); 

  const handleClick = (page) => {
    setActive(page);
  };

  const handleSearchToggle = () => {
    setIsSearchVisible(!isSearchVisible); 
  };

  return (
    <div className='change'>
      <Navbar expand="lg" className="navbar sticky-top">
        <Container fluid>
          {/* Logo Section */}
          <Navbar.Brand href="#">
            <img src={Logo} alt="Logo" className="logo" />
          </Navbar.Brand>

          {/* Toggle for mobile view */}
          <Navbar.Toggle aria-controls="navbarScroll" className='bg-white' />

          <Navbar.Collapse id="navbarScroll">
            {/* Navigation Links */}
            <Nav className="me-auto my-2 my-lg-0 nav-links" navbarScroll>
              {['Home', 'About', 'Services', 'Portfolio', 'Contacts'].map((link) => (
                <Nav.Link
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className={`nav-item ${active === link ? 'active' : ''}`}
                  onClick={() => handleClick(link)}
                >
                  {link}
                </Nav.Link>
              ))}
            </Nav>

            {/* Search and Talk Button Section */}
            <Form className="d-flex navbar-right">
              {/* Custom Search Icon */}
              <button className='btn-search' onClick={handleSearchToggle}>
                <SearchIcon className="search-icon" fontSize="large" />
              </button>

              {/* Conditional Rendering of Search Input */}
              {isSearchVisible && (
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              )}

              <Button className="talk-button mx-3">Let's Talk</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
