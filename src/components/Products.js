import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
export default function Products(props){
    const products = props.products;
    return(
        <Container>
            <Row>
                {products && <Row className="text-center ms-2 mt-4" variant="light">
                    {/* <input onChange={productRender} type="text" placeholder='input' ></input> */}
                    {products.map((product) => (
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