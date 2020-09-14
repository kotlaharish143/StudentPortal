import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function MyNavbar(){
  return(
    <div className="">
<Navbar collapseOnSelect expand="lg"  variant="light" className="container">
<Link to="/"><Navbar.Brand className=" font-weight-bold" href="">Student Portal <span class="glyphicon glyphicon-ok" aria-hidden="true"></span> </Navbar.Brand></Link>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
    
      <Nav.Link  href="#features">Resources</Nav.Link>
      <Nav.Link href="#pricing">Some Other</Nav.Link>
      <NavDropdown title="Courses" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">P.H.D regular</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">P.H.D Part-time </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">M.Tech</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Btech</NavDropdown.Item>
        
      </NavDropdown>
    </Nav>
    
    <Nav>
    <Link to='/Forum'>
      <Nav.Link className="d border-none">Forum</Nav.Link>
      </Link>
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
<hr class="my-0"></hr>
</div>
   
  )
}