import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useState, useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

export default function Products(props){
    let products = props.products;
    const {cartProducts, setCartProducts} = useContext(CartContext);
    // console.log(props.newProducts)
    return(
        <Container>
            <Row id="try">
                {props.newProducts && <Row  md={3} xs={2} className="text-center ms-2 mt-4" variant="light">
                    {props.newProducts.map((product) => (
                        <Col key={product.id}>
                            <img src={product.image} alt="product" width={200} height={200}></img>
                            <p>{product.title}</p>
                            <p>{product.price} $</p>
                            <Button className="mb-4" variant="success" onClick={() => setCartProducts(currentProducts => [...currentProducts, product])}>Add to cart</Button>
                        </Col>
                    ))}
                </Row>}
            </Row>
            {/* <button onClick={test2}>TEST 2</button> */}
        </Container>
    )
}