import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import logo from '../assets/logo.png'
import shoppingBag from '../assets/shopping-bag.svg'
import support from '../assets/support.svg'
export default function Header(props){
    function sortCheapestToExpensive(){
        let products = [{"id": 4, "title": "Test1", "price": "510"}, {"id": 5, "title": "Test2", "price": "333"}]
        props.setNewProducts(products)
    }
    return(
        <Container>
            <Row className='pt'>
                <Col md={2}>
                    <img src={logo} alt="logo"></img>
                </Col>
                <Col md={1}  className='pt-3'>
                    <Dropdown>
                        <Dropdown.Toggle variant="secondary">
                                Sort items
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item value="cheapestToExpensive" onClick={sortCheapestToExpensive}>Cheapest to expensive</Dropdown.Item>
                            <Dropdown.Item value="expensiveToCheapest">Expensive to cheapest</Dropdown.Item>
                            <Dropdown.Item value="aToZ" >A to Z</Dropdown.Item>
                            <Dropdown.Item value="zToA">Z to A</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Col>
                <Col md={4} className='pt-3'>
                    <InputGroup>
                        <Form.Control placeholder="Search for items..." className='offset-1'></Form.Control>
                    </InputGroup>
                </Col>
                <Col md={1} className='pt-3'>
                    <Button variant="success">SEARCH</Button>
                </Col>
                <Col md={2} className='pt-2 text-center'>
                    <img src={shoppingBag} alt="shopping bag" width={50} height={50}></img>
                    <img src={support} alt="support" width={50} height={50}></img>
                </Col>
                <Col md={2} className='pt-3'>
                    <Dropdown>
                            <Dropdown.Toggle variant="success">
                                Open Menu
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item href="#">
                                    LOGIN
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Setting 2
                                </Dropdown.Item>
                                <Dropdown.Item href="#">
                                    Setting 3
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                </Col>
            </Row>
            <Row>
                <Navbar expand="sm" bg="light">
                    <Nav>
                        <Nav.Link>Men's clothing</Nav.Link>
                        <Nav.Link href="#">Woman's clothing</Nav.Link>
                        <Nav.Link href="#">Electronics</Nav.Link>
                        <Nav.Link href="#">Jewelery</Nav.Link>
                        <Nav.Link href="#">What's new?</Nav.Link>
                    </Nav>
                </Navbar>
            </Row>
        </Container>
    )
}