import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
export default function Footer(){
    return(
        <Container>
            <Navbar expand="sm" bg="dark" className="justify-content-center">
                <Nav>
                    <Nav.Link href="#" style={{color: '#DDDDDD'}}>About project</Nav.Link>
                    <Nav.Link href="#" style={{color: '#DDDDDD'}}>Copyright by Azzirr</Nav.Link>
                    <Nav.Link href="#" style={{color: '#DDDDDD'}}>Github</Nav.Link>
                    <Nav.Link href="#" style={{color: '#DDDDDD'}}>LinkedIn</Nav.Link>
                    <Nav.Link href="#" style={{color: '#DDDDDD'}}>Check out my other projects</Nav.Link>
                </Nav>
            </Navbar>
        </Container>
    )
}