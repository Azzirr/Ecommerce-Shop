import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
export default function MainBanner(){
    return(
        <Container>
            <Row>
                <Col xs={12} sm={6}>
                    BOX 1
                </Col>
                <Col xs={12} sm={6}>
                    BOX 2
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    CAROUSEL THAT SWITCH BANNERS
                </Col>
            </Row>
        </Container>
    )
}