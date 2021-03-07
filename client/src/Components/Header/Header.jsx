import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';  
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap'; 
// user props must be passed to show username 
// signout function with onclick
const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" className='header'> 
      <LinkContainer to="/main">
        <Navbar.Brand>ARTISTEDEPRIMES</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto"> 
          <LinkContainer to="/post">
            <Nav.Link>Post</Nav.Link>
          </LinkContainer>  
          <LinkContainer to="/">
            <Nav.Link>Sign Out</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  
  )
} 

export default Header;