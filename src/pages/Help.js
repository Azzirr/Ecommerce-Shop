import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
export default function Help(){
    return(
        <Container className="w-50">
            <Row>
                <h2>Do you have any problems? Contact us!</h2>
            </Row>
            <Form>
            <Form.Group>
                <Row>
                    <Col md={6}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="Type your name..."></Form.Control>
                    </Col>
                    <Col md={6}>
                            <Form.Label>Second name</Form.Label>
                            <Form.Control placeholder="Type your second name..."></Form.Control>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col >
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control placeholder="Type your e-mail..."></Form.Control>
                    </Col>
                </Row>
                <Row>
                    <span style={{margin: "5px 0 5px 25%"}}>Please select category for your problem</span>
                </Row>
                <Row className="w-50" style={{margin: "5px 0 5px 40%"}}>
                    <Form.Check label="Problem with order"></Form.Check>
                    <Form.Check label="Problem with login"></Form.Check>
                    <Form.Check label="Problem with page"></Form.Check>
                </Row>
                <Row className="mb-2">
                    <Form.Label>Describe your problem</Form.Label>
                    <Form.Control as="textarea" rows={3} maxLength="1000"/>
                </Row>
                <Row className="mb-5">
                    <Button variant="success">Submit</Button>
                </Row>
            </Form.Group>
            </Form>
            <Row style={{margin: "50% 0 5px 36%"}}>
                <Link to="/"><Button>Back to homepage</Button></Link>
            </Row>
        </Container>
    )
}