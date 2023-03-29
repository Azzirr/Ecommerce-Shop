import { useLocation } from "react-router-dom";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';
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
                                <img src={product.image} alt="product" width={100} height={100} ></img>
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
                        <Form.Control type="email" maxLength="20"></Form.Control>
                    </Col>

                    <Col md={6}>
                        <Form.Label>Second name</Form.Label>
                        <Form.Control type="email" maxLength="20"></Form.Control>
                    </Col>
                    </Row>

                    <Form.Label>E-mail address</Form.Label>
                    <Form.Control type="email" maxLength="30"></Form.Control>

                    <Form.Label>City</Form.Label>
                    <Form.Control type="email"></Form.Control>
                    <Row>
                        <Form.Label>Street and postcode</Form.Label>
                        <Col>                    
                            <Form.Control type="number" maxLength="2"></Form.Control>
                        </Col>
                            - 
                        <Col>
                            <Form.Control type="number" maxLength="3" style={{float: "left"}}></Form.Control>
                        </Col>
                    </Row>

                    <Form.Label>Phonenumber</Form.Label>
                    <Form.Control type="number" maxLength="9"></Form.Control>
                    
                    <Form.Text className="text-muted">This project is only for educational purposes. Your data will not be send anywhere.</Form.Text>
                    <Row>
                        <Button variant="success">Submit</Button>
                    </Row>
                </Form.Group>
            </Form>
        </Row>
    </Container>
    )
}