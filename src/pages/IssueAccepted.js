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
                        <h2>Success! Your issue has been accepted.</h2>
                        <h3>We will take care of your case soon.</h3>
                        <h4>Check out our other items.</h4>
                        <Link to="/"><Button>Back to homepage</Button></Link>
                    </Col>
                </Row>
            </Container>
        </>
    )
}