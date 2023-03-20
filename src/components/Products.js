import Container  from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { useEffect, useState } from 'react'
export default function Products(props){

    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/`)
             .then(response => {
                if(response.ok){
                    return response.json()
                } else {
                    return Promise.reject(response)
                }
             })
             .then(data => {
                console.log(data)
                setProducts(data)                
            })
             .catch(err => console.log(err))
    }, []) 
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