import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
export default function Products(props){
    let products = props.products;
    console.log(props.newProducts)
    return(
        <Container>
            <Row id="try">
                {props.newProducts && <Row className="text-center ms-2 mt-4" variant="light">
                    {props.newProducts.map((product) => (
                        <Col md={4} key={product.id}>
                            <img src={product.image} alt="product" width={200} height={200}></img>
                            <p>{product.title}</p>
                            <p>{product.price} $</p>
                            <Button className="mb-4" variant="success">Add to cart</Button>
                        </Col>
                    ))}
                </Row>}
            </Row>
        </Container>
    )
}