import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { useState, useContext, useRef, useEffect } from 'react';
import { CartContext } from "../context/ShoppingCartContext";

export default function Products(props){
    const {cartProducts, setCartProducts} = useContext(CartContext);
    //popup
    const [show, setShow] = useState(false);
    const [currentDescription, setCurrentDescription] = useState('');
    // Header change
    const changeCategoryHeader = useRef('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
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

    function showCategoryTitle(){
        if(props.filterByCategory === "men's clothing"){
            changeCategoryHeader.current.innerText = "Check our men's offer!"
        } else if (props.filterByCategory === "women's clothing"){
            changeCategoryHeader.current.innerText = "Check our women's offer!"
        } else if (props.filterByCategory === "electronics"){
            changeCategoryHeader.current.innerText = "Powerful electronics!"
        } else if (props.filterByCategory === "jewelery"){
            changeCategoryHeader.current.innerText = "Jewelery for everyone!"
        } else if(props.filterByCategory === ('all' || '')){
            changeCategoryHeader.current.innerText = "Our offer"
        }
        //Bug with application when innerText changed and we want to see details of an item
    }
   // showCategoryTitle();

    // console.log(props.newProducts)
    return(
        <Container>
            <Row>
                <h4 className='text-center mt-4'>Click on item to see details</h4>
                <div>
                    <h5 type="text" className='text-center bg-light' ref={changeCategoryHeader}>Our offer</h5>
                </div>
                {props.newProducts && <Row  md={3} xs={1} className="text-center ms-2 mt-4" variant="light">
                    {props.newProducts.filter((item) => {
                        return props.search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(props.search)
                    }).filter((item) => {
                        if(props.filterByCategory === 'all'){
                            return item;
                        } else if(props.filterByCategory === "men's clothing"){
                            return item.category === "men's clothing"
                        } else {
                            return props.filterByCategory === item.category ? item : item.category.includes(props.filterByCategory)
                        }
                    }).map((product) => (
                        <Col key={product.id}>
                            <img className="cursorPointer" src={product.image} alt={product.title} width={200} height={200} onClick={showDescription(product.description)}></img>
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