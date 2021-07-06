import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
    return(
        <Container 
        fluid
        tag="footer"
        className="text-center text-uppercase fixed-bottom p-3"
        style={{backgroundColor:"#0D0D0D",color:"#CAD5E2"}} 
        >
            Github search App 
        </Container>
    )
}
export default Footer;