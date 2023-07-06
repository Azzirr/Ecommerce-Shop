import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
export default function NotFound(){
    return(
        <Container className="notFoundStyle">
            <Row>
                <Col>
                    <h3 className="mb-4">Something's wrong here...</h3>
                    <h5>We can't find the page you're looking for.</h5>
                    <h5>Please head back to home.</h5>
                </Col>
            </Row>
            <Link to="/"><Button>Back to homepage</Button></Link>
        </Container>
    )
}