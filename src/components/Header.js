import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Dropdown from 'react-bootstrap/Dropdown'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import logo from '../assets/logo.png'
import shoppingBag from '../assets/shopping-bag.svg'
import support from '../assets/support.svg'
export default function Header(){
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
                            <Dropdown.Item>Chapest to expensive</Dropdown.Item>
                            <Dropdown.Item href="#">Expensive to cheapest</Dropdown.Item>
                            <Dropdown.Item href="#">A to Z</Dropdown.Item>
                            <Dropdown.Item href="#">Z to A</Dropdown.Item>
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
                <Col md={3}>
                    Category 1
                </Col>
                <Col md={3}>
                    Category 2
                </Col>
                <Col md={3}>
                    Category 3
                </Col>
                <Col md={3}>
                    What's new?
                </Col>
            </Row>
        </Container>
    )
}