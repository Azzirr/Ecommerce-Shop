import { useContext } from "react";
import { CartContext, IsOpenContext } from "../context/ShoppingCartContext.js";
import { Link, useNavigate } from 'react-router-dom';
import Summary from "./Summary";
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
export default function Cart(){
    const {isOpen, setIsOpen} = useContext(IsOpenContext);
    let {cartProducts, setCartProducts} = useContext(CartContext);
    const closeCart = () => setIsOpen(false);
    const navigate = useNavigate();

    function payment(){
        if(cartProducts.length > 0){
            navigate('/summary', { state: {cartProducts}});
        } else {
            alert('Your cart is empty. Please add something, if you want to continue.')
        }
    }

    const removeFromCart = (parameter) => (event) => {
        let removeProduct = cartProducts.splice(cartProducts.indexOf(parameter), 1); //returns item i clicked
        console.log(cartProducts) // returns array without item i clicked
        setCartProducts(currentProducts => [...currentProducts])
    }

    // Count total price
    let sum = 0;
    let taxesSum = 0
    if(isOpen === true){
        for(let i = 0; i < cartProducts.length; i++){
            sum += cartProducts[i].price;
            taxesSum += cartProducts[i].price * 0.23
        }
        sum = sum.toFixed(2)
        taxesSum = taxesSum.toFixed(2)
    }
    return(
        <Offcanvas show={isOpen} onHide={closeCart} placement={"end"}>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Cart</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Row xs={1} className="text-center ms-2 mt-4" variant="light">
                    {cartProducts.map((product) => (
                        <Col key={product.id}>
                            <img src={product.image} alt="product" width={200} height={200}></img>
                            <p>{product.title}</p>
                            <p>{product.price} $</p>
                            <Button variant="danger" onClick={removeFromCart(product)}>Remove from cart</Button>
                        </Col>
                    ))}
                </Row>
                <Row className="mt-2">Total price: {sum} $</Row>
                <Row className="mt-2">Including taxes 23%: {taxesSum} $</Row>
                <Row className="mt-2">
                <Button variant="success" className="w-100" onClick={payment}>Go to payment</Button>
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    )
}