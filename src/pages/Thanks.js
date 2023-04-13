import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";

export default function Thanks(){
    return(
        <>
            <Container className="thanksStyle">
                <Row>
                    <Col>
                        <h2>Success! Your order has been accepted.</h2>
                        <h3>Check out our other items.</h3>
                        <Link to="/"><Button>Back to homepage</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}