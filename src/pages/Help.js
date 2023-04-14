import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Help(){
    const [values, setValues] = useState({
        name: "",
        secondName: "",
        email: "",
        category: "",
        description: "",
    })

    const errors = {
        nameError: "Name should be 2-16 characters and shouldn't include any special character!",
        secondNameError: "Second name should be 2-16 characters and shouldn't include any special character!",
        emailError: "Your email address is not valid!",
        descriptionError: "Please fill this field!"
    }

    // regex patterns
    const patterns = {
        namePattern: "^[A-Za-z' ']{2,16}$",
        secondNamePattern: "^[A-Za-z]{2,16}$",
    }

    // handler for changing object values in setValues hook
    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues(prevValues => ({
            ...prevValues,
            [name] : value
        }))
    }

    const [focus, setFocus] = useState(false);
    const handleFocus = (event) => {
        setFocus(true);
    }

    return(
        <Container className="w-50">
            <Row>
                <h2>Do you have any problems? Contact us!</h2>
            </Row>
            <Form action="/issue-accepted">
            <Form.Group>
                <Row>
                    <Col md={6}>
                            <Form.Label>First name</Form.Label>
                            <Form.Control placeholder="Type your name..." type="text" value={values.name} name="name" onChange={handleChange} pattern={patterns.namePattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                            <span className="error">{errors.nameError}</span>
                    </Col>
                    <Col md={6}>
                            <Form.Label>Second name</Form.Label>
                            <Form.Control placeholder="Type your second name..." type="text" value={values.secondName} name="secondName" onChange={handleChange} pattern={patterns.secondNamePattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                            <span className="error">{errors.secondNameError}</span>
                    </Col>
                </Row>
                <Row className="mt-2">
                    <Col >
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control placeholder="Type your e-mail..." type="email" value={values.email} name="email" onChange={handleChange} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                            <span className="error">{errors.emailError}</span>
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
                    <Form.Control as="textarea" rows={3} maxLength="1000" placeholder="Describe your problem..." type="text" value={values.description} name="description" onChange={handleChange} onBlur={handleFocus} focus={focus.toString()} required/>
                    <span className="error">{errors.descriptionError}</span>
                </Row>
                <Row className="mb-5">
                    <Button variant="success" type="submit">Submit</Button>
                </Row>
            </Form.Group>
            </Form>
            <Row style={{margin: "50% 0 5px 36%"}}>
                <Link to="/"><Button>Back to homepage</Button></Link>
            </Row>
        </Container>
    )
}