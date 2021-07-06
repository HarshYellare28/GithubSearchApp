import React,{useContext} from "react"

import { UserContext } from "../Context/UserContext"
import { Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

import { 
    Nav,
    Row,
    Navbar,
 } from 'react-bootstrap';


const Header = () => {
    const context = useContext(UserContext)    
    
    return(
      <Navbar style={{backgroundColor:"#0D0D0D"}} expand="lg">
        <Navbar.Brand style={{color:"#CAD5E2",padding:"5px"}}>Github Search App</Navbar.Brand>
        <Navbar.Text className="mr-auto" style={{color:"#CAD5E2"}}>{context.user?.email ? context.user?.email : ""}</Navbar.Text>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbar-dark"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
              { context.user ? (<Nav.Link tag={Link} onClick={() => (context.setUser(null))} style={{color:"#CAD5E2",padding:"5px"}}>Log Out</Nav.Link>) : <Row><Nav.Link tag={Link} href="/SignUp" style={{color:"#CAD5E2",padding:"5px",marginLeft:"15px"}}>Sign Up</Nav.Link><Nav.Link tag={Link} href="/SignIn" style={{color:"#CAD5E2",padding:"5px",paddingLeft:"10px",marginRight:"10px"}}>Sign In</Nav.Link></Row> } 
        </Nav>
        </Navbar.Collapse>
      </Navbar>
        // <Navbar bg="dark" expand="lg">
        //   <Navbar.Brand href="#home" style={{color:"#CAD5E2"}}>Github Search App</Navbar.Brand>
        //   <Navbar.Text>{context.user?.email ? context.user?.email : ""}</Navbar.Text>
        //   <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        //   <Navbar.Collapse id="basic-navbar-nav" className="justifyContentEnd">
        //     <Nav>
        //       { context.user ? (<Nav.Link tag={Link} onClick={() => (context.setUser(null))} style={{color:"#CAD5E2"}}>Log Out</Nav.Link>) : (<div style={{marginRight:"7px"}}><Nav.Link tag={Link} href="/SignUp" style={{color:"#CAD5E2"}}>Sign Up</Nav.Link><Nav.Link tag={Link} href="/SignIn" style={{color:"#CAD5E2"}}>Sign In</Nav.Link></div>)} 
        //     </Nav>
        //   </Navbar.Collapse>
        // </Navbar>              
    )
}
export default Header

