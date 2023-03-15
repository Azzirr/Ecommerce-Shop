import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Header(){
    return(
        <Container>
            <Row>
                <Col xs={2}>
                    LOGO
                </Col>
                <Col xs={6}>
                    SEARCH INPUT WITH CATEGORY DROPDOWN AND BUTTON "SEARCH"
                </Col>
                <Col xs={4}>
                    CART, SUPPORT, LOGIN/LOGOUT
                </Col>
            </Row>
            <Row>
                <Col xs={3}>
                    Category 1
                </Col>
                <Col xs={3}>
                    Category 2
                </Col>
                <Col xs={3}>
                    Category 3
                </Col>
                <Col xs={3}>
                    What's new?
                </Col>
            </Row>
        </Container>
    )
}