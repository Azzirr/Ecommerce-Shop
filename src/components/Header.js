import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Link} from 'react-router-dom';
import logo from "../assets/logo.png";
import shoppingBag from "../assets/shopping-bag.svg";
import support from "../assets/support.svg";
import { useContext } from "react";
import { CartContext, IsOpenContext } from "../context/ShoppingCartContext";
import Button from "react-bootstrap/esm/Button";
export default function Header(props) {
  const { cartProducts } = useContext(CartContext);
  const { setIsOpen} = useContext(IsOpenContext);
  const openCart = () => setIsOpen(true);
  let itemsInCart = cartProducts.length;
  // Sorting functions
  function sortProducts(event) {
    const newArr = [...props.newProducts]
    if (event.target.value === "cheapestToExpensive") {
      newArr.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      return props.setNewProducts(newArr);
    } else if (event.target.value === "expensiveToCheapest") {
      newArr.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      return props.setNewProducts(newArr);
    } else if ((event.target.value = "aToZ")) {
      newArr.sort((a, b) => {
        if (a.title < b.title) {
          return -1;
        } else if (a.title > b.title) {
          return 1;
        } else {
          return 0;
        }
      });
      return props.setNewProducts(newArr);
    }
  }

  function navAll(){
    props.setFilterByCategory("all");
    props.setItWhatsNewActive(false);
  }
  function navMen(){
    props.setFilterByCategory("men's clothing")
    props.setItWhatsNewActive(false);
  }
  function navWomen(){
    props.setFilterByCategory("women's clothing")
    props.setItWhatsNewActive(false);
  }
  function navElectronics(){
    props.setFilterByCategory("electronics")
    props.setItWhatsNewActive(false);
  }
  function navJewelery(){
    props.setFilterByCategory("jewelery")
    props.setItWhatsNewActive(false);
  }
  function navWhatsNew(){
    props.setItWhatsNewActive(true);
  }
  function showLoginComponent(){
    if(props.isLoginActive === false){
      props.setIsLoginActive(true);
    } else {
      props.setIsLoginActive(false)
    }
  }

  return (
    <Container>
      <Row className="pt">
        <Col md={2}>
          <img src={logo} alt="logo"></img>
        </Col>
        <Col md={2} className="pt-3">
        <select onChange={sortProducts} className="form-control">
          <option value="all">Select...</option>
          <option value="cheapestToExpensive">Cheapest to expensive</option>
          <option value="expensiveToCheapest">Expensive to cheapest</option>
          <option value="aToZ">Sort descending</option>
        </select>
        </Col>
        <Col md={4} className="pt-3">
          <InputGroup>
            <Form.Control
              placeholder="Search for items..."
              className="offset-1"
              onChange={(event) => props.setSearch(event.target.value)}
            ></Form.Control>
          </InputGroup>
        </Col>
        <Col
          md={1}
          style={{ width: "3rem", height: "3rem", position: "relative" }}
          variant="outline-primary"
          className="rounded-circle pt-2 ps-5"
        >
          <img src={shoppingBag} alt="shopping bag" width={50} height={50} onClick={openCart} className="cursorPointer"></img>
          <div
            className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
            style={{
              color: "white",
              width: "1.5rem",
              height: "1.5rem",
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "translate(155%, 45%)",
            }}
          >
            {itemsInCart}
          </div>
        </Col>
        <Col className="rounded-circle pt-2 ps-5">
          <Link to="/support">
            <img src={support} alt="support" width={50} height={50} className="cursorPointer"></img>
          </Link>
        </Col>
        <Col md={2} className="pt-3">
          <Button variant="success" onClick={showLoginComponent}>LOGIN</Button>
        </Col>
      </Row>
      <Row>
        <Navbar expand="sm" bg="light">
          <Nav> 
            <Nav.Link as={Link} to="/" onClick={navAll} className="navbarTextDecorationNone">All</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={navMen} className="navbarTextDecorationNone">Men's clothing</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={navWomen} className="navbarTextDecorationNone">Women's clothing</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={navElectronics} className="navbarTextDecorationNone">Electronics</Nav.Link>
            <Nav.Link as={Link} to="/" onClick={navJewelery} className="navbarTextDecorationNone">Jewelery</Nav.Link>
            <Nav.Link as={Link} to="/whats-new" onClick={navWhatsNew} className="navbarTextDecorationNone">What's new?</Nav.Link>
          </Nav>
        </Navbar>
      </Row>
    </Container>
  );
}
