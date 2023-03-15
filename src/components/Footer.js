import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function Footer(){
    return(
        <Container>
            <Row>
                <Col>
                    About project
                </Col>
                <Col>
                    Copyright by Azzirr
                </Col>
                <Col>
                    Socials, contact
                </Col>
            </Row>
        </Container>
    )
}