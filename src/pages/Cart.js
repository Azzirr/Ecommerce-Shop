import { useContext } from "react";
import { CartContext, IsOpenContext } from "../context/ShoppingCartContext.js";
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button';
export default function Cart(context){
    const {isOpen, setIsOpen} = useContext(IsOpenContext);
    const {cartProducts, setCartProducts} = useContext(CartContext);
    const closeCart = () => setIsOpen(false);

    // Count total price
    let sum = 0;
    let taxesSum = 0;
    if(isOpen === true){
        for(let i = 0; i < cartProducts.length; i++){
            sum += cartProducts[i].price;
            taxesSum = (cartProducts[i].price * 0.23).toFixed(2)
        }
    }
    return(
        <Offcanvas show={isOpen} onHide={closeCart}>
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
                            <Button variant="danger">Remove from cart</Button>
                        </Col>
                    ))}
                </Row>
                <Row className="mt-2">Total price: {sum} $</Row>
                <Row className="mt-2">Including taxes 23%: {taxesSum} $</Row>
                <Row className="mt-2">
                    <Link to="/summary" className="text-center" >
                        <Button variant="success" className="w-100" >Go to payment</Button>
                    </Link>
                </Row>
            </Offcanvas.Body>
        </Offcanvas>
    )
}