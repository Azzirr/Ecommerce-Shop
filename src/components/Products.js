import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState, useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

export default function Products(props){
    let products = props.products;
    const {cartProducts, setCartProducts} = useContext(CartContext);

    //popup
    const [show, setShow] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    // function showDescription(product){
    //     handleShow();
    //     setCurrentDescription(product.description)
    // }
    
    const showDescription = (parameter) => (event) => {
        handleShow();
        setCurrentDescription(parameter)
    }

    if(show === true){
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>{currentDescription}</Modal.Body>
                </Modal>
            </>
        );
    }
    

        

    // console.log(props.newProducts)
    return(
        <Container>
            <Row>
                <h4 className='text-center mt-4'>Click on item to see details</h4>
                {props.newProducts && <Row  md={3} xs={2} className="text-center ms-2 mt-4" variant="light">
                    {props.newProducts.map((product) => (
                        <Col key={product.id}>
                            <img className="cursorPointer" src={product.image} alt="product" width={200} height={200} onClick={showDescription(product.description)}></img>
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