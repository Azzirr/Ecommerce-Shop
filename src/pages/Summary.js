import { useLocation } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
import { useState } from "react";
export default function Summary(){
    const {state} = useLocation();
    const {cartProducts} = state;
    let summaryProducts = state.cartProducts;
    let sum = 0;
    let taxesSum = 0;
    for(let i = 0; i < summaryProducts.length; i++){
        sum += summaryProducts[i].price;
        taxesSum += summaryProducts[i].price * 0.23;
    }
    sum = sum.toFixed(2);
    taxesSum = taxesSum.toFixed(2);

    // Form validation
    const [values, setValues] = useState({
        name: "",
        secondName: "",
        email: "",
        city: "",
        street: "",
        postcode1: "",
        postcode2: "",
        phoneNumber: "",
    });

    const errors = {
        nameError: "Name should be 2-16 characters and shouldn't include any special character!",
        secondNameError: "Second name should be 2-16 characters and shouldn't include any special character!",
        emailError: "Your email address is not valid!",
        cityError: "City should be 3-20 characters and shouldn't include any special character!",
        streetError: "Street should be 2-20 characters and shouldn't include any special character!",
        postcode1Error: "First postcode member should be 2 characters (number only)!",
        postcode2Error: "Second postcode member should be 3 characters (number only)!",
        phoneNumberError: "Phone number should be 9 characters and shouldn't include any special character or letter!"
    }

    // regex patterns
    const patterns = {
        namePattern: "^[A-Za-z' ']{2,16}$",
        secondNamePattern: "^[A-Za-z]{2,16}$",
        cityPattern: "^[A-Za-z]{3,20}$",
        streetPattern: "^[A-Za-z0-9' ']{2,16}$",
        postcode1Pattern: "^[0-9]{2,2}$",
        postcode2Pattern: "^[0-9]{3,3}$",
        phoneNumberPattern: "^[0-9]{9,9}$"
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


    function validateForm(){
    }


    return(
    <Container>
        <Row className="mt-2">
            <Col xs={8}>
                <h1>Summary</h1>
            </Col>
            <Col className="offset-3">
                <Link to="/">
                    <Button>Go back</Button>
                </Link>
            </Col>
        </Row>
        <Row  md={3} xs={1} className="text-center ms-2 mt-4" variant="light">
                    {summaryProducts.map((product) => (
                        <Row>
                            <Col key={product.id}>
                                <img src={product.image} alt="product" width={100} height={100}></img>
                                <p>{product.title}</p>
                                <p>{product.price} $</p>
                            </Col>
                        </Row>
                    ))}
        </Row>
        <Row className="mt-5">
            <h5>Total price: {sum} $</h5>
            <h5>Including taxes: {taxesSum} $</h5>
        </Row>
        <Row className="mb-2  center d-flex align-items-center justify-content-center">
            <h2 className="text-center">Adress</h2>
            <Form className="w-50">
                <Form.Group>
                    <Row>
                    <Col md={6}>
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" maxLength="16" value={values.name} name="name" onChange={handleChange} pattern={patterns.namePattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                        <span className="error">{errors.nameError}</span>
                    </Col>

                    <Col md={6}>
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="text" maxLength="16" value={values.secondName} name="secondName" onChange={handleChange} pattern={patterns.secondNamePattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                        <span className="error">{errors.secondNameError}</span>
                    </Col>
                    </Row>

                    <Form.Label>E-mail address</Form.Label>
                    <Form.Control type="email" maxLength="30" value={values.email} name="email" onChange={handleChange} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                    <span className="error">{errors.emailError}</span>

                    <Col>
                        <Form.Label>City</Form.Label>
                        <Form.Control type="text" value={values.city} maxLength="20" name="city" onChange={handleChange} pattern={patterns.cityPattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                        <span className="error">{errors.cityError}</span>
                    </Col>


                    <Form.Label>Street</Form.Label>
                    <Form.Control type="text" value={values.street} maxLength="20" name="street" onChange={handleChange} pattern={patterns.streetPattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                    <span className="error">{errors.streetError}</span>


                    <Row>
                        <Form.Label>Postcode</Form.Label>
                        <Col>                    
                            <Form.Control type="text" maxLength="2" value={values.postcode1} name="postcode1" onChange={handleChange} pattern={patterns.postcode1Pattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                            <span className="error">{errors.postcode1Error}</span>
                        </Col>
                            - 
                        <Col>
                            <Form.Control type="text" maxLength="3" value={values.postcode2} name="postcode2" onChange={handleChange} style={{float: "left"}} pattern={patterns.postcode2Pattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                            <span className="error">{errors.postcode2Error}</span>
                        </Col>
                    </Row>
                    
                    <Col>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control type="tel" maxLength="9" value={values.phoneNumber} name="phoneNumber" onChange={handleChange} pattern={patterns.phoneNumberPattern} onBlur={handleFocus} focus={focus.toString()} required></Form.Control>
                        <span className="error">{errors.phoneNumberError}</span>
                    </Col>
                    
                    <Form.Text className="text-muted">This project is only for educational purposes. Your data will not be send anywhere.</Form.Text>
                    <Row>
                        <Button variant="success" onClick={validateForm}>Submit</Button>
                    </Row>
                </Form.Group>
            </Form>
        </Row>
    </Container>
    )
}