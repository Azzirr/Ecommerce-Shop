import Container  from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
export default function Footer(){

    return(
        <Container>
            <Navbar expand="sm" bg="dark" className="justify-content-center">
                <Nav>
                    <Nav.Link style={{color: '#32CD32'}}>Copyright by Azzirr</Nav.Link>
                    <Nav.Link as={Link} to="about-project" style={{color: '#DDDDDD'}}>About project</Nav.Link>
                    <Nav.Link href="https://github.com/Azzirr" target="_blank" style={{color: '#DDDDDD'}}>Github</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/in/arkadiusz-sliwowski/" target="_blank" style={{color: '#DDDDDD'}}>LinkedIn</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}